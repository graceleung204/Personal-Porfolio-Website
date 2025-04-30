import Link from "next/link";

export default function ProfileCard() {
    return (
      <div className="glow-card max-w-md p-8 text-center">
        <div className="mx-auto mb-4 h-16 w-16 rounded-full bg-gradient-to-br from-sky via-periwinkle to-violet-blue flex items-center justify-center text-2xl text-white shadow-lg">
          ✦
        </div>
        <h2 className="text-2xl font-bold text-ink">Hi, I&apos;m Grace</h2>
        <p className="mt-2 text-ink/70">
          Full-stack software engineer, formerly building payment experiences at Salesforce. Curious, always learning, and excited about AI.
        </p>
        <Link href="/contact" className="gradient-button inline-block mt-6 px-6 py-2.5 text-white font-semibold rounded-full">
          Get in Touch
        </Link>
      </div>
    );
  }
