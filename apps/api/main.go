package main

import (
	"net/http"

	"github.com/gin-gonic/gin"
)

func main() {
	// Initialize Gin engine
	r := gin.Default()

	// Define a simple health check route
	r.GET("/health", func(c *gin.Context) {
		c.JSON(http.StatusOK, gin.H{
			"status":  "ok",
			"message": "API is running",
		})
	})

	// Example route
	r.GET("/ping", func(c *gin.Context) {
		c.JSON(http.StatusOK, gin.H{
			"message": "pong",
		})
	})

	// Start the server on port 8080
	// Error handling for server startup
	if err := r.Run(":8080"); err != nil {
		panic("Failed to start server: " + err.Error())
	}
}

