# Content Samurai Agent

Python-based content generation agent using LangChain, FastAPI, and Redis.

## Project Structure

```
apps/agent/
├── app/
│   ├── api/              # FastAPI endpoints
│   │   └── main.py       # API application
│   ├── tools/            # Utility tools
│   │   └── web_scraper.py # Web scraping and Google search
│   └── workers/          # Background task processors
│       └── content_agent.py # Content generation worker
├── config.py             # Configuration management
├── main.py               # Main entry point
├── pyproject.toml        # Python dependencies
└── .env                  # Environment variables (create from .env.example)
```

## Requirements

- Python >= 3.12
- [uv](https://github.com/astral-sh/uv) - Fast Python package installer
- Redis (for background tasks)
- API Keys:
  - OLLAMA_API_KEY (for LLM)
  - SERPAPI_API_KEY (for Google search)

## Installation

### 1. Install `uv` (if not already installed)

```bash
# Via pipx (recommended)
pipx install uv

# Or via pip
pip install uv
```

### 2. Set up the project

```bash
# Navigate to the agent directory
cd content-samurai/apps/agent

# Create your .env file
cp .env.example .env

# Edit .env and add your API keys
# nano .env  # or use your preferred editor
```

### 3. Install dependencies

```bash
# Sync dependencies with uv
uv sync

# Or via npm script
npm run install
```

## Configuration

Edit `.env` file with your actual values:

```env
# API Keys
OLLAMA_API_KEY=your_actual_ollama_key
SERPAPI_API_KEY=your_actual_serpapi_key

# Redis Configuration
REDIS_HOST=localhost
REDIS_PORT=6379

# Model Configuration
LLM_MODEL=llama3
```

## Usage

### Run the main agent

```bash
uv run main.py

# Or via npm
npm run dev
```

### Start the FastAPI server

```bash
# Start API server on port 8000
uv run uvicorn app.api.main:app --reload --port 8000

# Test the API
curl http://localhost:8000/
curl http://localhost:8000/health
```

### Use the web scraper programmatically

```python
from app.tools.web_scraper import search_google_urls, scrape_content

# Search Google and get top 5 URLs
urls = search_google_urls("golang best practices")
print(urls)

# Scrape content from a URL
content = scrape_content(urls[0])
print(content[:500])  # Print first 500 characters
```

## Development

### Code formatting and linting

```bash
# Format code
npm run format

# Lint code
npm run lint
```

### Project commands

All available npm scripts:

```bash
npm run install    # Install dependencies (uv sync)
npm run dev        # Run main.py in development mode
npm run start      # Run main.py
npm run lint       # Run ruff linter
npm run format     # Format code with ruff
```

## API Endpoints

When running the FastAPI server:

- `GET /` - Welcome message
- `GET /health` - Health check endpoint

## Troubleshooting

### Import errors

If you encounter import errors, make sure you're running Python from the agent directory:

```bash
cd content-samurai/apps/agent
uv run python your_script.py
```

### Missing API keys

If you see "OLLAMA_API_KEY is not set" error:

1. Ensure `.env` file exists in `apps/agent/`
2. Check that `.env` contains valid API keys
3. Restart your application after updating `.env`

### Redis connection issues

Ensure Redis is running:

```bash
# Check if Redis is running
redis-cli ping

# Start Redis (if installed via package manager)
redis-server
```

## Dependencies

Key packages used:

- **requests** - HTTP requests
- **beautifulsoup4** - HTML parsing
- **lxml** - XML/HTML parser
- **python-dotenv** - Environment variable management
- **langchain** - LLM framework
- **langchain-core** - Core LangChain components
- **langchain-openai** - OpenAI integration
- **fastapi** - Web API framework
- **uvicorn** - ASGI server
- **redis** - Redis client
- **rq** - Redis Queue for background jobs

## License

Part of the Content Samurai project.