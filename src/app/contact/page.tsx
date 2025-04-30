import ContactForm from "@/components/ContactForm";

const LINKEDIN_URL = "https://www.linkedin.com/in/graceyanyeeleung/";

export default function ContactPage() {
  return (
    <div className="max-w-3xl mx-auto py-16 px-6">
      <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-ink">
        Let&apos;s <span className="gradient-text">Work Together</span>
      </h1>
      <p className="text-ink/70 mb-10">
        Have an opportunity or project in mind? Send me a message below, or connect with me on LinkedIn.
      </p>

      <ContactForm />

      <a
        href={LINKEDIN_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="glow-card mt-6 flex items-center gap-4 p-5"
      >
        <div className="h-12 w-12 shrink-0 rounded-xl bg-gradient-to-br from-periwinkle to-violet-blue flex items-center justify-center text-lg font-bold text-white">
          in
        </div>
        <div>
          <h2 className="font-semibold text-ink">LinkedIn</h2>
          <p className="text-violet-blue">Connect with me →</p>
        </div>
      </a>
    </div>
  );
}
