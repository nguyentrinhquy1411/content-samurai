import { useEffect, useState } from "react";

export interface SEOMetadata {
  metaDescription?: string;
  h1Title?: string;
  wordCount?: number;
  h2Count?: number;
  h3Count?: number;
  faqCount?: number;
  readingTime?: number;
  internalLinks?: string[];
  externalLinks?: string[];
  imageAlts?: string[];
  keywordDensity?: number;
  seoScore?: number;
}

interface SEOScoreFactors {
  hasMetaDescription: boolean;
  metaDescriptionLength: number;
  hasH1: boolean;
  sufficientWordCount: boolean;
  hasH2Sections: boolean;
  hasH3Subsections: boolean;
  hasFAQs: boolean;
  hasInternalLinks: boolean;
  hasExternalLinks: boolean;
  hasImageAlts: boolean;
}

export function useSEOMetrics(content: string) {
  const [metadata, setMetadata] = useState<SEOMetadata>({});

  useEffect(() => {
    if (!content) {
      setMetadata({});
      return;
    }

    const extractedMetadata: SEOMetadata = {};

    // Extract meta description
    const metaMatch = content.match(
      /\*\*Meta Description:\*\*\s*(.+?)(?=\n|$)/i,
    );
    if (metaMatch) {
      extractedMetadata.metaDescription = metaMatch[1].trim();
    }

    // Extract H1 title (first # heading)
    const h1Match = content.match(/^#\s+(.+?)$/m);
    if (h1Match) {
      extractedMetadata.h1Title = h1Match[1].trim();
    }

    // Count headings
    const h2Matches = content.match(/^##\s+[^#]/gm);
    const h3Matches = content.match(/^###\s+[^#]/gm);
    extractedMetadata.h2Count = h2Matches ? h2Matches.length : 0;
    extractedMetadata.h3Count = h3Matches ? h3Matches.length : 0;

    // Count FAQs
    const faqMatches = content.match(/\*\*Q:/g);
    extractedMetadata.faqCount = faqMatches ? faqMatches.length : 0;

    // Extract word count (approximate, excluding markdown)
    const plainText = content
      .replace(/[#*[\]()]/g, "")
      .replace(/\*\*[^*]+\*\*/g, "")
      .trim();
    const words = plainText.split(/\s+/).filter((w) => w.length > 0);
    extractedMetadata.wordCount = words.length;

    // Calculate reading time (average 200 words per minute)
    extractedMetadata.readingTime = Math.ceil(words.length / 200);

    // Extract internal linking opportunities
    const internalMatch = content.match(
      /\*\*Internal Linking Opportunities:\*\*([\s\S]*?)(?=\*\*|$)/i,
    );
    if (internalMatch) {
      const links = internalMatch[1].match(/- \[(.+?)\]/g);
      if (links) {
        extractedMetadata.internalLinks = links.map((l) =>
          l.replace(/- \[(.+?)\]/, "$1"),
        );
      }
    }

    // Extract external sources
    const externalMatch = content.match(
      /\*\*Recommended External.*?:\*\*([\s\S]*?)(?=\*\*|$)/i,
    );
    if (externalMatch) {
      const links = externalMatch[1].match(/- \[(.+?)\]/g);
      if (links) {
        extractedMetadata.externalLinks = links.map((l) =>
          l.replace(/- \[(.+?)\]/, "$1"),
        );
      }
    }

    // Extract image alt texts
    const imageMatch = content.match(
      /\*\*Image Alt Text Suggestions:\*\*([\s\S]*?)(?=\*\*|$)/i,
    );
    if (imageMatch) {
      const alts = imageMatch[1].match(/\d+\.\s*\[(.+?)\]/g);
      if (alts) {
        extractedMetadata.imageAlts = alts.map((a) =>
          a.replace(/\d+\.\s*\[(.+?)\]/, "$1"),
        );
      }
    }

    // Calculate keyword density (simple approximation)
    // This would ideally be based on a specific keyword
    const mostCommonWords = calculateKeywordDensity(plainText);
    extractedMetadata.keywordDensity = mostCommonWords;

    // Calculate SEO score
    extractedMetadata.seoScore = calculateSEOScore(extractedMetadata);

    setMetadata(extractedMetadata);
  }, [content]);

  return metadata;
}

function calculateKeywordDensity(text: string): number {
  const words = text.toLowerCase().split(/\s+/);
  const wordFrequency: Record<string, number> = {};

  // Count word frequencies (excluding common words)
  const stopWords = new Set([
    "the",
    "be",
    "to",
    "of",
    "and",
    "a",
    "in",
    "that",
    "have",
    "i",
    "it",
    "for",
    "not",
    "on",
    "with",
    "he",
    "as",
    "you",
    "do",
    "at",
    "this",
    "but",
    "his",
    "by",
    "from",
  ]);

  for (const word of words) {
    if (word.length > 3 && !stopWords.has(word)) {
      wordFrequency[word] = (wordFrequency[word] || 0) + 1;
    }
  }

  // Find most common word
  const maxFrequency = Math.max(...Object.values(wordFrequency), 0);

  // Return density as percentage
  return words.length > 0 ? (maxFrequency / words.length) * 100 : 0;
}

function calculateSEOScore(metadata: SEOMetadata): number {
  const factors: SEOScoreFactors = {
    hasMetaDescription: !!metadata.metaDescription,
    metaDescriptionLength:
      metadata.metaDescription && metadata.metaDescription.length >= 155
        ? metadata.metaDescription.length <= 160
          ? 20
          : 10
        : 0,
    hasH1: !!metadata.h1Title,
    sufficientWordCount: (metadata.wordCount || 0) >= 2000,
    hasH2Sections: (metadata.h2Count || 0) >= 5,
    hasH3Subsections: (metadata.h3Count || 0) >= 10,
    hasFAQs: (metadata.faqCount || 0) >= 5,
    hasInternalLinks: (metadata.internalLinks?.length || 0) >= 3,
    hasExternalLinks: (metadata.externalLinks?.length || 0) >= 2,
    hasImageAlts: (metadata.imageAlts?.length || 0) >= 3,
  };

  let score = 0;

  // Meta description (20 points)
  if (factors.hasMetaDescription) {
    score += factors.metaDescriptionLength;
  }

  // H1 title (10 points)
  if (factors.hasH1) {
    score += 10;
  }

  // Word count (15 points)
  if (factors.sufficientWordCount) {
    score += 15;
  } else if ((metadata.wordCount || 0) >= 1500) {
    score += 10;
  } else if ((metadata.wordCount || 0) >= 1000) {
    score += 5;
  }

  // Heading structure (20 points)
  if (factors.hasH2Sections) {
    score += 10;
  } else if ((metadata.h2Count || 0) >= 3) {
    score += 5;
  }

  if (factors.hasH3Subsections) {
    score += 10;
  } else if ((metadata.h3Count || 0) >= 5) {
    score += 5;
  }

  // FAQs (10 points)
  if (factors.hasFAQs) {
    score += 10;
  } else if ((metadata.faqCount || 0) >= 3) {
    score += 5;
  }

  // Internal links (10 points)
  if (factors.hasInternalLinks) {
    score += 10;
  } else if ((metadata.internalLinks?.length || 0) >= 1) {
    score += 5;
  }

  // External links (10 points)
  if (factors.hasExternalLinks) {
    score += 10;
  } else if ((metadata.externalLinks?.length || 0) >= 1) {
    score += 5;
  }

  // Image alt texts (5 points)
  if (factors.hasImageAlts) {
    score += 5;
  } else if ((metadata.imageAlts?.length || 0) >= 1) {
    score += 2;
  }

  return Math.min(score, 100);
}
