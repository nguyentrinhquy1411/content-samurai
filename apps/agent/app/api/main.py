import sys
from pathlib import Path
from typing import List, Optional

from fastapi import FastAPI, HTTPException
from pydantic import BaseModel

# Add parent directory to path to import modules
sys.path.append(str(Path(__file__).parent.parent.parent))
from app.tools.web_scraper import scrape_content, search_google_urls
from config import CONFIG

app = FastAPI(
    title="Content Samurai Agent API",
    description="API for content generation agent",
    version="0.1.0",
)


# Request/Response Models
class SearchRequest(BaseModel):
    query: str


class SearchResponse(BaseModel):
    query: str
    urls: List[str]


class ScrapeRequest(BaseModel):
    url: str


class ScrapeResponse(BaseModel):
    url: str
    content: Optional[str]
    success: bool


class SearchAndScrapeRequest(BaseModel):
    query: str


class SearchAndScrapeResponse(BaseModel):
    query: str
    urls: List[str]
    top_url: Optional[str]
    content: Optional[str]
    success: bool


class ConfigResponse(BaseModel):
    llm_model: str
    redis_host: str
    redis_port: int


# Endpoints
@app.get("/")
async def root():
    return {
        "message": "Content Samurai Agent API is running",
        "version": "0.1.0",
        "endpoints": {
            "health": "/health",
            "config": "/config",
            "search": "/api/search",
            "scrape": "/api/scrape",
            "search_and_scrape": "/api/search-and-scrape",
        },
    }


@app.get("/health")
async def health():
    return {"status": "healthy", "service": "content-samurai-agent"}


@app.get("/config", response_model=ConfigResponse)
async def get_config():
    """Get current configuration (without sensitive data)."""
    return {
        "llm_model": CONFIG.LLM_MODEL,
        "redis_host": CONFIG.REDIS_HOST,
        "redis_port": CONFIG.REDIS_PORT,
    }


@app.post("/api/search", response_model=SearchResponse)
async def search(request: SearchRequest):
    """
    Search Google using SerpApi and return top 5 URLs.

    Example:
        POST /api/search
        {
            "query": "golang best practices"
        }
    """
    if not request.query or len(request.query.strip()) == 0:
        raise HTTPException(status_code=400, detail="Query cannot be empty")

    try:
        urls = search_google_urls(request.query)
        return {"query": request.query, "urls": urls}
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Search failed: {str(e)}")


@app.post("/api/scrape", response_model=ScrapeResponse)
async def scrape(request: ScrapeRequest):
    """
    Scrape content from a given URL.

    Example:
        POST /api/scrape
        {
            "url": "https://example.com/article"
        }
    """
    if not request.url or len(request.url.strip()) == 0:
        raise HTTPException(status_code=400, detail="URL cannot be empty")

    if not request.url.startswith(("http://", "https://")):
        raise HTTPException(
            status_code=400, detail="URL must start with http:// or https://"
        )

    try:
        content = scrape_content(request.url)
        return {
            "url": request.url,
            "content": content,
            "success": content is not None,
        }
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Scraping failed: {str(e)}")


@app.post("/api/search-and-scrape", response_model=SearchAndScrapeResponse)
async def search_and_scrape(request: SearchAndScrapeRequest):
    """
    Search Google and scrape content from the top result.

    Example:
        POST /api/search-and-scrape
        {
            "query": "golang tutorial"
        }
    """
    if not request.query or len(request.query.strip()) == 0:
        raise HTTPException(status_code=400, detail="Query cannot be empty")

    try:
        # Search for URLs
        urls = search_google_urls(request.query)

        if not urls:
            return {
                "query": request.query,
                "urls": [],
                "top_url": None,
                "content": None,
                "success": False,
            }

        # Scrape the first URL
        top_url = urls[0]
        content = scrape_content(top_url)

        return {
            "query": request.query,
            "urls": urls,
            "top_url": top_url,
            "content": content,
            "success": content is not None,
        }
    except Exception as e:
        raise HTTPException(
            status_code=500, detail=f"Search and scrape failed: {str(e)}"
        )
