import type { Metadata } from "next";
import { ArrowUpRight, FileText, GraduationCap, Mail, MapPin } from "lucide-react";
import type { ReactNode } from "react";
import { GitHubIcon, LinkedInIcon } from "@/components/BrandIcons";
import { ContactForm } from "@/components/ContactForm";
import { CvButton } from "@/components/CvButton";
import { PageHeader } from "@/components/PageHeader";
import { Pending } from "@/components/Pending";
import { profile } from "@/content/profile";

export const metadata: Metadata = {
  title: "CV & Contact",
  description: "Download the academic CV or get in touch about PhD positions, research collaboration and professional opportunities.",
  alternates: { canonical: "/contact" },
};

function Row({ icon, label, value, href }: { icon: ReactNode; label: string; value: string | null | undefined; href?: string | null }) {
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
          <div className="rounded-xl bg-forest-900 p-7 text-paper">
            <FileText size={24} aria-hidden className="text-sage-300" />
            <h2 className="mt-4 text-2xl font-medium text-paper">Academic CV</h2>
            <p className="mt-2 text-sm leading-relaxed text-sage-200">
              Full details of education, research experience, skills and outputs.
            </p>
            <p className="mt-2 text-xs text-sage-300">
              {profile.cvLastUpdated ? `Last updated: ${profile.cvLastUpdated}` : "Last updated: to be confirmed"}
            </p>
            <CvButton variant="light" className="mt-6" label="Download CV (PDF)" />
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
            For PhD opportunities, research collaborations, or professional enquiries. I aim to reply within a few working days.
          </p>
          <ContactForm email={links.email} />
        </div>
      </section>
    </>
  );
}
