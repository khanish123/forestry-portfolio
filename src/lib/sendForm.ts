import { formDelivery } from "@/content/profile";

/**
 * Email delivery for the contact and CV request forms. Order of preference:
 *
 * 1. Web3Forms (recommended) — set `formDelivery.web3formsKey` in
 *    src/content/profile.ts (or NEXT_PUBLIC_WEB3FORMS_KEY). Get a free key at
 *    https://web3forms.com by entering your email; no activation link needed.
 *    The key is designed to be public, so it is safe to keep in the code.
 * 2. A custom endpoint in NEXT_PUBLIC_CONTACT_FORM_ENDPOINT (e.g. Formspree).
 * 3. FormSubmit (https://formsubmit.co) using the profile email — requires a
 *    one-time activation link that is clicked from the owner's inbox.
 */
export type FormTarget = { provider: "web3forms" | "custom" | "formsubmit"; url: string; key?: string };

export function formEndpoint(email: string | null): FormTarget | null {
  const key = process.env.NEXT_PUBLIC_WEB3FORMS_KEY || formDelivery.web3formsKey;
  if (key) return { provider: "web3forms", url: "https://api.web3forms.com/submit", key };
  const custom = process.env.NEXT_PUBLIC_CONTACT_FORM_ENDPOINT;
  if (custom) return { provider: "custom", url: custom };
  return email ? { provider: "formsubmit", url: `https://formsubmit.co/ajax/${email.trim()}` } : null;
}

export async function sendForm(
  target: FormTarget,
  { subject, replyTo, fromName, fields }: { subject: string; replyTo: string; fromName: string; fields: Record<string, string> },
): Promise<boolean> {
  const payload =
    target.provider === "web3forms"
      ? { access_key: target.key, subject, from_name: `${fromName} via website`, replyto: replyTo, ...fields }
      : { ...fields, _subject: subject, _replyto: replyTo, _template: "table", _captcha: "false" };
  try {
    const res = await fetch(target.url, {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify(payload),
    });
    const json = (await res.json().catch(() => ({}))) as { success?: string | boolean; ok?: boolean };
    if (!res.ok) return false;
    // Web3Forms: { success: true }, FormSubmit: { success: "true" }, Formspree: { ok: true }
    if ("success" in json) return json.success === true || json.success === "true";
    return json.ok !== false;
  } catch {
    return false;
  }
}
