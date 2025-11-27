import sys
from pathlib import Path
from typing import List, Optional

import requests
from bs4 import BeautifulSoup

# Add parent directory to path to import config
sys.path.append(str(Path(__file__).parent.parent.parent))
from config import CONFIG


def search_google_urls(query: str) -> List[str]:
    """
    Use SerpApi to search Google and return the first 5 URLs.

    Args:
        query: Target keyword to search for.

    Returns:
        List of URLs from the top 5 organic search results.
    """
    url = "https://serpapi.com/search.json"
    params = {
        "engine": "google",
        "q": query,
        "api_key": CONFIG.SERPAPI_API_KEY,
        "num": 5,
    }

    try:
        response = requests.get(url, params=params, timeout=10)
        response.raise_for_status()
        data = response.json()

        urls = []
        for result in data.get("organic_results", []):
            urls.append(result.get("link"))
            if len(urls) >= 5:
                break
        return urls
    except Exception as e:
        print(f"Error searching with SerpApi: {e}")
        return []


def scrape_content(url: str) -> Optional[str]:
    """
    Scrape main content (text) from a URL.
    Uses BeautifulSoup to remove unnecessary HTML tags.

    Args:
        url: URL of the competitor page.

    Returns:
        Clean text content of the article.
    """
    try:
        headers = {
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36"
        }
        response = requests.get(url, headers=headers, timeout=15)
        response.raise_for_status()

        soup = BeautifulSoup(response.content, "html.parser")

        # Strategy to filter main content
        article_content = (
            soup.find("main")
            or soup.find("article")
            or soup.find(id="content")
            or soup.body
        )

        if not article_content:
            return None

        # Remove junk elements
        for junk in article_content(
            ["nav", "footer", "script", "style", "header", "aside"]
        ):
            junk.decompose()

        # Get clean text content and limit to 20,000 characters
        text = article_content.get_text(separator=" ", strip=True)
        return text[:20000]

    except Exception as e:
        print(f"Error scraping content from {url}: {e}")
        return None
