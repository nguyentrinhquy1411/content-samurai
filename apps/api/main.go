// cmd/server/main.go
package main

import (
	"log"

	"github.com/gin-gonic/gin"

	httpRouter "content-samurai/api/internal/http"
)

func main() {
	// cfg := config.Load()

	// mq, err := queue.New(cfg.RabbitURL)
	// if err != nil {
	// 	log.Fatal(err)
	// }

	// redis := stream.New(cfg.RedisAddr)

	router := gin.Default()

	// bh := &handlers.BlogHandler{MQ: mq}
	//    sh := &handlers.SSEHandler{Redis: redis}

	httpRouter.Setup(router)

	log.Println("🚀 API running on :8080")
	router.Run(":8080")
}
