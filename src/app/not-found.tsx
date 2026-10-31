import { ArrowLeft } from "lucide-react";
import { ButtonLink } from "@/components/Button";

export default function NotFound() {
  return (
    <section className="container-page flex min-h-[60vh] flex-col items-start justify-center py-24">
      <p className="eyebrow">404</p>
      <h1 className="mt-3 text-4xl font-medium">This path leads off the trail.</h1>
      <p className="prose-body mt-4 max-w-lg">The page you are looking for does not exist or has moved.</p>
      <ButtonLink href="/" className="mt-8">
        <ArrowLeft size={16} aria-hidden /> Back to home
      </ButtonLink>
    </section>
  );
}
