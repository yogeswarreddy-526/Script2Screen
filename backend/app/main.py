from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI(
    title="Script2Screen API",
    version="1.0.0"
)

# Allow Next.js frontend to communicate with FastAPI
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/")
def root():
    return {
        "message": "Script2Screen API is running 🚀"
    }


@app.get("/health")
def health_check():
    return {
        "status": "healthy",
        "service": "script2screen-backend"
    }