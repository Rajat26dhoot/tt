"use client";

import { FormEvent, useRef, useState } from "react";
import { ArrowRight, CheckCircle2, Loader2 } from "lucide-react";

type Errors = Partial<Record<"name" | "email" | "message" | "form", string>>;

export function ContactForm() {
  const [errors, setErrors] = useState<Errors>({});
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const name = String(form.get("name") ?? "").trim();
    const email = String(form.get("email") ?? "").trim();
    const company = String(form.get("company") ?? "").trim();
    const message = String(form.get("message") ?? "").trim();
    const nextErrors: Errors = {};

    if (name.length < 2) nextErrors.name = "Enter your name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) nextErrors.email = "Enter a valid email.";
    if (message.length < 20) nextErrors.message = "Tell us a little more about the project.";

    setErrors(nextErrors);
    setSubmitted(false);

    if (Object.keys(nextErrors).length > 0) return;

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ name, email, company, message })
      });

      const result = (await response.json()) as { error?: string };

      if (!response.ok) {
        setErrors({ form: result.error ?? "We could not send your message. Please try again." });
        return;
      }

      formRef.current?.reset();
      setSubmitted(true);
    } catch {
      setErrors({ form: "We could not send your message. Please try again." });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form ref={formRef} onSubmit={handleSubmit} className="relative space-y-5" noValidate aria-label="Project inquiry form">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Name" name="name" error={errors.name} autoComplete="name" />
        <Field label="Email" name="email" error={errors.email} autoComplete="email" />
      </div>
      <Field label="Company" name="company" autoComplete="organization" />
      <div>
        <label htmlFor="message" className="text-sm font-medium text-slate-800 dark:text-slate-200">
          Project brief
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? "message-error" : undefined}
          className="mt-2 w-full resize-none rounded-2xl border border-slate-300/70 bg-white/80 px-4 py-3 text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-electric focus:ring-4 focus:ring-electric/15 dark:border-cyan-300/15 dark:bg-slate-950/60 dark:text-slate-50 dark:placeholder:text-slate-500"
          placeholder="What are you building, improving, or scaling?"
        />
        {errors.message ? (
          <p id="message-error" className="mt-2 text-sm text-rose-500">
            {errors.message}
          </p>
        ) : null}
      </div>
      <button
        type="submit"
        disabled={isSubmitting}
        className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-premium-gradient px-6 py-4 text-sm font-semibold text-white shadow-glow transition hover:scale-[1.01] focus:outline-none focus:ring-4 focus:ring-electric/25 sm:w-auto"
      >
        {isSubmitting ? "Sending..." : "Schedule a strategy call"}
        {isSubmitting ? (
          <Loader2 aria-hidden="true" size={17} className="animate-spin" />
        ) : (
          <ArrowRight aria-hidden="true" size={17} className="transition group-hover:translate-x-1" />
        )}
      </button>
      {errors.form ? (
        <p
          role="alert"
          className="rounded-2xl border border-rose-400/30 bg-rose-400/10 px-4 py-3 text-sm font-medium text-rose-600 dark:text-rose-100"
        >
          {errors.form}
        </p>
      ) : null}
      {submitted ? (
        <p
          role="status"
          className="flex items-center gap-2 rounded-2xl border border-cyan-400/30 bg-cyan-400/10 px-4 py-3 text-sm font-medium text-cyan-700 dark:bg-cyan/10 dark:text-cyan-100"
        >
          <CheckCircle2 aria-hidden="true" size={18} />
          Thanks. Your message was sent successfully.
        </p>
      ) : null}
    </form>
  );
}

function Field({
  label,
  name,
  error,
  autoComplete
}: {
  label: string;
  name: string;
  error?: string;
  autoComplete?: string;
}) {
  return (
    <div>
      <label htmlFor={name} className="text-sm font-medium text-slate-800 dark:text-slate-200">
        {label}
      </label>
      <input
        id={name}
        name={name}
        autoComplete={autoComplete}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${name}-error` : undefined}
        className="mt-2 w-full rounded-2xl border border-slate-300/70 bg-white/80 px-4 py-3 text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-electric focus:ring-4 focus:ring-electric/15 dark:border-cyan-300/15 dark:bg-slate-950/60 dark:text-slate-50 dark:placeholder:text-slate-500"
        placeholder={label === "Company" ? "Acme Labs" : label}
      />
      {error ? (
        <p id={`${name}-error`} className="mt-2 text-sm text-rose-500">
          {error}
        </p>
      ) : null}
    </div>
  );
}
