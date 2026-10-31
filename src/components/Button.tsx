import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "ghost" | "light";

const styles: Record<Variant, string> = {
  primary: "bg-forest-800 text-paper hover:bg-forest-900 shadow-sm",
  secondary: "border border-forest-800/25 text-forest-900 hover:border-forest-800/60 hover:bg-sage-50",
  ghost: "text-forest-800 hover:text-forest-950 px-0",
  light: "bg-paper text-forest-900 hover:bg-sage-100",
};

export function buttonClass(variant: Variant = "primary", className?: string) {
  return cn(
    "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md px-5 py-2.5 text-sm font-medium transition-colors duration-200 disabled:cursor-not-allowed disabled:opacity-60",
    styles[variant],
    className,
  );
}

type ButtonLinkProps = {
  href: string;
  variant?: Variant;
  className?: string;
  children: ReactNode;
  external?: boolean;
} & Omit<ComponentProps<"a">, "href" | "className" | "children">;

export function ButtonLink({ href, variant = "primary", className, children, external, ...rest }: ButtonLinkProps) {
  const cls = buttonClass(variant, className);
  const isFile = /\.(pdf|docx?)$/i.test(href);
  if (external || isFile || /^(https?:|mailto:)/.test(href)) {
    return (
      <a
        href={href}
        className={cls}
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        {...rest}
      >
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={cls} {...rest}>
      {children}
    </Link>
  );
}
