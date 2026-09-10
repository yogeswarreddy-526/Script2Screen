"use client";

import { useState } from "react";
import { createProject } from "../../services/api";

export default function NewProjectPage() {
  const [projectName, setProjectName] = useState("");
  const [storyIdea, setStoryIdea] = useState("");
  const [genre, setGenre] = useState("Drama");
  const [language, setLanguage] = useState("Telugu");
  const [duration, setDuration] = useState("15");

  const handleCreateProject = async () => {
  if (!projectName.trim() || !storyIdea.trim()) {
    alert("Please enter project name and story idea.");
    return;
  }

  try {
    const data = await createProject({
      project_name: projectName,
      story_idea: storyIdea,
      genre,
      language,
      duration: Number(duration),
    });

    console.log("Created project:", data);

    alert(`Project created successfully 🎬\nProject ID: ${data.id}`);
  } catch (error) {
    console.error("Create project error:", error);
    alert("Failed to connect with backend ❌");
  }
};

  return (
    <main className="min-h-screen bg-black px-6 py-12 text-white">
      <div className="mx-auto max-w-4xl">

        {/* Header */}
        <div className="mb-10">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.25em] text-gray-500">
            Script2Screen
          </p>

          <h1 className="text-4xl font-bold tracking-tight">
            Create New Project
          </h1>

          <p className="mt-3 text-gray-400">
            Turn your story idea into a production-ready film package.
          </p>
        </div>

        {/* Form */}
        <div className="space-y-8 rounded-2xl border border-gray-800 bg-gray-950 p-8">

          {/* Project Name */}
          <div>
            <label className="mb-2 block text-sm font-medium">
              Project Name
            </label>

            <input
              type="text"
              value={projectName}
              onChange={(e) => setProjectName(e.target.value)}
              placeholder="Example: The Last Train"
              className="w-full rounded-xl border border-gray-700 bg-black px-4 py-3 text-white outline-none transition focus:border-white"
            />
          </div>

          {/* Story Idea */}
          <div>
            <label className="mb-2 block text-sm font-medium">
              Story Idea
            </label>

            <textarea
              value={storyIdea}
              onChange={(e) => setStoryIdea(e.target.value)}
              placeholder="Describe your movie idea in one or two sentences..."
              rows={6}
              className="w-full resize-none rounded-xl border border-gray-700 bg-black px-4 py-3 text-white outline-none transition focus:border-white"
            />

            <p className="mt-2 text-xs text-gray-500">
              Keep it simple. Our AI will expand the idea into a screenplay.
            </p>
          </div>

          {/* Grid */}
          <div className="grid gap-6 md:grid-cols-3">

            {/* Genre */}
            <div>
              <label className="mb-2 block text-sm font-medium">
                Genre
              </label>

              <select
                value={genre}
                onChange={(e) => setGenre(e.target.value)}
                className="w-full rounded-xl border border-gray-700 bg-black px-4 py-3 outline-none"
              >
                <option>Drama</option>
                <option>Thriller</option>
                <option>Psychological</option>
                <option>Horror</option>
                <option>Comedy</option>
                <option>Romance</option>
                <option>Action</option>
                <option>Crime</option>
                <option>Sci-Fi</option>
              </select>
            </div>

            {/* Language */}
            <div>
              <label className="mb-2 block text-sm font-medium">
                Language
              </label>

              <select
                value={language}
                onChange={(e) => setLanguage(e.target.value)}
                className="w-full rounded-xl border border-gray-700 bg-black px-4 py-3 outline-none"
              >
                <option>Telugu</option>
                <option>English</option>
                <option>Hindi</option>
                <option>Tamil</option>
                <option>Kannada</option>
              </select>
            </div>

            {/* Duration */}
            <div>
              <label className="mb-2 block text-sm font-medium">
                Duration
              </label>

              <select
                value={duration}
                onChange={(e) => setDuration(e.target.value)}
                className="w-full rounded-xl border border-gray-700 bg-black px-4 py-3 outline-none"
              >
                <option value="5">5 minutes</option>
                <option value="10">10 minutes</option>
                <option value="15">15 minutes</option>
                <option value="30">30 minutes</option>
                <option value="60">60 minutes</option>
              </select>
            </div>

          </div>

          {/* Create Button */}
          <div className="flex justify-end border-t border-gray-800 pt-6">
            <button
              onClick={handleCreateProject}
              className="rounded-xl bg-white px-7 py-3 font-semibold text-black transition hover:bg-gray-200"
            >
              Create Project →
            </button>
          </div>

        </div>
      </div>
    </main>
  );
}