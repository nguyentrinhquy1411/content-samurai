package config

import (
	"os"
)

type Config struct {
	RedisAddr string
	RabbitURL string
}

func Load() *Config {
	return &Config{
		RedisAddr: getEnv("REDIS_ADDR", "localhost:6379"),
		RabbitURL: getEnv(
			"RABBITMQ_URL",
			"amqp://guest:guest@localhost:5672/",
		),
	}
}

func getEnv(key string, defaultValue string) string {
	value := os.Getenv(key)
	if value == "" {
		return defaultValue
	}
	return value
}
