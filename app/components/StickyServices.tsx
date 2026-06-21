"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

type Item = { num: string; title: string; desc: string; img: string; img2?: string };

/** Apple-style pinned scroll: image stays, crossfades as each service scrolls through. */
export default function StickyServices({ items }: { items: Item[] }) {
  const [active, setActive] = useState(0);
  const refs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(Number((e.target as HTMLElement).dataset.i));
        });
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 }
    );
    refs.current.forEach((el) => el && obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <div className="grid md:grid-cols-2 md:gap-x-16">
      {/* sticky image column */}
      <div className="hidden md:block">
        <div className="sticky top-0 h-screen flex items-center">
          <div className="relative w-full aspect-[4/5] overflow-hidden bg-stone-900 border border-stone-800">
            {items.map((s, i) => (
              <Image
                key={i}
                src={s.img}
                alt={s.title}
                fill
                sizes="50vw"
                className="object-cover transition-opacity duration-[900ms] ease-out"
                style={{ opacity: active === i ? 1 : 0, transform: active === i ? "scale(1)" : "scale(1.04)" }}
              />
            ))}
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950/40 to-transparent pointer-events-none" />
            <div className="absolute top-5 left-5 font-mono text-sm text-white/85 tracking-widest">
              {String(active + 1).padStart(2, "0")}
              <span className="text-white/40"> / {String(items.length).padStart(2, "0")}</span>
            </div>
            {items.map((s, i) =>
              s.img2 ? (
                <div
                  key={`inset-${i}`}
                  className="absolute bottom-5 right-5 w-2/5 aspect-[4/3] overflow-hidden border-2 border-stone-950 shadow-2xl transition-opacity duration-[900ms]"
                  style={{ opacity: active === i ? 1 : 0 }}
                >
                  <Image src={s.img2} alt="" fill sizes="20vw" className="object-cover" />
                </div>
              ) : null
            )}
          </div>
        </div>
      </div>

      {/* scrolling steps */}
      <div>
        {items.map((s, i) => (
          <div
            key={i}
            data-i={i}
            ref={(el) => { refs.current[i] = el; }}
            className="min-h-[88vh] flex flex-col justify-center py-14"
          >
            <div className="md:hidden relative aspect-[16/11] mb-7 overflow-hidden bg-stone-900 border border-stone-800">
              <Image src={s.img} alt={s.title} fill sizes="100vw" className="object-cover" />
              {s.img2 && (
                <div className="absolute bottom-3 right-3 w-2/5 aspect-[4/3] overflow-hidden border-2 border-stone-950 shadow-xl">
                  <Image src={s.img2} alt="" fill sizes="40vw" className="object-cover" />
                </div>
              )}
            </div>
            <p className="font-mono text-[11px] uppercase tracking-[0.4em] text-brand-light mb-5">{s.num}</p>
            <h3 className="text-white font-bold mb-5" style={{ fontSize: "clamp(2rem, 4.2vw, 3.4rem)", letterSpacing: "-0.025em", lineHeight: 1.02 }}>
              {s.title}
            </h3>
            <p className="text-lg text-stone-300 leading-relaxed max-w-md">{s.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
