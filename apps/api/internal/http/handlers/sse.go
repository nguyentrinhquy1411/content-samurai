package handlers

import (
	"fmt"
	"net/http"
	"strings"
	"time"

	"github.com/gin-gonic/gin"

	"content-samurai/api/internal/stream"
)

type SSEHandler struct {
	Redis *stream.Redis
}

func NewSSEHandler(r *stream.Redis) *SSEHandler {
	return &SSEHandler{Redis: r}
}

func (h *SSEHandler) Stream(c *gin.Context) {
	jobId := c.Param("jobId")
	if jobId == "" {
		c.JSON(http.StatusBadRequest, gin.H{"error": "jobId required"})
		return
	}

	c.Writer.Header().Set("Content-Type", "text/event-stream")
	c.Writer.Header().Set("Cache-Control", "no-cache")
	c.Writer.Header().Set("Connection", "keep-alive")
	// optional: prevent buffering in some proxies
	c.Writer.Header().Set("X-Accel-Buffering", "no")

	flusher, ok := c.Writer.(http.Flusher)
	if !ok {
		c.String(http.StatusInternalServerError, "streaming unsupported")
		return
	}

	ctx := c.Request.Context()
	// subscribe to Redis channel "stream:{jobId}"
	ch := h.Redis.Subscribe(ctx, fmt.Sprintf("stream:%s", jobId))
	defer ch.Close()

	// Wait for subscription to be ready (optional)
	_, err := ch.Receive(ctx)
	if err != nil {
		c.String(http.StatusInternalServerError, "failed to subscribe")
		return
	}

	// Channel to receive messages
	pubsubCh := ch.Channel()

	// heartbeat ticker to keep connection alive
	ticker := time.NewTicker(25 * time.Second)
	defer ticker.Stop()

	// stream loop
	for {
		select {
		case <-ctx.Done():
			// client disconnected
			return
		case msg, ok := <-pubsubCh:
			if !ok {
				return
			}
			payload := msg.Payload

			// handle signals
			if payload == "__DONE__" {
				c.Writer.Write([]byte("data: {\"done\": true}\n\n"))
				flusher.Flush()
				return
			}
			if strings.HasPrefix(payload, "__ERROR__:") {
				errMsg := strings.TrimPrefix(payload, "__ERROR__:")
				c.Writer.Write([]byte(fmt.Sprintf("data: {\"error\": %q}\n\n", errMsg)))
				flusher.Flush()
				return
			}

			// normal chunk
			c.Writer.Write([]byte(fmt.Sprintf("data: {\"chunk\": %q}\n\n", payload)))
			flusher.Flush()

		case <-ticker.C:
			// keep-alive comment
			c.Writer.Write([]byte(": ping\n\n"))
			flusher.Flush()
		}
	}
}
