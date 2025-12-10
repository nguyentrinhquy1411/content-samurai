# Quick Start Guide: Enhanced SEO Content Generation

Get started with Content Samurai's advanced SEO features in 5 minutes!

---

## 🚀 Quick Setup

### 1. Configure Environment Variables

```bash
# Navigate to agent directory
cd apps/agent

# Copy environment template
cp env.template .env

# Edit .env and add your API keys
nano .env
```

**Required API Keys:**
```env
OLLAMA_API_KEY=your_key_here
TAVILY_API_KEY=your_key_here
SERPAPI_API_KEY=your_key_here
```

**Optional SEO Settings** (defaults work great):
```env
TARGET_WORD_COUNT=2000
MIN_H2_SECTIONS=5
ENABLE_INTERNAL_LINKING=true
ENABLE_EXTERNAL_SUGGESTIONS=true
ENABLE_IMAGE_SUGGESTIONS=true
```

### 2. Install Dependencies

```bash
# Frontend
cd apps/web
npm install

# Backend
cd ../agent
uv sync
```

### 3. Start Services

```bash
# From project root
docker-compose up -d
```

---

## 📝 Generate Your First SEO-Optimized Blog

### Step 1: Open the App

Navigate to: `http://localhost:3000`

### Step 2: Enter a Topic

**Good Examples:**
- ✅ "How to improve SEO rankings in 2024"
- ✅ "Best practices for React performance optimization"
- ✅ "Complete guide to content marketing for SaaS"

**Avoid:**
- ❌ "SEO" (too broad)
- ❌ "Tips" (too vague)
- ❌ "Hello world" (not enough competitor data)

### Step 3: Generate Content

1. Click **Generate** button
2. Watch the analysis phase (2-3 seconds)
3. See content stream in real-time (30-60 seconds)
4. Review SEO metrics dashboard

### Step 4: Review SEO Metrics

The dashboard shows:

```
┌─────────────────────────────────┐
│ 📊 SEO Metrics                  │
├─────────────────────────────────┤
│ Meta Description:               │
│ [Your optimized description]    │
│ Length: 158/160 ✓ Optimal       │
│                                  │
│ Words: 2,143                    │
│ H2 Sections: 6                  │
│ H3 Subsections: 18              │
│ FAQs: 7                         │
│                                  │
│ 🔗 Internal Links: [topics...]  │
│ 📚 External: [sources...]       │
└─────────────────────────────────┘
```

---

## 🎯 Understanding the Output

### Generated Content Structure

```markdown
# Compelling H1 Title with Primary Keyword

**Meta Description:** 155-160 character description...

## Introduction
[Hook + Problem + Preview]

## Main Topic 1: Keyword Variant
### Subtopic 1.1
### Subtopic 1.2
### Subtopic 1.3

## Main Topic 2: Solution Focus
### Subtopic 2.1
### Subtopic 2.2

[... 5-7 H2 sections total ...]

## Frequently Asked Questions

**Q: Common question?**
**A:** Detailed answer...

[... 5+ FAQs ...]

## Conclusion
[Summary + CTA]

---

**Internal Linking Opportunities:**
- Related Topic 1
- Related Topic 2

**Recommended External Sources:**
- Authority Site 1
- Authority Site 2

**Image Alt Text Suggestions:**
1. Descriptive alt text 1
2. Descriptive alt text 2
```

---

## 🔍 What Happens Behind the Scenes

### Phase 1: Competitor Analysis (2-3 sec)

```
Input: "content marketing strategies"
  ↓
Tavily Search → Top 5 Results
  ↓
Analysis:
- Extract heading structure (H1, H2, H3)
- Count words in each article
- Detect schema markup
- Calculate averages
  ↓
Strategy:
- Target: 2,400+ words (30% more than avg)
- Sections: 7 H2s (2 more than avg)
- Schema: Article + FAQPage
```

### Phase 2: Content Generation (30-60 sec)

```
Enhanced Prompt + Structure Template + Context
  ↓
LLM (Ollama)
  ↓
Streaming Output → Frontend
  ↓
Real-time Metrics Extraction
```

---

## 💡 Tips for Best Results

### 1. Topic Selection

**Be Specific:**
```
❌ "Marketing"
✅ "Email Marketing Strategies for E-commerce"

❌ "Programming"
✅ "Python Data Analysis for Beginners"

❌ "Business"
✅ "Customer Retention Strategies for SaaS"
```

### 2. Monitor SEO Metrics

**Check These:**
- ✅ Meta description: 155-160 chars
- ✅ Word count: 2000+ words
- ✅ H2 sections: 5+ main sections
- ✅ H3 subsections: 2-4 per H2
- ✅ FAQs: 5+ questions answered

### 3. Customize Settings

**For shorter content:**
```env
TARGET_WORD_COUNT=1500
MIN_H2_SECTIONS=4
```

**For comprehensive guides:**
```env
TARGET_WORD_COUNT=3000
MIN_H2_SECTIONS=7
MIN_H3_PER_H2=3
```

**For listicles:**
```env
MIN_H2_SECTIONS=10
MIN_H3_PER_H2=1
```

---

## 🎨 Customization Options

### Adjust Content Length

