import Link from "next/link";

export default function Hero() {
    return (
      <section className="relative overflow-hidden py-24 md:py-32">
        <div className="blob w-72 h-72 bg-sky -top-10 -left-10" />
        <div className="blob w-80 h-80 bg-periwinkle top-10 right-0 [animation-delay:-4s]" />
        <div className="blob w-64 h-64 bg-violet-blue/60 bottom-0 left-1/3 [animation-delay:-8s]" />

        <div className="relative container mx-auto px-6 text-center">
          <span className="inline-block mb-6 rounded-full border border-periwinkle/40 bg-white/60 px-4 py-1 text-sm font-medium text-violet-blue backdrop-blur">
            ✦ Full-Stack Software Engineer
          </span>
          {/* Font scales with the viewport so each line always fits on one row */}
          <h1 className="text-[clamp(1.125rem,7vw,4.5rem)] leading-tight font-extrabold tracking-tight mb-6 text-ink">
            <span className="block whitespace-nowrap">Building software that</span>
            <span className="block whitespace-nowrap">
              makes life <span className="gradient-text-strong">a little easier</span>
            </span>
          </h1>
          <p className="text-lg md:text-xl text-ink/70 mb-10 max-w-2xl mx-auto">
            From React and TypeScript to Java and Spring Boot, with a growing focus on AI-powered applications and developer tools.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/projects" className="gradient-button px-7 py-3 text-white font-semibold rounded-full">
              See My Work
            </Link>
            <Link
              href="/experience"
              className="px-7 py-3 font-semibold rounded-full border border-periwinkle/50 bg-white/70 text-violet-blue hover:bg-white transition-colors"
            >
              View Experience
            </Link>
          </div>
        </div>
      </section>
    );
  }
