from typing import Dict

from langchain_ollama import ChatOllama

from app.workers.tools import enhanced_search_analysis, format_enhanced_context
from config import CONFIG

llm = ChatOllama(
    base_url=CONFIG.BASE_URL,
    client_kwargs={"headers": {"Authorization": f"Bearer {CONFIG.OLLAMA_API_KEY}"}},
    model="gpt-oss:120b-cloud",
    temperature=0.7,
    num_ctx=12288,
)


# Enhanced system prompt with comprehensive SEO guidelines
ENHANCED_SYSTEM_PROMPT = """You are an expert SEO Content Strategist and professional writer. Create a comprehensive, SEO-optimized blog post following these strict requirements:

## STRUCTURE REQUIREMENTS:
1. **H1 Title** (60-70 characters, includes primary keyword)
   - Compelling and click-worthy
   - Clear benefit or promise

2. **Meta Description** (155-160 characters with CTA)
   - Include primary keyword
   - Action-oriented
   - Format: **Meta Description:** [your description]

3. **Introduction** (150-200 words)
   - Hook statement that grabs attention
   - Problem identification
   - Preview of what readers will learn
   - Include primary keyword in first paragraph

4. **Main Content Sections** (5-7 H2 sections)
   - Each H2 should include relevant keywords
   - Use descriptive, benefit-driven headings
   - Include 2-4 H3 subsections under each H2
   - Never skip heading levels (H1 > H2 > H3)

5. **FAQ Section**
   - Minimum 5 frequently asked questions
   - Direct, helpful answers
   - Use Question format: **Q: [question]**
   - Use Answer format: **A:** [answer]

6. **Conclusion** (100-150 words)
   - Summarize key takeaways
   - Include clear call-to-action
   - Reinforce main benefit

## SEO OPTIMIZATION:
- Primary keyword in: H1, first paragraph, one H2, conclusion
- Secondary keywords naturally distributed in H2s and body content
- Short paragraphs (2-4 sentences max)
- Use bullet points and numbered lists for readability
- Bold important concepts and key phrases
- Include transition words for flow

## CONTENT QUALITY (E-E-A-T):
- **Expertise**: Demonstrate deep knowledge with specific details
- **Experience**: Include practical examples and real-world applications
- **Authoritativeness**: Reference data, statistics, and industry standards
- **Trustworthiness**: Provide accurate, well-researched information

## CONTENT STRATEGY:
- Write 2x more comprehensive than competitor content
- Include unique insights and perspectives
- Add actionable tips and step-by-step guidance
- Use concrete examples and case studies
- Provide data-driven insights where relevant

## INTERNAL LINKING (if enabled):
At the end, suggest 3-4 related topics for internal linking:
**Internal Linking Opportunities:**
- [Related Topic 1]
- [Related Topic 2]
- [Related Topic 3]

## EXTERNAL LINKING (if enabled):
Suggest 2-3 authoritative external sources:
**Recommended External Sources:**
- [Authority site or study 1]
- [Authority site or study 2]

## IMAGE SUGGESTIONS (if enabled):
Suggest alt text for 3-5 relevant images:
**Image Alt Text Suggestions:**
1. [Descriptive alt text for featured image]
2. [Descriptive alt text for diagram/infographic]
3. [Descriptive alt text for example screenshot]

## OUTPUT FORMAT:
- Use Markdown formatting
- Clear heading hierarchy
- Well-structured paragraphs
- Professional tone
- Scannable layout with visual breaks

Create content that is MORE valuable, MORE detailed, and MORE actionable than anything currently ranking."""


