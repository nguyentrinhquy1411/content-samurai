import re
from typing import Dict, List, Set

from langchain_tavily import TavilySearch

from config import CONFIG

search_tool = TavilySearch(max_results=5, include_answer=True, include_raw_content=True)


def enhanced_search_analysis(topic: str) -> Dict:
    """
    Perform comprehensive competitor analysis on search results.

    Args:
        topic: The search query topic.

    Returns:
        Dictionary containing heading structure, content length, and schema analysis.
    """
    response = search_tool.invoke({"query": topic})
    search_results = response.get("results", [])

    analysis = {
        "keyword_density": {},
        "heading_structure": [],
        "content_length": [],
        "internal_links": [],
        "schema_types": set(),
        "readability_scores": [],
        "answer": response.get("answer", ""),
        "results": search_results,
    }

    for idx, result in enumerate(search_results, 1):
        raw_content = result.get("raw_content", "")

        if not raw_content:
            continue

        # Analyze heading structure
        h1_pattern = r"<h1[^>]*>(.*?)</h1>"
        h2_pattern = r"<h2[^>]*>(.*?)</h2>"
        h3_pattern = r"<h3[^>]*>(.*?)</h3>"

        h1s = re.findall(h1_pattern, raw_content, re.IGNORECASE | re.DOTALL)
        h2s = re.findall(h2_pattern, raw_content, re.IGNORECASE | re.DOTALL)
        h3s = re.findall(h3_pattern, raw_content, re.IGNORECASE | re.DOTALL)

        # Clean HTML tags from headings
        h1s = [re.sub(r"<[^>]+>", "", h).strip() for h in h1s]
        h2s = [re.sub(r"<[^>]+>", "", h).strip() for h in h2s]
        h3s = [re.sub(r"<[^>]+>", "", h).strip() for h in h3s]

        analysis["heading_structure"].append(
            {
                "source": idx,
                "url": result.get("url", "N/A"),
                "h1_count": len(h1s),
                "h2_count": len(h2s),
                "h3_count": len(h3s),
                "h1s": h1s[:3],  # First 3 H1s
                "h2s": h2s[:5],  # First 5 H2s
            }
        )

        # Content length analysis
        # Remove HTML tags for word count
        text_content = re.sub(r"<[^>]+>", " ", raw_content)
        text_content = re.sub(r"\s+", " ", text_content).strip()
        word_count = len(text_content.split())

        analysis["content_length"].append(
            {
                "source": idx,
                "url": result.get("url", "N/A"),
                "word_count": word_count,
            }
        )

        # Schema detection
        schema_patterns = [
            (r'"@type":\s*"Article"', "Article"),
            (r'"@type":\s*"BlogPosting"', "BlogPosting"),
            (r'"@type":\s*"FAQPage"', "FAQPage"),
            (r'"@type":\s*"HowTo"', "HowTo"),
        ]

        for pattern, schema_type in schema_patterns:
            if re.search(pattern, raw_content):
                analysis["schema_types"].add(schema_type)

    return analysis


def format_enhanced_context(topic: str, analysis: Dict) -> str:
    """
    Format search results with comprehensive SEO insights.

    Args:
        topic: The search query topic.
        analysis: The enhanced analysis dictionary.

    Returns:
        Formatted context string with detailed SEO analysis.
    """
    context = f"=== ENHANCED SEO ANALYSIS FOR: {topic} ===\n\n"

    # Include AI-generated answer if available
    if analysis.get("answer"):
        context += "=== SEARCH ANSWER ===\n"
        context += f"{analysis['answer']}\n\n"

    # Heading structure insights
    context += "=== COMPETITOR HEADING STRUCTURE ANALYSIS ===\n"
    context += "Analyze how top-ranking pages structure their content:\n\n"

    for struct in analysis["heading_structure"]:
        context += f"Source {struct['source']} ({struct['url']}):\n"
        context += f"  Heading Count: H1({struct['h1_count']}) H2({struct['h2_count']}) H3({struct['h3_count']})\n"

        if struct["h1s"]:
            context += f"  H1 Examples: {' | '.join(struct['h1s'][:2])}\n"

        if struct["h2s"]:
            context += f"  H2 Examples: {' | '.join(struct['h2s'][:3])}\n"
        context += "\n"

    # Calculate heading statistics
    if analysis["heading_structure"]:
        avg_h2 = sum(s["h2_count"] for s in analysis["heading_structure"]) / len(
            analysis["heading_structure"]
        )
        avg_h3 = sum(s["h3_count"] for s in analysis["heading_structure"]) / len(
            analysis["heading_structure"]
        )

        context += f"HEADING INSIGHTS:\n"
        context += f"  Average H2 sections: {avg_h2:.1f}\n"
        context += f"  Average H3 subsections: {avg_h3:.1f}\n"
        context += f"  RECOMMENDATION: Use {max(CONFIG.MIN_H2_SECTIONS, int(avg_h2 + 1))}+ H2 sections for competitive advantage\n\n"

    # Content length insights
    context += "=== CONTENT LENGTH ANALYSIS ===\n"

    for length_data in analysis["content_length"]:
        context += (
            f"Source {length_data['source']}: {length_data['word_count']:,} words\n"
        )

    if analysis["content_length"]:
        avg_words = sum(s["word_count"] for s in analysis["content_length"]) / len(
            analysis["content_length"]
        )
        max_words = max(s["word_count"] for s in analysis["content_length"])

        target_words = max(CONFIG.TARGET_WORD_COUNT, int(avg_words * 1.3))

        context += f"\nCONTENT LENGTH INSIGHTS:\n"
        context += f"  Average: {int(avg_words):,} words\n"
        context += f"  Longest: {max_words:,} words\n"
        context += (
            f"  TARGET: Write {target_words:,}+ words (30% more than average)\n\n"
        )

    # Schema insights
    if analysis["schema_types"]:
        context += "=== STRUCTURED DATA ANALYSIS ===\n"
        context += (
            f"Schema Types Found: {', '.join(sorted(analysis['schema_types']))}\n"
        )
        context += "RECOMMENDATION: Include Article and FAQPage schema markup\n\n"

    # Include source content summaries
    context += "=== TOP RANKING SOURCES ===\n"
    for idx, result in enumerate(analysis["results"], 1):
        context += f"\n--- Source {idx} ---\n"
        context += f"URL: {result.get('url', 'N/A')}\n"
        context += f"Title: {result.get('title', 'N/A')}\n"
        context += f"Score: {result.get('score', 'N/A')}\n"

        if "content" in result:
            context += f"Summary: {result['content']}\n"

    context += "\n=== SEO CONTENT STRATEGY ===\n"
    context += "Based on competitor analysis:\n"
    context += "1. Match or exceed their heading structure depth and organization\n"
    context += "2. Write significantly longer content (30%+ more words)\n"
    context += "3. Use similar section topics but with unique, comprehensive coverage\n"
    context += "4. Include structured data markup for better SERP features\n"
    context += "5. Ensure clear hierarchy: H1 > H2 > H3 (never skip levels)\n"
    context += "6. Add practical examples, data, and actionable insights\n"

    return context


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

    context += "=== SEO INSTRUCTIONS ===\n"
    context += "Based on the above top-ranking pages:\n"
    context += "1. Analyze their heading structure (H1, H2, H3 hierarchy)\n"
    context += "2. Note their content organization and section layout\n"
    context += "3. Identify key topics and subtopics they cover\n"
    context += "4. Use similar structural patterns while creating unique, comprehensive content\n"
    context += (
        "5. Ensure your content is more detailed and valuable than these sources\n"
    )

    return context
