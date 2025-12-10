import os

from dotenv import load_dotenv

load_dotenv()


class Config:
    # --- MODEL FROM CLOUD ---
    LLM_MODEL = "llama3"

    OLLAMA_API_KEY = os.getenv("OLLAMA_API_KEY")
    SERPAPI_API_KEY = os.getenv("SERPAPI_API_KEY")
    TAVILY_API_KEY = os.getenv("TAVILY_API_KEY")
    BASE_URL = os.getenv("BASE_URL", "https://ollama.com")

    REDIS_HOST = os.getenv("REDIS_HOST", "localhost")
    REDIS_PORT = int(os.getenv("REDIS_PORT", 6379))
    RABBITMQ_HOST = os.getenv("RABBITMQ_HOST", "localhost")
    RABBITMQ_PORT = int(os.getenv("RABBITMQ_PORT", 5672))
    RABBITMQ_DEFAULT_USER = os.getenv("RABBITMQ_DEFAULT_USER", "admin")
    RABBITMQ_DEFAULT_PASS = os.getenv("RABBITMQ_DEFAULT_PASS", "admin123")

    # --- SEO CONFIGURATION ---
    TARGET_WORD_COUNT = int(os.getenv("TARGET_WORD_COUNT", "2000"))
    MAX_HEADING_DEPTH = int(os.getenv("MAX_HEADING_DEPTH", "3"))
    INCLUDE_SCHEMA_MARKUP = os.getenv("INCLUDE_SCHEMA_MARKUP", "true").lower() == "true"
    READABILITY_TARGET = float(
        os.getenv("READABILITY_TARGET", "8.0")
    )  # Flesch-Kincaid grade

    # --- CONTENT ENHANCEMENT ---
    ENABLE_INTERNAL_LINKING = (
        os.getenv("ENABLE_INTERNAL_LINKING", "true").lower() == "true"
    )
    ENABLE_EXTERNAL_SUGGESTIONS = (
        os.getenv("ENABLE_EXTERNAL_SUGGESTIONS", "true").lower() == "true"
    )
    ENABLE_IMAGE_SUGGESTIONS = (
        os.getenv("ENABLE_IMAGE_SUGGESTIONS", "true").lower() == "true"
    )
    MIN_H2_SECTIONS = int(os.getenv("MIN_H2_SECTIONS", "5"))
    MIN_H3_PER_H2 = int(os.getenv("MIN_H3_PER_H2", "2"))

    # Thiết lập kiểm tra key
    @classmethod
    def check_keys(cls):
        if not cls.TAVILY_API_KEY:
            raise ValueError("TAVILY_API_KEY is not set")
        if not cls.OLLAMA_API_KEY:
            raise ValueError("OLLAMA_API_KEY is not set")
        if not cls.SERPAPI_API_KEY:
            raise ValueError("SERPAPI_API_KEY is not set")
        if not cls.BASE_URL:
            raise ValueError("BASE_URL is not set")
        if not cls.REDIS_HOST:
            raise ValueError("REDIS_HOST is not set")
        if not cls.REDIS_PORT:
            raise ValueError("REDIS_PORT is not set")
        if not cls.RABBITMQ_HOST:
            raise ValueError("RABBITMQ_HOST is not set")
        if not cls.RABBITMQ_PORT:
            raise ValueError("RABBITMQ_PORT is not set")
        if not cls.RABBITMQ_DEFAULT_USER:
            raise ValueError("RABBITMQ_DEFAULT_USER is not set")
        if not cls.RABBITMQ_DEFAULT_PASS:
            raise ValueError("RABBITMQ_DEFAULT_PASS is not set")
        print("All keys are set!!")


CONFIG = Config()
CONFIG.check_keys()
