const API_URL = "http://127.0.0.1:8000";

export async function checkBackendHealth() {
  const response = await fetch(`${API_URL}/health`);

  if (!response.ok) {
    throw new Error("Backend is not responding");
  }

  return response.json();
}

export async function createProject(project: {
  project_name: string;
  story_idea: string;
  genre: string;
  language: string;
  duration: number;
}) {
  const response = await fetch(`${API_URL}/projects`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(project),
  });

  if (!response.ok) {
    throw new Error("Failed to create project");
  }

  return response.json();
}