import os

from dotenv import load_dotenv

load_dotenv()


class Config:
    # --- MODEL FROM CLOUD ---
    LLM_MODEL = "llama3"

    OLLAMA_API_KEY = os.getenv("OLLAMA_API_KEY")
    SERPAPI_API_KEY = os.getenv("SERPAPI_API_KEY")

    REDIS_HOST = os.getenv("REDIS_HOST", "localhost")
    REDIS_PORT = int(os.getenv("REDIS_PORT", 6379))

    # Thiết lập kiểm tra key
    @classmethod
    def check_keys(cls):
        if not cls.OLLAMA_API_KEY:
            raise ValueError("OLLAMA_API_KEY is not set")
        if not cls.REDIS_HOST:
            raise ValueError("REDIS_HOST is not set")
        if not cls.REDIS_PORT:
            raise ValueError("REDIS_PORT is not set")
        print("All keys are set!!")


CONFIG = Config()
CONFIG.check_keys()
