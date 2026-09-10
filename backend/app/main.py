from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from uuid import uuid4

app = FastAPI(
    title="Script2Screen API",
    version="1.0.0"
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


class ProjectCreate(BaseModel):
    project_name: str
    story_idea: str
    genre: str
    language: str
    duration: int


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


@app.post("/projects")
def create_project(project: ProjectCreate):

    project_id = str(uuid4())

    return {
        "id": project_id,
        "message": "Project created successfully",
        "project": project.model_dump()
    }