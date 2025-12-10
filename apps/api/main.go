// cmd/server/main.go
package main

import (
	"log"

	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"

	"content-samurai/api/internal/config"
	httpRouter "content-samurai/api/internal/http"
	"content-samurai/api/internal/queue"
	"content-samurai/api/internal/stream"
)

func main() {
	cfg := config.Load()

	mq, err := queue.New(cfg.RabbitMQHost, cfg.RabbitMQPort, cfg.RabbitMQDefaultUser, cfg.RabbitMQDefaultPass)
	if err != nil {
		log.Fatalf("rabbitmq connect error: %v", err)
	}
	defer mq.Close()

	redis := stream.New(cfg.GetRedisAddr())

	r := gin.Default()

	// Setup CORS middleware
	r.Use(cors.New(cors.Config{
		AllowOrigins:     []string{"http://localhost:3000", "http://localhost:3001", "http://localhost:3002"},
		AllowMethods:     []string{"GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"},
		AllowHeaders:     []string{"Origin", "Content-Type", "Accept", "Authorization"},
		ExposeHeaders:    []string{"Content-Length"},
		AllowCredentials: true,
	}))

	httpRouter.Setup(r, mq, redis)

	addr := ":8080"
	log.Printf("🚀 API running on %s", addr)
	if err := r.Run(addr); err != nil {
		log.Fatalf("server failed: %v", err)
	}
}
