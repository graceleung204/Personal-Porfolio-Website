const skills = ["Java / Spring Boot", "React", "Node.js", "TypeScript", "UI/UX", "E-commerce / Payments"];

export default function AboutPage() {
    return (
      <div className="max-w-3xl mx-auto py-16 px-6">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-8 text-ink">
          About <span className="gradient-text">Me</span>
        </h1>
        <div className="glow-card p-8">
          <p className="text-ink/80 leading-relaxed">
            Hi, I’m a Full-Stack Software Engineer with experience building scalable web applications, APIs, and customer-facing products. I enjoy working across the stack, from React and TypeScript on the frontend to Java, Spring Boot, and Node.js on the backend.
          </p>
          <p className="text-ink/80 leading-relaxed mt-4">
            I’m especially interested in AI-powered applications and developer tools, and I enjoy turning ideas into practical products. Recently, I’ve been building projects that combine modern web technologies with LLMs and APIs.
          </p>
          <p className="text-ink/80 leading-relaxed mt-4">
            I’m always curious, always learning, and excited to build software that makes people’s lives a little easier.
          </p>
          <ul className="mt-6 flex flex-wrap gap-2">
            {skills.map(skill => (
              <li
                key={skill}
                className="rounded-full bg-gradient-to-r from-sky/25 to-periwinkle/25 border border-periwinkle/30 px-3 py-1 text-sm font-medium text-violet-blue"
              >
                {skill}
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
