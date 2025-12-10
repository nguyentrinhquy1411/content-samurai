package queue

import (
	"context"
	"encoding/json"
	"fmt"

	"content-samurai/api/internal/model"

	amqp "github.com/rabbitmq/amqp091-go"
)

type Rabbit struct {
	conn    *amqp.Connection
	channel *amqp.Channel
	queue   string
}

func New(host string, port int, user, pass string) (*Rabbit, error) {
	url := fmt.Sprintf("amqp://%s:%s@%s:%d/", user, pass, host, port)
	conn, err := amqp.Dial(url)
	if err != nil {
		return nil, err
	}

	ch, err := conn.Channel()
	if err != nil {
		conn.Close()
		return nil, err
	}

	qName := "blog_jobs"
	_, err = ch.QueueDeclare(
		qName,
		true,  // durable
		false, // delete when unused
		false, // exclusive
		false, // no-wait
		nil,   // args
	)
	if err != nil {
		ch.Close()
		conn.Close()
		return nil, err
	}

	return &Rabbit{
		conn:    conn,
		channel: ch,
		queue:   qName,
	}, nil
}

func (r *Rabbit) Publish(ctx context.Context, job model.BlogJob) error {
	body, err := json.Marshal(job)
	if err != nil {
		return err
	}

	return r.channel.PublishWithContext(
		ctx,
		"",      // exchange
		r.queue, // routing key = queue name
		false,   // mandatory
		false,   // immediate
		amqp.Publishing{
			ContentType:  "application/json",
			Body:         body,
			DeliveryMode: amqp.Persistent,
		},
	)
}

func (r *Rabbit) Close() {
	if r.channel != nil {
		r.channel.Close()
	}
	if r.conn != nil {
		r.conn.Close()
	}
}
