import Link from "next/link";

export default function ProfileCard() {
    return (
      <div className="max-w-sm rounded-2xl shadow-lg p-6 bg-white">
        <h2 className="text-xl font-semibold">Hi, I&apos;m a Freelancer</h2>
        <p className="text-gray-600">I build fast websites with Next.js & Tailwind CSS.</p>
        <Link href="/contact" className="inline-block mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg">Contact Me</Link>
      </div>
    );
  }