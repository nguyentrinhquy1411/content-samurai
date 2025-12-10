package stream

import (
	"context"

	"github.com/redis/go-redis/v9"
)

type Redis struct {
	Client *redis.Client
}

func New(addr string) *Redis {
	client := redis.NewClient(&redis.Options{
		Addr: addr,
	})
	return &Redis{Client: client}
}

// Subscribe returns a PubSub for given channel (caller must Close())
func (r *Redis) Subscribe(ctx context.Context, channel string) *redis.PubSub {
	return r.Client.Subscribe(ctx, channel)
}
