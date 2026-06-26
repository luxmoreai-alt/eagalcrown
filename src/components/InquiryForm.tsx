import { FormEvent, useState } from "react";
import { MessageCircle } from "lucide-react";

type InquiryPayload = {
  name: string;
  email: string;
  phone: string;
  interest: string;
  message: string;
};

const initialForm: InquiryPayload = {
  name: "",
  email: "",
  phone: "",
  interest: "Franchise Enquiry",
  message: "",
};

const interests = [
  "Franchise Enquiry",
  "Dealership Opportunity",
  "Distribution Partnership",
  "Investor Discussion",
  "Product Business Enquiry",
  "Corporate Collaboration",
];

const whatsappNumber = "919600315007";

const buildWhatsappMessage = (payload: InquiryPayload) =>
  [
    "Hello Eagle Crown Group of Companies,",
    "",
    "I would like to submit a business enquiry.",
    "",
    `Name: ${payload.name}`,
    `Phone: ${payload.phone}`,
    `Email: ${payload.email}`,
    `Interested In: ${payload.interest}`,
    `Message: ${payload.message}`,
  ].join("\n");

export function InquiryForm() {
  const [form, setForm] = useState<InquiryPayload>(initialForm);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const updateField = (field: keyof InquiryPayload, value: string) => {
    setForm((current) => ({ ...current, [field]: value }));
  };

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);

    const message = encodeURIComponent(buildWhatsappMessage(form));
    window.location.href = `https://wa.me/${whatsappNumber}?text=${message}`;
  };

  return (
    <form
      onSubmit={onSubmit}
      className="rounded-lg border border-slate-200 bg-white p-5 shadow-xl shadow-crown-950/8 sm:p-6"
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="form-field">
          <span>Name</span>
          <input
            value={form.name}
            onChange={(event) => updateField("name", event.target.value)}
            required
            placeholder="Your name"
            autoComplete="name"
          />
        </label>
        <label className="form-field">
          <span>Phone</span>
          <input
            value={form.phone}
            onChange={(event) => updateField("phone", event.target.value)}
            required
            placeholder="Phone number"
            autoComplete="tel"
          />
        </label>
      </div>

      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        <label className="form-field">
          <span>Email</span>
          <input
            type="email"
            value={form.email}
            onChange={(event) => updateField("email", event.target.value)}
            required
            placeholder="you@example.com"
            autoComplete="email"
          />
        </label>
        <label className="form-field">
          <span>Interested In</span>
          <select
            value={form.interest}
            onChange={(event) => updateField("interest", event.target.value)}
          >
            {interests.map((item) => (
              <option key={item}>{item}</option>
            ))}
          </select>
        </label>
      </div>

      <label className="form-field mt-4">
        <span>Message</span>
        <textarea
          value={form.message}
          onChange={(event) => updateField("message", event.target.value)}
          required
          rows={5}
          placeholder="Tell us about your business interest"
        />
      </label>

      <div className="mt-5 sm:mt-6">
        <button
          type="submit"
          disabled={isSubmitting}
          className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-crown-900 px-6 text-sm font-semibold text-white shadow-sm transition hover:bg-crown-800 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
        >
          <MessageCircle aria-hidden="true" className="size-4" />
          {isSubmitting ? "Opening WhatsApp..." : "Submit via WhatsApp"}
        </button>
      </div>
    </form>
  );
}
