import json

from fastapi import FastAPI, HTTPException
from fastapi.responses import StreamingResponse
from pydantic import BaseModel

from app.workers.content_agent import create_seo_blog, stream_seo_blog
from app.workers.tools import search_and_get_results
from config import CONFIG

app = FastAPI(
    title="Content Samurai Agent API",
    description="API for content generation agent",
    version="0.1.0",
)


# Request/Response Models
class CreateBlogRequest(BaseModel):
    topic: str


class SearchRequest(BaseModel):
    topic: str


class CreateBlogResponse(BaseModel):
    topic: str
    content: str
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
            "create_blog": "/api/create-blog",
            "create_blog_stream": "/api/create-blog/stream",
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


@app.post("/api/create-blog", response_model=CreateBlogResponse)
async def create_blog(request: CreateBlogRequest):
    """
    Create an SEO-optimized blog post using the content agent worker.
    Returns the complete blog post after generation finishes.

    Example:
        POST /api/create-blog
        {
            "topic": "How to make Phở in 2025"
        }
    """
    if not request.topic or len(request.topic.strip()) == 0:
        raise HTTPException(status_code=400, detail="Topic cannot be empty")

    try:
        content = create_seo_blog(request.topic)
        return {
            "topic": request.topic,
            "content": content,
            "success": content is not None,
        }
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Blog creation failed: {str(e)}")


@app.post("/api/create-blog/stream")
async def create_blog_stream(request: CreateBlogRequest):
    """
    Create an SEO-optimized blog post using streaming (Server-Sent Events).
    Streams content chunks as they are generated.

    Example:
        POST /api/create-blog/stream
        {
            "topic": "How to make Phở in 2025"
        }
    """
    if not request.topic or len(request.topic.strip()) == 0:
        raise HTTPException(status_code=400, detail="Topic cannot be empty")

    async def generate_stream():
        try:
            async for chunk in stream_seo_blog(request.topic):
                # Format as SSE with JSON-encoded data
                data = json.dumps({"chunk": chunk})
                yield f"data: {data}\n\n"
            # Send completion signal
            yield "data: " + json.dumps({"done": True}) + "\n\n"
        except Exception as e:
            error_data = json.dumps({"error": str(e)})
            yield f"data: {error_data}\n\n"

    return StreamingResponse(
        generate_stream(),
        media_type="text/event-stream",
        headers={
            "Cache-Control": "no-cache",
            "Connection": "keep-alive",
            "X-Accel-Buffering": "no",
        },
    )


@app.post("/api/search")
async def search_content(request: SearchRequest):
    """
    Search for content sources on a given topic.

    Example:
        POST /api/search
        {
            "topic": "How to make Phở in 2025"
        }
    """
    if not request.topic or len(request.topic.strip()) == 0:
        raise HTTPException(status_code=400, detail="Topic cannot be empty")

    try:
        context = search_and_get_results(request.topic)
        return {
            "topic": request.topic,
            "context": context,
            "success": context is not None and len(context) > 0,
        }
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Search failed: {str(e)}")
