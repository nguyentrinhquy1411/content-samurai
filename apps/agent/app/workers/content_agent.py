from langchain_ollama import ChatOllama

from config import CONFIG

llm = ChatOllama(
    base_url=CONFIG.BASE_URL,
    client_kwargs={"headers": {"Authorization": f"Bearer {CONFIG.OLLAMA_API_KEY}"}},
    model="gpt-oss:120b-cloud",
)

messages = [
    (
        "system",
        "You are a helpful assistant that translates Vietnamese to English. Translate the user sentence.",
    ),
    ("human", "Xin chào thằng mọi đen"),
]
ai_msg = llm.invoke(messages)
print(ai_msg.content)
