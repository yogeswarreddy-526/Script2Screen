"use client";

import { useState } from "react";
import { checkBackendHealth } from "./services/api";

export default function Home() {
  const [status, setStatus] = useState("Not connected");

  const testBackend = async () => {
    try {
      const data = await checkBackendHealth();
      setStatus(`${data.status} — ${data.service}`);
    } catch (error) {
      setStatus("Backend connection failed ❌");
    }
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-black text-white">
      <div className="text-center space-y-6">
        <h1 className="text-4xl font-bold">
          Script2Screen 🎬
        </h1>

        <p className="text-gray-400">
          AI Director&apos;s Assistant
        </p>

        <button
          onClick={testBackend}
          className="rounded-lg bg-white px-6 py-3 font-semibold text-black hover:bg-gray-200"
        >
          Test Backend
        </button>

        <div className="rounded-lg border border-gray-700 p-4">
          <p>Backend Status</p>

          <p className="mt-2 text-green-400">
            {status}
          </p>
        </div>
      </div>
    </main>
  );
}