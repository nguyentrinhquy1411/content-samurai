package http

import (
	"github.com/gin-gonic/gin"

	"content-samurai/api/internal/http/handlers"
	"content-samurai/api/internal/queue"
	"content-samurai/api/internal/stream"
)

func Setup(r *gin.Engine, mq *queue.Rabbit, redis *stream.Redis) {
	// handlers
	bh := handlers.NewBlogHandler(mq)
	sh := handlers.NewSSEHandler(redis)
	r.GET("/health", handlers.Health)

	api := r.Group("/api")
	{
		api.POST("/blog", bh.Create)
		api.GET("/stream/:jobId", sh.Stream)
	}
}
