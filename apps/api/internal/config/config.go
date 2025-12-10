package config

import (
	"fmt"
	"log"
	"os"
	"strconv"

	"github.com/joho/godotenv"
)

type Config struct {
	// Redis Configuration
	RedisHost string
	RedisPort int

	// RabbitMQ Configuration
	RabbitMQHost        string
	RabbitMQPort        int
	RabbitMQDefaultUser string
	RabbitMQDefaultPass string
}

func Load() *Config {
	// Load .env file from the project root (two levels up from this file)
	if err := godotenv.Load("../../.env"); err != nil {
		log.Printf("Warning: .env file not found, using environment variables or defaults")
	}

	config := &Config{
		// Redis Configuration
		RedisHost: getEnv("REDIS_HOST", "localhost"),
		RedisPort: getEnvAsInt("REDIS_PORT", 6379),

		// RabbitMQ Configuration
		RabbitMQHost:        getEnv("RABBITMQ_HOST", "localhost"),
		RabbitMQPort:        getEnvAsInt("RABBITMQ_PORT", 5672),
		RabbitMQDefaultUser: getEnv("RABBITMQ_DEFAULT_USER", "admin"),
		RabbitMQDefaultPass: getEnv("RABBITMQ_DEFAULT_PASS", "password"),
	}

	// Validate configuration
	if err := config.Validate(); err != nil {
		panic(err)
	}

	fmt.Println("All configuration keys are set!!")
	return config
}

// Validate checks if all required configuration values are set
func (c *Config) Validate() error {
	if c.RedisHost == "" {
		return fmt.Errorf("REDIS_HOST is not set")
	}
	if c.RedisPort == 0 {
		return fmt.Errorf("REDIS_PORT is not set")
	}
	if c.RabbitMQHost == "" {
		return fmt.Errorf("RABBITMQ_HOST is not set")
	}
	if c.RabbitMQPort == 0 {
		return fmt.Errorf("RABBITMQ_PORT is not set")
	}
	if c.RabbitMQDefaultUser == "" {
		return fmt.Errorf("RABBITMQ_DEFAULT_USER is not set")
	}
	if c.RabbitMQDefaultPass == "" {
		return fmt.Errorf("RABBITMQ_DEFAULT_PASS is not set")
	}
	return nil
}

// GetRedisAddr returns the Redis address in host:port format
func (c *Config) GetRedisAddr() string {
	return fmt.Sprintf("%s:%d", c.RedisHost, c.RedisPort)
}

// GetRabbitMQURL returns the RabbitMQ connection URL
func (c *Config) GetRabbitMQURL() string {
	return fmt.Sprintf(
		"amqp://%s:%s@%s:%d/",
		c.RabbitMQDefaultUser,
		c.RabbitMQDefaultPass,
		c.RabbitMQHost,
		c.RabbitMQPort,
	)
}

func getEnv(key string, defaultValue string) string {
	value := os.Getenv(key)
	if value == "" {
		return defaultValue
	}
	return value
}

func getEnvAsInt(key string, defaultValue int) int {
	valueStr := os.Getenv(key)
	if valueStr == "" {
		return defaultValue
	}
	value, err := strconv.Atoi(valueStr)
	if err != nil {
		return defaultValue
	}
	return value
}
