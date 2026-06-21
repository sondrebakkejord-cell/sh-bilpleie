"use client";

import Image from "next/image";
import { useCallback, useRef, useState } from "react";

/**
 * Drag-to-reveal before/after slider.
 * "Etter" = the real glossy photo. "Før" = same photo with a dull/dirty filter
 * (a visual device — swap in a real before-photo for full authenticity).
 */
export default function BeforeAfter({ src, alt }: { src: string; alt: string }) {
  const [pos, setPos] = useState(52);
  const wrap = useRef<HTMLDivElement | null>(null);

  const setFromX = useCallback((clientX: number) => {
    const r = wrap.current?.getBoundingClientRect();
    if (!r) return;
    setPos(Math.max(0, Math.min(100, ((clientX - r.left) / r.width) * 100)));
  }, []);

  const onPointerDown = (e: React.PointerEvent) => {
    setFromX(e.clientX);
    const move = (ev: PointerEvent) => setFromX(ev.clientX);
    const up = () => {
      window.removeEventListener("pointermove", move);
      window.removeEventListener("pointerup", up);
    };
    window.addEventListener("pointermove", move);
    window.addEventListener("pointerup", up);
  };

  return (
    <div
      ref={wrap}
      className="relative w-full aspect-[16/10] overflow-hidden bg-stone-900 select-none touch-none cursor-ew-resize"
      onPointerDown={onPointerDown}
    >
      {/* ETTER (clean) */}
      <Image src={src} alt={alt} fill priority={false} sizes="(max-width:768px) 100vw, 60vw" className="object-cover" />

      {/* FØR (dull/dirty filter), clipped from the left */}
      <div className="absolute inset-0" style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}>
        <Image
          src={src}
          alt=""
          aria-hidden
          fill
          sizes="(max-width:768px) 100vw, 60vw"
          className="object-cover"
          style={{ filter: "grayscale(0.7) brightness(0.62) contrast(1.05) saturate(0.6)" }}
        />
      </div>

      {/* labels */}
      <span className="absolute top-4 left-4 font-mono text-[10px] uppercase tracking-[0.3em] bg-stone-950/70 text-stone-200 px-2 py-1">Før</span>
      <span className="absolute top-4 right-4 font-mono text-[10px] uppercase tracking-[0.3em] bg-red-600/90 text-white px-2 py-1">Etter</span>

      {/* handle */}
      <div className="absolute top-0 bottom-0 w-0.5 bg-white/90 pointer-events-none" style={{ left: `${pos}%` }}>
        <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-11 h-11 rounded-full bg-white shadow-lg flex items-center justify-center">
          <span className="text-stone-900 text-sm font-bold tracking-tighter">⟷</span>
        </div>
      </div>

      {/* keyboard / a11y control */}
      <input
        type="range"
        min={0}
        max={100}
        value={pos}
        onChange={(e) => setPos(Number(e.target.value))}
        aria-label="Dra for å se før og etter polering"
        className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize"
      />
    </div>
  );
}
