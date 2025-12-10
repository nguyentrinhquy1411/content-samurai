import asyncio
from typing import AsyncGenerator

from langchain_ollama import ChatOllama

from app.workers.tools import search_and_get_results
from config import CONFIG

llm = ChatOllama(
    base_url=CONFIG.BASE_URL,
    client_kwargs={"headers": {"Authorization": f"Bearer {CONFIG.OLLAMA_API_KEY}"}},
    model="gpt-oss:120b-cloud",
    temperature=0.7,
    num_ctx=12288,
)


def create_seo_blog(topic: str):
    print(f"--- Fetching 5 sources for: {topic} ---")

    context = search_and_get_results(topic)

    # Define the professional persona and blogging task
    messages = [
        (
            "system",
            """You are an expert SEO Content Strategist. Your goal is to write a 1200-word blog post.
            1. Create a compelling H1 title.
            2. Use H2/H3 subheadings to structure the post based on key insights from the sources.
            3. Write content that is more thorough and unique than the sources.
            4. Include a Meta Description and Keyword analysis at the bottom.""",
        ),
        ("human", f"Topic: {topic}\n\nSearch Context:\n{context}"),
    ]

    print("--- Writing the SEO Post ---")
    full_content = ""
    for chunk in llm.stream(messages):
        # chunk is an AIMessageChunk object
        content_chunk = chunk.content
        if isinstance(content_chunk, str):
            print(content_chunk, end="", flush=True)
            full_content += content_chunk

    print("\n\n--- Done ---")
    return full_content


def stream_seo_blog(topic: str):
    """
    Stream an SEO-optimized blog post as chunks are generated.
    Yields content chunks as they are produced by the LLM.

    Args:
        topic: The topic for the blog post.

    Yields:
        Content chunks as strings.
    """
    print(f"--- Fetching 5 sources for: {topic} ---")

    context = search_and_get_results(topic)

    # Define the professional persona and blogging task
    messages = [
        (
            "system",
            """You are an expert SEO Content Strategist. Your goal is to write a 1200-word blog post.
            1. Create a compelling H1 title.
            2. Use H2/H3 subheadings to structure the post based on key insights from the sources.
            3. Write content that is more thorough and unique than the sources.
            4. Include a Meta Description and Keyword analysis at the bottom.""",
        ),
        ("human", f"Topic: {topic}\n\nSearch Context:\n{context}"),
    ]

    # Stream the LLM response (synchronous generator, yield in async context)
    for chunk in llm.stream(messages):
        content_chunk = chunk.content
        if isinstance(content_chunk, str) and content_chunk:
            yield content_chunk
