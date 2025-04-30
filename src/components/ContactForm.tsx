"use client";

import { useState, type FormEvent } from "react";

// Your Formspree form ID: the part after /f/ in the form's endpoint, e.g. "xyzabcde"
const FORMSPREE_FORM_ID = "mblgnpko";

type Status = "idle" | "sending" | "sent" | "error";

const inputClass =
  "w-full rounded-xl border border-periwinkle/30 bg-white/80 px-4 py-2.5 text-ink placeholder:text-ink/40 outline-none transition focus:border-periwinkle focus:ring-4 focus:ring-periwinkle/20";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    setStatus("sending");

    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_FORM_ID}`, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: new FormData(form),
      });
      if (!res.ok) throw new Error(`Formspree error: ${res.status}`);
      form.reset();
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  if (!FORMSPREE_FORM_ID) {
    return (
      <div className="glow-card p-6 text-ink/70">
        The contact form isn&apos;t set up yet. Please reach out on LinkedIn in the meantime.
      </div>
    );
  }

  if (status === "sent") {
    return (
      <div className="glow-card p-8 text-center">
        <div className="mx-auto mb-4 h-12 w-12 rounded-full bg-gradient-to-br from-sky to-violet-blue flex items-center justify-center text-xl text-white">
          ✓
        </div>
        <h2 className="text-xl font-semibold text-ink">Thanks for reaching out!</h2>
        <p className="mt-2 text-ink/70">Your message has been sent. I&apos;ll get back to you soon.</p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-6 font-medium text-violet-blue hover:underline"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="glow-card p-6 space-y-4">
      <div className="grid sm:grid-cols-2 gap-4">
        <label className="block">
          <span className="mb-1 block text-sm font-medium text-ink">Name</span>
          <input name="name" required autoComplete="name" className={inputClass} placeholder="Your name" />
        </label>
        <label className="block">
          <span className="mb-1 block text-sm font-medium text-ink">Email</span>
          <input
            name="email"
            type="email"
            required
            autoComplete="email"
            className={inputClass}
            placeholder="you@example.com"
          />
        </label>
      </div>
      <label className="block">
        <span className="mb-1 block text-sm font-medium text-ink">Message</span>
        <textarea name="message" required rows={5} className={inputClass} placeholder="What would you like to talk about?" />
      </label>

      {/* Honeypot: hidden from people, filled in by spam bots, rejected by Formspree */}
      <input type="text" name="_gotcha" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />

      {status === "error" && (
        <p className="text-sm text-red-600" role="alert">
          Something went wrong sending your message. Please try again, or reach out on LinkedIn.
        </p>
      )}

      <button
        type="submit"
        disabled={status === "sending"}
        className="gradient-button px-7 py-3 text-white font-semibold rounded-full disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {status === "sending" ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
}
