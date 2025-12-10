package handlers

import (
	"context"
	"net/http"

	"github.com/gin-gonic/gin"
	"github.com/google/uuid"

	"content-samurai/api/internal/model"
	"content-samurai/api/internal/queue"
)

type BlogHandler struct {
	MQ *queue.Rabbit
}

func NewBlogHandler(mq *queue.Rabbit) *BlogHandler {
	return &BlogHandler{MQ: mq}
}

func (h *BlogHandler) Create(c *gin.Context) {
	var req struct {
		Topic string `json:"topic"`
	}

	if err := c.BindJSON(&req); err != nil || len(req.Topic) == 0 {
		c.JSON(http.StatusBadRequest, gin.H{"error": "invalid topic"})
		return
	}

	job := model.BlogJob{
		JobID: uuid.New().String(),
		Topic: req.Topic,
	}

	if err := h.MQ.Publish(context.Background(), job); err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "failed to publish job", "detail": err.Error()})
		return
	}

	c.JSON(http.StatusOK, gin.H{"job_id": job.JobID})
}
