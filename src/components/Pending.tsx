import { cn } from "@/lib/utils";

/**
 * Visible marker for information that has not been provided yet.
 * Search the codebase for `null` in /src/content to find what to fill in.
 */
export function Pending({ label, className }: { label: string; className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1 rounded border border-dashed border-pending/40 bg-pending-bg px-1.5 py-0.5 align-middle font-sans text-[0.72rem] font-medium leading-tight tracking-normal text-pending",
        className,
      )}
    >
      <span aria-hidden>✎</span>
      <span>
        <span className="sr-only">Placeholder: </span>
        {label}
      </span>
    </span>
  );
}

export function DraftNote({ children = "Draft description — please confirm" }: { children?: React.ReactNode }) {
  return (
    <p className="inline-flex items-center gap-1.5 text-xs font-medium text-pending">
      <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-pending/70" />
      {children}
    </p>
  );
}

/** Renders the value or, if missing, a placeholder. */
export function ValueOr({ value, label }: { value: string | null | undefined; label: string }) {
  return value ? <>{value}</> : <Pending label={label} />;
}
