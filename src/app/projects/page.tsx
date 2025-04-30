import ProjectList from "@/components/ProjectList";

export default function ProjectsPage() {
  return (
    <div className="max-w-4xl mx-auto py-16 px-6">
      <h1 className="text-4xl md:text-5xl font-extrabold mb-3 text-ink">
        My <span className="gradient-text">Projects</span>
      </h1>
      <p className="text-ink/70 mb-10">Pulled live from my GitHub.</p>
      <ProjectList />
    </div>
  );
}
