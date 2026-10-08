# ==========================================
# AI DevOps Assistant
# FastAPI Main Server
# ==========================================

# Import FastAPI
from fastapi import FastAPI

# Allow frontend requests
from fastapi.middleware.cors import CORSMiddleware

# Import request model
from pydantic import BaseModel

# Import Gemini functions
from gemini import analyze_system, chat_with_ai

# ==========================================
# Create FastAPI App
# ==========================================

app = FastAPI()

# ==========================================
# Enable CORS
# ==========================================

app.add_middleware(

    CORSMiddleware,

    allow_origins=["*"],

    allow_credentials=True,

    allow_methods=["*"],

    allow_headers=["*"]

)

# ==========================================
# Models
# ==========================================

class Metrics(BaseModel):

    cpu: str

    memory: str

    pods: str

    containers: str


class ChatRequest(BaseModel):

    question: str

    cpu: str

    memory: str

    pods: str

    containers: str


# ==========================================
# Home
# ==========================================

@app.get("/")
def home():

    return {

        "message": "AI DevOps Assistant Running"

    }


# ==========================================
# Analyze Infrastructure
# ==========================================

@app.post("/analyze")
def analyze(metrics: Metrics):

    response = analyze_system(

        metrics.cpu,

        metrics.memory,

        metrics.pods,

        metrics.containers

    )

    return {

        "analysis": response

    }


# ==========================================
# AI Chat
# ==========================================

@app.post("/chat")
def chat(data: ChatRequest):

    response = chat_with_ai(

        data.question,

        data.cpu,

        data.memory,

        data.pods,

        data.containers

    )

    return {

        "answer": response

    }