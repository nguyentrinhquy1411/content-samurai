from langchain_tavily import TavilySearch

from config import CONFIG

search_tool = TavilySearch(max_results=5, include_answer=True, include_raw_content=True)


def search_and_get_results(topic: str) -> str:
    """
    Search for content sources and format them with SEO layout analysis.

    Args:
        topic: The search query topic.

    Returns:
        Formatted context string with search results, answer, and raw content for SEO analysis.
    """
    response = search_tool.invoke({"query": topic})
    search_results = response.get("results", [])
    answer = response.get("answer", "")

    print(f"Search returned {len(search_results)} results")
    print(f"Answer available: {bool(answer)}")

    # Start with the AI-generated answer if available
    context = ""
    if answer:
        context += "=== SEARCH ANSWER ===\n"
        context += f"{answer}\n\n"

    context += "=== TOP RANKING SOURCES ===\n"
    context += "Analyze these top-ranking pages for SEO best practices:\n\n"

    # Format each source with detailed information
    for idx, result in enumerate(search_results, 1):
        context += f"\n--- Source {idx} ---\n"
        context += f"URL: {result.get('url', 'N/A')}\n"
        context += f"Title: {result.get('title', 'N/A')}\n"
        context += f"Score: {result.get('score', 'N/A')}\n\n"

        # Include the snippet/content
        if "content" in result:
            context += f"Content Summary:\n{result['content']}\n\n"

        # Include raw content for layout analysis if available
        if "raw_content" in result and result["raw_content"]:
            context += f"Full Page Structure (for SEO layout analysis):\n"
            # Truncate if too long to avoid token limits
            raw_content = result["raw_content"]
            if len(raw_content) > 3000:
                raw_content = raw_content[:3000] + "\n...[truncated]"
            context += f"{raw_content}\n\n"

    context += "\n=== SEO INSTRUCTIONS ===\n"
    context += "Based on the above top-ranking pages:\n"
    context += "1. Analyze their heading structure (H1, H2, H3 hierarchy)\n"
    context += "2. Note their content organization and section layout\n"
    context += "3. Identify key topics and subtopics they cover\n"
    context += "4. Use similar structural patterns while creating unique, comprehensive content\n"
    context += (
        "5. Ensure your content is more detailed and valuable than these sources\n"
    )

    return context
    # return response
