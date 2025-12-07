package http

import (
	"github.com/gin-gonic/gin"

	"content-samurai/api/internal/http/handlers"
)

func Setup(r *gin.Engine) {
	r.GET("/health", handlers.Health)
}
