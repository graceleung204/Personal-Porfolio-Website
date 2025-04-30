"use client";

import { useEffect, useState } from "react";
import ProjectCard from "@/components/ProjectCard";

type Repo = {
  name: string;
  html_url: string;
  description: string | null;
  topics: string[];
  created_at: string;
};

// Only repos tagged with this GitHub topic are shown
const PORTFOLIO_TOPIC = "portfolio";

export default function ProjectList() {
  const [repos, setRepos] = useState<Repo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch("https://api.github.com/users/graceleung204/repos?per_page=100")
      .then(res => {
        if (!res.ok) throw new Error(`GitHub API error: ${res.status}`);
        return res.json();
      })
      .then((data: Repo[]) => {
        const filtered = data
          .filter(repo => repo.topics?.includes(PORTFOLIO_TOPIC))
          // Newest first; ISO timestamps sort correctly as strings
          .sort((a, b) => b.created_at.localeCompare(a.created_at));
        setRepos(filtered);
      })
      .catch(() => setError(true))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p className="text-ink/70">Loading projects...</p>;
  if (error) return <p className="text-ink/70">Couldn&apos;t load projects from GitHub. Please try again later.</p>;
  if (repos.length === 0) return <p className="text-ink/70">No projects to show yet.</p>;

  return (
    <div className="grid md:grid-cols-2 gap-6">
      {repos.map(repo => (
        <ProjectCard
          key={repo.name}
          title={repo.name}
          description={repo.description ?? "No description provided."}
          link={repo.html_url}
          date={new Date(repo.created_at).toLocaleDateString("en-US", { month: "short", year: "numeric" })}
        />
      ))}
    </div>
  );
}
