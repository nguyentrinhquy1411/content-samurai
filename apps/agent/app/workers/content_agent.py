import asyncio
from typing import AsyncGenerator

from langchain_ollama import ChatOllama
from langchain_tavily import TavilySearch

from config import CONFIG

llm = ChatOllama(
    base_url=CONFIG.BASE_URL,
    client_kwargs={"headers": {"Authorization": f"Bearer {CONFIG.OLLAMA_API_KEY}"}},
    model="gpt-oss:120b-cloud",
    temperature=0.7,
    num_ctx=12288,
)

search_tool = TavilySearch(max_results=5)


# print(search_tool)


# messages = [
#     (
#         "system",
#         "You are a helpful assistant that translates Vietnamese to English. Translate the user sentence.",
#     ),
#     ("human", "Xin chào thằng mọi đen"),
# ]
# ai_msg = llm.invoke(messages)
# print(ai_msg.content)
#
def create_seo_blog(topic: str):
    print(f"--- Fetching 5 sources for: {topic} ---")

    # Run the search
    response = search_tool.invoke({"query": topic})
    search_results = response.get("results", [])
    print(search_results)

    # Format the search context for the model
    context = ""
    for idx, result in enumerate(search_results):
        context += f"\nSource {idx + 1} ({result['url']}):\n{result['content']}\n"

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


async def stream_seo_blog(topic: str) -> AsyncGenerator[str, None]:
    """
    Stream an SEO-optimized blog post as chunks are generated.
    Yields content chunks as they are produced by the LLM.

    Args:
        topic: The topic for the blog post.

    Yields:
        Content chunks as strings.
    """
    print(f"--- Fetching 5 sources for: {topic} ---")

    # Run the search
    response = search_tool.invoke({"query": topic})
    search_results = response.get("results", [])
    print(search_results)

    # Format the search context for the model
    context = ""
    for idx, result in enumerate(search_results):
        context += f"\nSource {idx + 1} ({result['url']}):\n{result['content']}\n"

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

    print("--- Writing the SEO Post (Streaming) ---")

    # Stream the LLM response (synchronous generator, yield in async context)
    for chunk in llm.stream(messages):
        content_chunk = chunk.content
        if isinstance(content_chunk, str) and content_chunk:
            print(content_chunk, end="", flush=True)
            # Yield the chunk for SSE
            yield content_chunk
            # Yield control to event loop to allow other tasks
            await asyncio.sleep(0)

    print("\n\n--- Done (Streaming) ---")
