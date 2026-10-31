"use client";

import { useState, type FormEvent } from "react";
import { CheckCircle2, CircleAlert, LoaderCircle, Send } from "lucide-react";
import { buttonClass } from "./Button";

type Status = "idle" | "sending" | "sent" | "mailto" | "error";

const topics = ["PhD opportunity / supervision", "Research collaboration", "Employment / consultancy", "General enquiry"];

/**
 * Contact form.
 * - If NEXT_PUBLIC_CONTACT_FORM_ENDPOINT is set (e.g. Formspree), submits there.
 * - Otherwise opens the visitor's email client with a pre-filled message.
 * Works on Vercel and on static hosting (GitHub Pages) — no server required.
 */
export function ContactForm({ email }: { email: string | null }) {
  const endpoint = process.env.NEXT_PUBLIC_CONTACT_FORM_ENDPOINT;
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});

  const configured = Boolean(endpoint || email);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    if (data.get("company_website")) return; // honeypot

    const name = String(data.get("name") || "").trim();
    const from = String(data.get("email") || "").trim();
    const message = String(data.get("message") || "").trim();
    const topic = String(data.get("topic") || "");
    const organisation = String(data.get("organisation") || "").trim();

    const next: Record<string, string> = {};
    if (!name) next.name = "Please enter your name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(from)) next.email = "Please enter a valid email address.";
    if (message.length < 10) next.message = "Please write a short message (at least 10 characters).";
    setErrors(next);
    if (Object.keys(next).length) {
      const first = form.querySelector<HTMLElement>(`[name="${Object.keys(next)[0]}"]`);
      first?.focus();
      return;
    }

    if (endpoint) {
      setStatus("sending");
      try {
        const res = await fetch(endpoint, { method: "POST", body: data, headers: { Accept: "application/json" } });
        if (!res.ok) throw new Error(String(res.status));
        setStatus("sent");
        form.reset();
      } catch {
        setStatus("error");
      }
      return;
    }

    if (email) {
      const subject = `${topic}${organisation ? ` — ${organisation}` : ""}`;
      const body = `${message}\n\n—\n${name}${organisation ? `\n${organisation}` : ""}\n${from}`;
      window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      setStatus("mailto");
    }
  }

  const field =
    "mt-1.5 block w-full rounded-md border border-line bg-white px-3.5 py-2.5 text-[0.95rem] text-charcoal placeholder:text-sage-500 transition-colors focus:border-forest-600 focus:outline-none focus:ring-2 focus:ring-forest-600/20 aria-[invalid=true]:border-red-700";
  const label = "text-sm font-medium text-charcoal";

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-5" aria-describedby="form-status">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="cf-name" className={label}>
            Name <span aria-hidden className="text-forest-600">*</span>
          </label>
          <input id="cf-name" name="name" type="text" autoComplete="name" required className={field} aria-invalid={!!errors.name} aria-describedby={errors.name ? "cf-name-err" : undefined} />
          {errors.name && <p id="cf-name-err" className="mt-1 text-sm text-red-800">{errors.name}</p>}
        </div>
        <div>
          <label htmlFor="cf-email" className={label}>
            Email <span aria-hidden className="text-forest-600">*</span>
          </label>
          <input id="cf-email" name="email" type="email" autoComplete="email" required className={field} aria-invalid={!!errors.email} aria-describedby={errors.email ? "cf-email-err" : undefined} />
          {errors.email && <p id="cf-email-err" className="mt-1 text-sm text-red-800">{errors.email}</p>}
        </div>
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="cf-org" className={label}>
            Organisation <span className="font-normal text-ink-muted">(optional)</span>
          </label>
          <input id="cf-org" name="organisation" type="text" autoComplete="organization" className={field} />
        </div>
        <div>
          <label htmlFor="cf-topic" className={label}>
            Topic
          </label>
          <select id="cf-topic" name="topic" className={field} defaultValue={topics[0]}>
            {topics.map((t) => (
              <option key={t}>{t}</option>
            ))}
          </select>
        </div>
      </div>
      <div>
        <label htmlFor="cf-message" className={label}>
          Message <span aria-hidden className="text-forest-600">*</span>
        </label>
        <textarea id="cf-message" name="message" rows={6} required className={field} aria-invalid={!!errors.message} aria-describedby={errors.message ? "cf-message-err" : undefined} />
        {errors.message && <p id="cf-message-err" className="mt-1 text-sm text-red-800">{errors.message}</p>}
      </div>

      {/* Honeypot for spam bots */}
      <div aria-hidden className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
        <label htmlFor="cf-hp">Leave this field empty</label>
        <input id="cf-hp" name="company_website" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
        <button type="submit" className={buttonClass("primary")} disabled={!configured || status === "sending"}>
          {status === "sending" ? <LoaderCircle size={16} className="animate-spin" aria-hidden /> : <Send size={16} aria-hidden />}
          {status === "sending" ? "Sending…" : "Send message"}
        </button>
        <div id="form-status" role="status" aria-live="polite" className="text-sm">
          {!configured && (
            <span className="inline-flex items-center gap-1.5 text-pending">
              <CircleAlert size={16} aria-hidden /> Contact form not yet configured — add an email address or form endpoint.
            </span>
          )}
          {status === "sent" && (
            <span className="inline-flex items-center gap-1.5 text-forest-700">
              <CheckCircle2 size={16} aria-hidden /> Thank you — your message has been sent.
            </span>
          )}
          {status === "mailto" && (
            <span className="inline-flex items-center gap-1.5 text-forest-700">
              <CheckCircle2 size={16} aria-hidden /> Your email app should now open with the message ready to send.
            </span>
          )}
          {status === "error" && (
            <span className="inline-flex items-center gap-1.5 text-red-800">
              <CircleAlert size={16} aria-hidden /> Something went wrong. Please try again or email directly.
            </span>
          )}
        </div>
      </div>
    </form>
  );
}
