import json

import pika
import redis

from app.workers.content_agent import stream_seo_blog
from config import CONFIG


def main():
    # Connect Redis
    redis_client = redis.Redis(
        host=CONFIG.REDIS_HOST, port=CONFIG.REDIS_PORT, decode_responses=True
    )

    # Connect RabbitMQ
    credentials = pika.PlainCredentials(
        CONFIG.RABBITMQ_DEFAULT_USER, CONFIG.RABBITMQ_DEFAULT_PASS
    )
    parameters = pika.ConnectionParameters(
        host=CONFIG.RABBITMQ_HOST,
        port=CONFIG.RABBITMQ_PORT,
        credentials=credentials,
    )
    connection = pika.BlockingConnection(parameters)
    channel = connection.channel()

    queue_name = "blog_jobs"
    channel.queue_declare(queue=queue_name, durable=True)

    # QoS: chỉ 1 job mỗi lần, chờ ack xong mới nhận job khác
    channel.basic_qos(prefetch_count=1)

    def on_message(ch, method, header, body):
        job = json.loads(body)
        job_id = job.get("job_id")
        topic = job.get("topic")
        if not job_id or not topic:
            # invalid job, ack and skip
            ch.basic_ack(delivery_tag=method.delivery_tag)
            return
        channel_name = f"stream:{job_id}"
        try:
            print(
                f"[Worker] Received job {job_id}, topic '{topic}' — streaming to Redis channel '{channel_name}'"
            )

            # Stream via your existing agent
            for chunk in stream_seo_blog(topic):
                # publish each chunk
                redis_client.publish(channel_name, chunk)

            # send done signal
            redis_client.publish(channel_name, "__DONE__")
            print(f"[Worker] Job {job_id} done")

            ch.basic_ack(delivery_tag=method.delivery_tag)

        except Exception as e:
            # On error, optionally publish error to redis
            err = f"__ERROR__:{str(e)}"
            try:
                redis_client.publish(channel_name, err)
            except Exception:
                pass
            ch.basic_ack(delivery_tag=method.delivery_tag)
            print(f"[Worker] Job {job_id} failed: {e}")

    channel.basic_consume(
        queue=queue_name,
        on_message_callback=on_message,
        auto_ack=False,  # dùng manual ack
    )

    print("[Worker] Waiting for jobs...")
    try:
        channel.start_consuming()
    except KeyboardInterrupt:
        channel.stop_consuming()
    finally:
        connection.close()


if __name__ == "__main__":
    main()
