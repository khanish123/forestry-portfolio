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
            {profile.cvPath ? (
              <>
                <p className="mt-2 text-sm leading-relaxed text-sage-200">
                  Education, research and professional experience, skills, training, awards and publications.
                </p>
                {profile.cvLastUpdated && <p className="mt-2 text-xs text-sage-300">Last updated: {profile.cvLastUpdated}</p>}
                <CvButton variant="light" className="mt-6" label="Download CV (PDF)" />
              </>
            ) : (
              <>
                <p className="mt-2 text-sm leading-relaxed text-sage-200">
                  My full academic CV is available on request. Leave your details and I will email it to you.
                </p>
                <div className="mt-6 rounded-lg bg-surface p-5 text-ink">
                  <ContactForm email={links.email} kind="cv" compact />
                </div>
              </>
            )}
          </div>

          <div>
            <h2 className="text-2xl font-medium">Contact details</h2>
            <ul className="mt-3 divide-y divide-line border-y border-line">
              {links.email && (
                <li className="py-4">
                  <a
                    href={`mailto:${links.email}`}
                    title="Send me an email"
                    className="group flex items-center gap-4"
                  >
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-sage-100 text-forest-700 transition-colors duration-200 group-hover:bg-forest-800 group-hover:text-paper">
                      <Mail size={18} aria-hidden />
                    </span>
                    <span className="min-w-0">
                      <span aria-hidden className="block text-sm text-ink-muted">Email</span>
                      <span className="text-charcoal underline decoration-sage-400 decoration-1 underline-offset-4 transition-colors group-hover:text-forest-800 group-hover:decoration-forest-700">
                        Send me an email
                      </span>
                    </span>
                  </a>
                </li>
              )}
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
