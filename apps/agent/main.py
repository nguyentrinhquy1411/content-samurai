import sys

import uvicorn

from .config import CONFIG


def main():
    print("=" * 50)
    print("Content Samurai Agent")
    print("=" * 50)
    print(f"LLM Model: {CONFIG.LLM_MODEL}")
    print(f"Redis: {CONFIG.REDIS_HOST}:{CONFIG.REDIS_PORT}")
    print("=" * 50)
    print("Agent is ready!")
    print("=" * 50)
    print("Starting API server on http://0.0.0.0:8000")
    print("=" * 50)

    # Start the FastAPI server
    uvicorn.run(
        "app.api.main:app", host="0.0.0.0", port=8000, reload=True, log_level="info"
    )


if __name__ == "__main__":
    try:
        main()
    except KeyboardInterrupt:
        print("\nShutting down gracefully...")
        sys.exit(0)
    except Exception as e:
        print(f"Error: {e}")
        sys.exit(1)