def generate_blog_structure(topic: str, analysis: Dict) -> str:
    """
    Generate optimized blog structure based on competitor analysis.

    Args:
        topic: The blog topic.
        analysis: Enhanced analysis data from competitor research.

    Returns:
        Structured template string with recommendations.
    """
    # Calculate optimal structure from competitor analysis
    if analysis.get("heading_structure"):
        avg_h2s = sum(s["h2_count"] for s in analysis["heading_structure"]) / len(
            analysis["heading_structure"]
        )
        avg_h3s = sum(s["h3_count"] for s in analysis["heading_structure"]) / len(
            analysis["heading_structure"]
        )
        target_h2s = max(CONFIG.MIN_H2_SECTIONS, int(avg_h2s + 2))
    else:
        target_h2s = CONFIG.MIN_H2_SECTIONS
        avg_h2s = 0
        avg_h3s = 0

    # Calculate target word count
    if analysis.get("content_length"):
        avg_words = sum(s["word_count"] for s in analysis["content_length"]) / len(
            analysis["content_length"]
        )
        target_words = max(CONFIG.TARGET_WORD_COUNT, int(avg_words * 1.3))
    else:
        target_words = CONFIG.TARGET_WORD_COUNT

    structure_template = f"""
## CONTENT STRUCTURE BLUEPRINT

**Target Specifications:**
- Word Count: {target_words:,}+ words (competitors average: {int(avg_words):,} words)
- H2 Sections: {target_h2s}+ main sections (competitors average: {avg_h2s:.1f})
- H3 Subsections: {CONFIG.MIN_H3_PER_H2}-4 per H2 section
- Heading Depth: Maximum H{CONFIG.MAX_HEADING_DEPTH}

**Recommended Structure:**

# [Compelling H1 Title - Include Primary Keyword]

**Meta Description:** [Write 155-160 character description with primary keyword and CTA]

## Introduction
[Hook + Problem + Solution Preview - 150-200 words]
- Start with attention-grabbing statement or statistic
- Identify the main problem or question
- Preview what readers will learn
- Include primary keyword naturally

## [H2: Main Topic 1 - Use Keyword Variant]
### [H3: Specific Aspect 1.1]
[Detailed explanation with examples]

### [H3: Specific Aspect 1.2]
[More details, data, or step-by-step guide]

### [H3: Specific Aspect 1.3]
[Additional insights or practical tips]

## [H2: Main Topic 2 - Address Key Question]
### [H3: Subtopic 2.1]
[In-depth coverage with real examples]

### [H3: Subtopic 2.2]
[Best practices or common mistakes]

## [H2: Main Topic 3 - Solution-Focused]
[Continue with {target_h2s} total H2 sections]
[Each with 2-4 H3 subsections]

## [H2: Main Topic 4 - Advanced/Expert Level]
[Deep dive into complex aspects]

## [H2: Main Topic 5 - Practical Application]
[How-to guide or implementation steps]

## Frequently Asked Questions

**Q: [Most common question about {topic}]**
**A:** [Comprehensive answer with details]

**Q: [Second important question]**
**A:** [Helpful, actionable answer]

**Q: [Third relevant question]**
**A:** [Clear explanation]

[Include 5+ FAQs total]

## Conclusion
[Summarize key points + Call-to-action - 100-150 words]
- Recap main benefits
- Reinforce primary message
- Clear next steps for reader
- Final CTA

---

**SEO Enhancements:**
"""

    if CONFIG.ENABLE_INTERNAL_LINKING:
        structure_template += """
**Internal Linking Opportunities:**
- [Related topic 1 that adds value]
- [Related topic 2 for deeper learning]
- [Related topic 3 for next steps]
- [Related topic 4 for context]
"""

    if CONFIG.ENABLE_EXTERNAL_SUGGESTIONS:
        structure_template += """
**Recommended External Authority Sources:**
- [Industry research or study]
- [Official documentation or standards]
- [Reputable publication or expert resource]
"""

    if CONFIG.ENABLE_IMAGE_SUGGESTIONS:
        structure_template += """
**Image Alt Text Suggestions:**
1. [Descriptive alt text for featured/hero image]
2. [Alt text for main concept diagram]
3. [Alt text for step-by-step visual]
4. [Alt text for data visualization/chart]
5. [Alt text for example or case study image]
"""

    if CONFIG.INCLUDE_SCHEMA_MARKUP:
        structure_template += """
**Schema Markup Recommendations:**
- Article schema with headline, datePublished, author
- FAQPage schema for FAQ section
- HowTo schema if applicable (for step-by-step guides)
"""

    return structure_template


def create_seo_blog(topic: str):
    """
    Create a comprehensive SEO-optimized blog post with enhanced analysis.

    Args:
        topic: The blog topic to write about.

    Returns:
        Complete blog post content.
    """
    print(f"--- Performing Enhanced Analysis for: {topic} ---")

    # Get enhanced competitor analysis
    analysis = enhanced_search_analysis(topic)
    context = format_enhanced_context(topic, analysis)
    structure = generate_blog_structure(topic, analysis)

    # Build enhanced prompt
    messages = [
        ("system", ENHANCED_SYSTEM_PROMPT),
        (
            "human",
            f"""Topic: {topic}

{context}

{structure}

Now create a comprehensive, SEO-optimized blog post following the structure above and incorporating all competitor insights. Make it MORE valuable and MORE detailed than the top-ranking content.""",
        ),
    ]

    print("--- Generating Enhanced SEO Content ---")
    full_content = ""
    for chunk in llm.stream(messages):
        content_chunk = chunk.content
        if isinstance(content_chunk, str):
            print(content_chunk, end="", flush=True)
            full_content += content_chunk

    print("\n\n--- Content Generation Complete ---")
    return full_content


def stream_seo_blog(topic: str):
    """
    Stream an enhanced SEO-optimized blog post as chunks are generated.
    Uses competitor analysis and structured templates for better content.

    Args:
        topic: The topic for the blog post.

    Yields:
        Content chunks as strings.
    """
    print(f"--- Performing Enhanced Analysis for: {topic} ---")

    # Get enhanced competitor analysis
    analysis = enhanced_search_analysis(topic)
    context = format_enhanced_context(topic, analysis)
    structure = generate_blog_structure(topic, analysis)

    print("--- Analysis Complete. Starting Content Generation ---")

    # Build enhanced prompt with all optimizations
    messages = [
        ("system", ENHANCED_SYSTEM_PROMPT),
        (
            "human",
            f"""Topic: {topic}

{context}

{structure}

Now create a comprehensive, SEO-optimized blog post following the structure above and incorporating all competitor insights. Make it MORE valuable and MORE detailed than the top-ranking content.""",
        ),
    ]

    # Stream the enhanced LLM response
    for chunk in llm.stream(messages):
        content_chunk = chunk.content
        if isinstance(content_chunk, str) and content_chunk:
            yield content_chunk
