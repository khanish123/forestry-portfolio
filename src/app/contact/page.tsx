import type { Metadata } from "next";
import { ArrowUpRight, FileText, GraduationCap, Mail, MapPin } from "lucide-react";
import type { ReactNode } from "react";
import { GitHubIcon, LinkedInIcon } from "@/components/BrandIcons";
import { ContactForm } from "@/components/ContactForm";
import { CvButton } from "@/components/CvButton";
import { PageHeader } from "@/components/PageHeader";
import { Pending } from "@/components/Pending";
import { showPlaceholders } from "@/lib/placeholders";
import { profile } from "@/content/profile";

export const metadata: Metadata = {
  title: "CV & Contact",
  description: "Download the academic CV or get in touch about PhD positions, research collaboration and professional opportunities.",
  alternates: { canonical: "/contact" },
};

function Row({ icon, label, value, href }: { icon: ReactNode; label: string; value: string | null | undefined; href?: string | null }) {
  if (!value && !showPlaceholders) return null;
  return (
    <li className="flex items-start gap-4 py-4">
      <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-sage-100 text-forest-700">{icon}</span>
      <div className="min-w-0">
        <p className="text-sm text-ink-muted">{label}</p>
        {value ? (
          href ? (
            <a
              href={href}
              {...(href.startsWith("mailto:") ? {} : { target: "_blank", rel: "noopener noreferrer" })}
              className="link-underline inline-flex items-center gap-1 break-all text-charcoal"
            >
              {value}
              {!href.startsWith("mailto:") && <ArrowUpRight size={14} aria-hidden className="shrink-0" />}
            </a>
          ) : (
            <p className="text-charcoal">{value}</p>
          )
        ) : (
          <div className="mt-1">
            <Pending label={`${label} — to be added`} />
          </div>
        )}
      </div>
    </li>
  );
}

const pretty = (url: string | null | undefined) => (url ? url.replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, "") : null);

export default function ContactPage() {
  const { links } = profile;
  return (
    <>
      <PageHeader eyebrow="CV & contact" title="Let’s talk about forests, data and research" artwork="contours" seed={83}>
        <p>{profile.availability}</p>
      </PageHeader>

      <section className="container-page grid gap-14 py-16 md:py-20 lg:grid-cols-[1fr_1.35fr] lg:gap-20">
        <div className="space-y-10">
          <div id="cv" className="scroll-mt-24 rounded-xl bg-forest-900 p-7 text-paper">
            <FileText size={24} aria-hidden className="text-sage-300" />
            <h2 className="mt-4 text-2xl font-medium text-paper">Academic CV</h2>
            <p className="mt-2 text-sm leading-relaxed text-sage-200">
              Education, research and professional experience, skills, training, awards and publications.
            </p>
            {profile.cvLastUpdated && <p className="mt-2 text-xs text-sage-300">Last updated: {profile.cvLastUpdated}</p>}
            <CvButton variant="light" className="mt-6" label="Download CV (PDF)" />
            <p className="mt-3 text-xs leading-relaxed text-sage-300">
              The public version omits personal details and referee contact information.
            </p>
            <details className="group mt-6 rounded-lg bg-surface text-ink">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-3 rounded-lg px-5 py-4 text-sm font-medium text-charcoal hover:bg-sage-50">
                Request the full CV with referee details
                <span aria-hidden className="text-lg leading-none text-forest-700 transition-transform group-open:rotate-45">+</span>
              </summary>
              <div className="border-t border-line p-5">
                <p className="mb-5 text-sm leading-relaxed text-ink-muted">
                  For admission committees and recruiters: leave your details and I will email you my full CV, including
                  referee contact information.
                </p>
                <ContactForm email={links.email} kind="cv" compact />
              </div>
            </details>
          </div>

          <div>
            <h2 className="text-2xl font-medium">Contact details</h2>
            <ul className="mt-3 divide-y divide-line border-y border-line">
              <Row icon={<Mail size={18} aria-hidden />} label="Email" value={links.email} href={links.email ? `mailto:${links.email}` : null} />
              <Row icon={<LinkedInIcon />} label="LinkedIn" value={pretty(links.linkedin)} href={links.linkedin} />
              <Row icon={<GitHubIcon />} label="GitHub" value={pretty(links.github)} href={links.github} />
              <Row icon={<GraduationCap size={18} aria-hidden />} label="Google Scholar" value={links.googleScholar ? "Google Scholar profile" : null} href={links.googleScholar} />
              <Row icon={<MapPin size={18} aria-hidden />} label="Location" value={profile.location} />
            </ul>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-medium">Send a message</h2>
          <p className="mt-2 mb-8 text-[0.95rem] text-ink-muted">
            For PhD opportunities, research collaborations, or professional enquiries. Your message is sent directly to my inbox, and I aim to reply within a few working days.
          </p>
          <ContactForm email={links.email} kind="message" />
        </div>
      </section>
    </>
  );
}
