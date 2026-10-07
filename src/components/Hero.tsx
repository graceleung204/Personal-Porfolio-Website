import Link from "next/link";

export default function Hero() {
    return (
      <section className="bg-white py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Bring Your Ideas to Life</h1>
          <p className="text-lg text-gray-600 mb-6">Freelance Web Development for Startups, Creators, and Small Businesses</p>
          <Link href="/contact" className="px-6 py-3 bg-blue-600 text-white rounded-lg">Get a Quote</Link>
        </div>
      </section>
    );
  }