import sys

from app.api.main import main as worker_main
from config import CONFIG


def main():
    print("=" * 50)
    print("Content Samurai Agent Worker")
    print("=" * 50)
    print(f"LLM Model: {CONFIG.LLM_MODEL}")
    print(f"Redis: {CONFIG.REDIS_HOST}:{CONFIG.REDIS_PORT}")
    print(f"RabbitMQ: {CONFIG.RABBITMQ_HOST}:{CONFIG.RABBITMQ_PORT}")
    print("=" * 50)
    print("Starting Worker...")
    print("=" * 50)

    # Start the RabbitMQ worker
    worker_main()


if __name__ == "__main__":
    try:
        main()
    except KeyboardInterrupt:
        print("\nShutting down gracefully...")
        sys.exit(0)
    except Exception as e:
        print(f"Error: {e}")
        sys.exit(1)