```env
# Short articles (1500-2000 words)
TARGET_WORD_COUNT=1500

# Standard articles (2000-2500 words)
TARGET_WORD_COUNT=2000

# Comprehensive guides (3000+ words)
TARGET_WORD_COUNT=3000
```

### Adjust Structure Depth

```env
# Simpler structure (H1 → H2 only)
MAX_HEADING_DEPTH=2
MIN_H2_SECTIONS=5

# Standard structure (H1 → H2 → H3)
MAX_HEADING_DEPTH=3
MIN_H2_SECTIONS=5
MIN_H3_PER_H2=2

# Deep structure (more subsections)
MAX_HEADING_DEPTH=3
MIN_H2_SECTIONS=7
MIN_H3_PER_H2=4
```

### Toggle Features

```env
# Minimal output (content only)
ENABLE_INTERNAL_LINKING=false
ENABLE_EXTERNAL_SUGGESTIONS=false
ENABLE_IMAGE_SUGGESTIONS=false

# Full SEO package (recommended)
ENABLE_INTERNAL_LINKING=true
ENABLE_EXTERNAL_SUGGESTIONS=true
ENABLE_IMAGE_SUGGESTIONS=true
INCLUDE_SCHEMA_MARKUP=true
```

---

## 📊 Performance Expectations

### Generation Times

| Phase | Duration | Details |
|-------|----------|---------|
| Analysis | 2-3 sec | Tavily search + processing |
| Generation | 30-60 sec | LLM content creation |
| **Total** | **35-65 sec** | Complete blog post |

### Output Quality

| Metric | Before | After | Improvement |
|--------|--------|-------|-------------|
| Word Count | 1,200 | 2,200+ | +83% |
| H2 Sections | 3-4 | 5-7 | +50% |
| H3 Subsections | 5-8 | 12-20 | +100% |
| SEO Score | 65/100 | 85+/100 | +31% |

---

## 🐛 Troubleshooting

### "No competitor data found"

**Problem:** Topic is too niche or new

**Solution:**
- Try a broader related topic
- Check if Tavily returns results
- Verify TAVILY_API_KEY is correct

### "Content too short"

**Problem:** Generated less than target word count

**Solution:**
1. Increase `TARGET_WORD_COUNT`
2. Use more specific topic
3. Check LLM model has sufficient context window

### "SEO metrics not showing"

**Problem:** Metrics card is empty

**Solution:**
1. Wait for content generation to complete
2. Ensure meta description format: `**Meta Description:** ...`
3. Check browser console for errors
4. Refresh page and try again

### "Generation taking too long"

**Problem:** Stuck on "Generating..."

**Solutions:**
1. Check agent worker logs: `docker logs content-samurai-agent`
2. Verify RabbitMQ is running: `docker ps`
3. Restart services: `docker-compose restart`
4. Check LLM API availability

---

## 🎓 Next Steps

### Learn More

1. **Read Full Documentation:**
   - `docs/SEO_ENHANCEMENTS.md` - Comprehensive guide
   - `docs/CHANGELOG.md` - All changes and features

2. **Experiment with Settings:**
   - Try different word count targets
   - Adjust heading structure requirements
   - Toggle enhancement features

3. **Optimize for Your Niche:**
   - Analyze your competitors manually
   - Set custom targets based on your industry
   - Create topic templates

### Advanced Usage

**A/B Testing:**
```bash
# Generate multiple versions
# Version A: Standard
TARGET_WORD_COUNT=2000

# Version B: Comprehensive
TARGET_WORD_COUNT=3000

# Compare metrics and performance
```

**Batch Generation:**
```bash
# Use API directly for multiple topics
curl -X POST http://localhost:8080/api/blog/create \
  -H "Content-Type: application/json" \
  -d '{"topic": "Your topic here"}'
```

**Custom Prompts:**
- Edit `ENHANCED_SYSTEM_PROMPT` in `content_agent.py`
- Add industry-specific guidelines
- Customize output format

---

## 📞 Support

### Get Help

- 📚 **Documentation:** `docs/` folder
- 🐛 **Issues:** GitHub Issues
- 💬 **Discussions:** GitHub Discussions
- 📧 **Email:** support@contentsamurai.com

### Provide Feedback

Found a bug? Have a feature request?

1. Open an issue on GitHub
2. Include:
   - Topic used
   - Environment settings
   - Expected vs actual output
   - Screenshots of SEO metrics

---

## ✅ Success Checklist

After setup, verify:

- [ ] Services running (`docker ps` shows all containers)
- [ ] Frontend accessible at `http://localhost:3000`
- [ ] API responding at `http://localhost:8080/health`
- [ ] Can generate blog post successfully
- [ ] SEO metrics card displays correctly
- [ ] Meta description length validated
- [ ] Word count shows accurate number
- [ ] Content streams smoothly

---

**Congratulations! You're ready to generate SEO-optimized content!** 🎉

Start with a topic you're familiar with to see the quality difference.

**Example topics to try:**
1. "Complete guide to React hooks"
2. "How to optimize WordPress site speed"
3. "Email marketing best practices for 2024"
4. "Python data science tutorial for beginners"
5. "Social media marketing strategies for small business"

Happy content creating! 🚀