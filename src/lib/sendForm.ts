/**
 * Email delivery for the contact and CV request forms.
 *
 * Default: FormSubmit (https://formsubmit.co) — free, no account, works on
 * static hosting. Submissions are emailed to the address in profile.ts.
 * The FIRST submission triggers a one-time "Activate Form" email to that
 * address; click the link once and all later submissions are delivered.
 *
 * Optional: set NEXT_PUBLIC_CONTACT_FORM_ENDPOINT to use another endpoint
 * (e.g. a Formspree URL, or the private FormSubmit alias you receive after
 * activation, such as "https://formsubmit.co/ajax/a1b2c3d4e5...").
 */
export function formEndpoint(email: string | null): string | null {
  const custom = process.env.NEXT_PUBLIC_CONTACT_FORM_ENDPOINT;
  if (custom) return custom;
  return email ? `https://formsubmit.co/ajax/${email.trim()}` : null;
}

export async function sendForm(
  endpoint: string,
  { subject, replyTo, fields }: { subject: string; replyTo: string; fields: Record<string, string> },
): Promise<boolean> {
  const payload = {
    ...fields,
    _subject: subject,
    _replyto: replyTo,
    _template: "table",
    _captcha: "false",
  };
  try {
    const res = await fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify(payload),
    });
    if (!res.ok) return false;
    const json = (await res.json().catch(() => ({}))) as { success?: string | boolean; ok?: boolean };
    // FormSubmit returns { success: "true" }, Formspree returns { ok: true }
    if ("success" in json) return json.success === true || json.success === "true";
    return json.ok !== false;
  } catch {
    return false;
  }
}
