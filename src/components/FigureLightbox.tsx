"use client";

import Image from "next/image";
import { useRef } from "react";
import { Maximize2, X } from "lucide-react";
import { withBase } from "@/lib/utils";

/**
 * Figure thumbnail that opens the full-size image in a modal dialog.
 * Uses the native <dialog> element (Esc closes it, focus is managed by the browser).
 * The image is always shown whole (object-contain), never cropped or stretched.
 * The enlarged view loads the original file at full resolution, only when opened.
 */
export function FigureLightbox({
  src,
  alt,
  width,
  height,
  label,
}: {
  src: string;
  alt: string;
  width: number;
  height: number;
  label: string;
}) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const url = withBase(src);

  return (
    <>
      <button
        type="button"
        onClick={() => dialogRef.current?.showModal()}
        className="group relative block aspect-[4/3] w-full cursor-zoom-in border-b border-line bg-white"
        aria-label={`Enlarge ${label}`}
      >
        <Image
          src={url}
          alt={alt}
          fill
          sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 100vw"
          className="object-contain p-3"
        />
        <span
          aria-hidden
          className="absolute right-2 bottom-2 grid h-8 w-8 place-items-center rounded-md border border-line bg-surface/90 text-ink-muted opacity-80 transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100"
        >
          <Maximize2 size={15} />
        </span>
      </button>

      <dialog
        ref={dialogRef}
        aria-label={label}
        onClick={(e) => {
          if (e.target === dialogRef.current) dialogRef.current.close();
        }}
        className="m-auto w-[min(1100px,94vw)] max-w-none rounded-xl border border-line bg-white p-0 shadow-2xl backdrop:bg-forest-950/70"
      >
        <div className="flex items-center justify-between gap-4 border-b border-line px-4 py-2.5">
          <p className="text-sm font-medium text-charcoal">{label}</p>
          <button
            type="button"
            onClick={() => dialogRef.current?.close()}
            className="grid h-9 w-9 place-items-center rounded-md text-ink-muted hover:bg-sage-100 hover:text-charcoal"
            aria-label="Close enlarged figure"
          >
            <X size={18} />
          </button>
        </div>
        <div className="p-3 md:p-5">
          <Image
            src={url}
            alt={alt}
            width={width}
            height={height}
            unoptimized
            className="mx-auto h-auto max-h-[78vh] w-auto max-w-full object-contain"
          />
        </div>
      </dialog>
    </>
  );
}
