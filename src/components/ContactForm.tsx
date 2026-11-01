"use client";

import { useState, type FormEvent } from "react";
import { CheckCircle2, CircleAlert, LoaderCircle, Send } from "lucide-react";
import { formEndpoint, sendForm } from "@/lib/sendForm";
import { cn } from "@/lib/utils";
import { buttonClass } from "./Button";
import { EmailIconLink } from "./EmailIconLink";

type Status = "idle" | "sending" | "sent" | "error";
type Kind = "message" | "cv";

const topics = ["PhD opportunity / supervision", "Research collaboration", "Employment / consultancy", "General enquiry"];
const cvPurposes = ["PhD position / admission", "Research position", "Collaboration", "Employment / consultancy", "Other"];

/**
 * Contact form and CV request form.
 * Submissions are emailed directly to the site owner (see src/lib/sendForm.ts);
 * the visitor's address is set as reply-to, so replying goes straight to them.
 */
export function ContactForm({ email, kind = "message", compact = false }: { email: string | null; kind?: Kind; compact?: boolean }) {
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const endpoint = formEndpoint(email);
  const id = (n: string) => `${kind}-${n}`;

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!endpoint) return;
    const form = e.currentTarget;
    const data = new FormData(form);
    if (data.get("_honey")) return; // spam bot

    const name = String(data.get("name") || "").trim();
    const from = String(data.get("email") || "").trim();
    const organisation = String(data.get("organisation") || "").trim();
    const message = String(data.get("message") || "").trim();
    const topic = String(data.get("topic") || "");

    const next: Record<string, string> = {};
    if (!name) next.name = "Please enter your name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(from)) next.email = "Please enter a valid email address.";
    if (kind === "message" && message.length < 10) next.message = "Please write a short message (at least 10 characters).";
    setErrors(next);
    if (Object.keys(next).length) {
      form.querySelector<HTMLElement>(`[name="${Object.keys(next)[0]}"]`)?.focus();
      return;
    }

    const subject =
      kind === "cv"
        ? `CV request from ${name}${organisation ? ` (${organisation})` : ""}`
        : `Website message: ${topic} — ${name}`;

    const fields: Record<string, string> =
      kind === "cv"
        ? {
            "Request type": "CV request",
            Name: name,
            Email: from,
            Organisation: organisation || "—",
            Purpose: topic,
            Note: message || "—",
          }
        : {
            Name: name,
            Email: from,
            Organisation: organisation || "—",
            Topic: topic,
            Message: message,
          };

    setStatus("sending");
    const ok = await sendForm(endpoint, { subject, replyTo: from, fromName: name, fields });
    setStatus(ok ? "sent" : "error");
    if (ok) form.reset();
  }

  const field =
    "mt-1.5 block w-full rounded-md border border-line bg-surface px-3.5 py-2.5 text-[0.95rem] text-charcoal placeholder:text-sage-600 transition-colors focus:border-forest-600 focus:outline-none focus:ring-2 focus:ring-forest-600/20 aria-[invalid=true]:border-red-700";
  const label = "text-sm font-medium text-charcoal";

  if (status === "sent") {
    return (
      <div role="status" className="rounded-lg border border-sage-300 bg-sage-50 p-6">
        <p className="flex items-center gap-2 font-medium text-forest-800">
          <CheckCircle2 size={18} aria-hidden /> {kind === "cv" ? "CV request sent" : "Message sent"}
        </p>
        <p className="mt-2 text-sm leading-relaxed text-ink-muted">
          {kind === "cv"
            ? "Thank you. I will email my CV to the address you provided shortly."
            : "Thank you for getting in touch. I will reply to your email as soon as possible."}
        </p>
        <button type="button" onClick={() => setStatus("idle")} className="link-underline mt-3 text-sm text-forest-800">
          {kind === "cv" ? "Send another request" : "Send another message"}
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-5" aria-describedby={id("status")}>
      <div className={cn("grid gap-5", !compact && "sm:grid-cols-2")}>
        <div>
          <label htmlFor={id("name")} className={label}>
            Name <span aria-hidden className="text-forest-600">*</span>
          </label>
          <input id={id("name")} name="name" type="text" autoComplete="name" required className={field} aria-invalid={!!errors.name} aria-describedby={errors.name ? id("name-err") : undefined} />
          {errors.name && <p id={id("name-err")} className="mt-1 text-sm text-red-800">{errors.name}</p>}
        </div>
        <div>
          <label htmlFor={id("email")} className={label}>
            Email <span aria-hidden className="text-forest-600">*</span>
          </label>
          <input id={id("email")} name="email" type="email" autoComplete="email" required className={field} aria-invalid={!!errors.email} aria-describedby={errors.email ? id("email-err") : undefined} />
          {errors.email && <p id={id("email-err")} className="mt-1 text-sm text-red-800">{errors.email}</p>}
        </div>
      </div>
      <div className={cn("grid gap-5", !compact && "sm:grid-cols-2")}>
        <div>
          <label htmlFor={id("org")} className={label}>
            Organisation <span className="font-normal text-ink-muted">(optional)</span>
          </label>
          <input id={id("org")} name="organisation" type="text" autoComplete="organization" className={field} />
        </div>
        <div>
          <label htmlFor={id("topic")} className={label}>
            {kind === "cv" ? "Purpose" : "Topic"}
          </label>
          <select id={id("topic")} name="topic" className={field} defaultValue={(kind === "cv" ? cvPurposes : topics)[0]}>
            {(kind === "cv" ? cvPurposes : topics).map((t) => (
              <option key={t}>{t}</option>
            ))}
          </select>
        </div>
      </div>
      <div>
        <label htmlFor={id("message")} className={label}>
          {kind === "cv" ? (
            <>
              Note <span className="font-normal text-ink-muted">(optional)</span>
            </>
          ) : (
            <>
              Message <span aria-hidden className="text-forest-600">*</span>
            </>
          )}
        </label>
        <textarea
          id={id("message")}
          name="message"
          rows={kind === "cv" ? 3 : 6}
          required={kind === "message"}
          className={field}
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? id("message-err") : undefined}
        />
        {errors.message && <p id={id("message-err")} className="mt-1 text-sm text-red-800">{errors.message}</p>}
      </div>

      {/* Honeypot for spam bots */}
      <div aria-hidden className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
        <label htmlFor={id("hp")}>Leave this field empty</label>
        <input id={id("hp")} name="_honey" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
        <button type="submit" className={buttonClass("primary")} disabled={!endpoint || status === "sending"}>
          {status === "sending" ? <LoaderCircle size={16} className="animate-spin" aria-hidden /> : <Send size={16} aria-hidden />}
          {status === "sending" ? "Sending…" : kind === "cv" ? "Request CV" : "Send message"}
        </button>
        <div id={id("status")} role="status" aria-live="polite" className="text-sm">
          {!endpoint && (
            <span className="inline-flex items-center gap-1.5 text-pending">
              <CircleAlert size={16} aria-hidden /> Form not configured — add an email address in profile.ts.
            </span>
          )}
          {status === "error" && (
            <span className="inline-flex items-start gap-1.5 text-red-800">
              <CircleAlert size={16} aria-hidden className="mt-0.5 shrink-0" />
              <span>
                Sorry, the message could not be sent.
                {email && (
                  <>
                    {" "}Please email me directly{" "}
                    <EmailIconLink email={email} size="sm" className="ml-1" />
                  </>
                )}
              </span>
            </span>
          )}
        </div>
      </div>
    </form>
  );
}
