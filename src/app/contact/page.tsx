import ContactForm from "@/components/ContactForm";

// TODO: replace with the email address you want inquiries sent to
const CONTACT_EMAIL = "you@example.com";

export default function ContactPage() {
  return (
    <div className="max-w-2xl mx-auto py-16 px-6">
      <h1 className="text-3xl font-bold mb-4">Contact Me</h1>
      <p className="text-gray-700 mb-8">
        Have a project in mind or want a quote? Send me a message and I&apos;ll get back to you within a couple of days.
      </p>
      <ContactForm email={CONTACT_EMAIL} />
      <p className="text-gray-700 mt-8">
        Prefer email? Reach me at{" "}
        <a href={`mailto:${CONTACT_EMAIL}`} className="text-blue-600 hover:underline">{CONTACT_EMAIL}</a>.
      </p>
    </div>
  );
}
