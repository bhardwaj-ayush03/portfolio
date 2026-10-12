export type Project = {
  n: string;
  title: string;
  subtitle: string;
  desc: string;
  tags: string[];
  cats: string[];
  color: string;
  github: string;
};

export const projects: Project[] = [
  {
    n: "01",
    title: "Network Security Threat Detection",
    subtitle: "ML pipeline with MLOps",
    desc: "Production-style pipeline for phishing/network-threat classification with schema-drift checks, MLflow tracking, GitHub Actions CI/CD and deployment on AWS, served via FastAPI.",
    tags: ["MLflow", "DagsHub", "Docker", "AWS", "FastAPI", "MongoDB"],
    cats: ["MLOps"],
    color: "bg-blue",
    github: "https://github.com/bhardwaj-ayush03/Network-Security",
  },
  {
    n: "02",
    title: "SQL Agent: Ask Your Data",
    subtitle: "Agentic text-to-SQL",
    desc: "Upload any CSV and query it in plain English. LangGraph pipeline built around schema hallucination, unsafe SQL and ambiguous questions, with human-in-the-loop interrupts and LangSmith tracing.",
    tags: ["LangGraph", "DuckDB", "FAISS", "LangSmith", "Streamlit"],
    cats: ["Agents", "RAG"],
    color: "bg-pink",
    github: "https://github.com/bhardwaj-ayush03/SQL-Agent",
  },
  {
    n: "03",
    title: "N8N Personal AI Assistant",
    subtitle: "Workflow automation agent",
    desc: "Turns natural-language requests into real actions across Gmail, Calendar, Tasks, Docs and Sheets, with Groq reasoning, memory, Tavily search and agent safety rules.",
    tags: ["n8n", "Groq", "Tavily", "Google Workspace"],
    cats: ["Agents", "Automation"],
    color: "bg-green",
    github: "https://github.com/bhardwaj-ayush03/N8N-Personal-AI-Assistant",
  },
  {
    n: "04",
    title: "Chatbot-LangGraph",
    subtitle: "Conversational AI with tools",
    desc: "LangGraph StateGraph chatbot with SQLite checkpointing, per-thread PDF RAG, streaming, and tool routing for web search, stocks and calculator.",
    tags: ["LangGraph", "Groq", "FAISS", "SQLite", "Streamlit"],
    cats: ["Agents", "RAG"],
    color: "bg-lilac",
    github: "https://github.com/bhardwaj-ayush03/Chatbot-Langgraph",
  },
  {
    n: "05",
    title: "YouTube RAG Chatbot",
    subtitle: "Chat with any video, fully local",
    desc: "End-to-end RAG over YouTube transcripts using local LLMs with no external API keys: chunking, ChromaDB storage and LangChain retrieval.",
    tags: ["LangChain", "Ollama", "ChromaDB", "Llama 3.1"],
    cats: ["RAG"],
    color: "bg-orange",
    github: "https://github.com/bhardwaj-ayush03/YT-RAG-Project",
  },
    {
    n: "06",
    title: "Workflow Automation Hub",
    subtitle: "Business process automation",
    desc: "Reusable n8n project for recurring operational tasks: completion validation with required evidence, overdue alerts to managers, acknowledgement tracking and SLA-based escalation to leadership. Rules-driven by design, with Google Sheets as the interface and Gmail for alerts.",
    tags: ["n8n", "Google Sheets", "Gmail", "SLA Escalation"],
    cats: ["Automation"],
    color: "bg-yellow",
    github: "https://github.com/bhardwaj-ayush03/workflow-automation-hub",
  },
];