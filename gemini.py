# ==========================================
# Gemini Integration (Debug Version)
# ==========================================

# Import Libraries
import os
from pathlib import Path
import traceback

from dotenv import load_dotenv
from google import genai

from prompt import PROMPT

# ==========================================
# Load .env File
# ==========================================

env_path = Path(__file__).parent / ".env"

print("=" * 60)
print("ENV PATH :", env_path)
print("FILE EXISTS :", env_path.exists())

load_dotenv(dotenv_path=env_path, override=True)

api_key = os.getenv("GEMINI_API_KEY")

print("API KEY :", api_key)
print("=" * 60)

# Stop if API Key not found
if not api_key:
    raise ValueError(
        "GEMINI_API_KEY not found. Please check your ai-service/.env file."
    )

# ==========================================
# Configure Gemini Client
# ==========================================

client = genai.Client(api_key=api_key)

# ==========================================
# AI Analysis Function
# ==========================================

def analyze_system(cpu, memory, pods, containers):

    prompt = f"""
{PROMPT}

Current Infrastructure Metrics

CPU Usage: {cpu}

Memory Usage: {memory}

Running Pods: {pods}

Running Containers: {containers}

Please provide:

1. Overall System Health
2. Issues Found
3. Recommendations
4. Risk Level

Keep the response short and easy to understand.
"""

    try:

        response = client.models.generate_content(
            model="gemini-2.5-flash",
            contents=prompt
        )

        print("\n========== GEMINI SUCCESS ==========")
        print(response)
        print("====================================\n")

        return response.text

    except Exception as e:

        print("\n========== GEMINI ERROR ==========")

        traceback.print_exc()

        print("----------------------------------")
        print("Error Type :", type(e).__name__)
        print("Error Msg  :", str(e))
        print("==================================\n")

        return f"Gemini Error: {str(e)}"
    
    # ==========================================
# AI Chat Function
# ==========================================

def chat_with_ai(question, cpu, memory, pods, containers):

    prompt = f"""
You are an AI DevOps Assistant.

Current Infrastructure

CPU Usage : {cpu}

Memory Usage : {memory}

Running Pods : {pods}

Running Containers : {containers}

User Question:

{question}

Instructions:

1. Answer the user's question.
2. If relevant, use the current infrastructure metrics.
3. Keep the answer simple.
4. Give practical DevOps recommendations.
5. Respond in less than 200 words.
"""

    try:

        response = client.models.generate_content(

            model="gemini-2.5-flash",

            contents=prompt

        )

        return response.text

    except Exception as e:

        print("Gemini Chat Error:", e)

        return "Unable to generate AI response."