"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

/** Cinematic hero: layered image + headline with mouse-parallax depth and slow zoom. */
export default function Hero() {
  const imgRef = useRef<HTMLDivElement | null>(null);
  const fgRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let raf = 0;
    let tx = 0, ty = 0, cx = 0, cy = 0;
    const onMove = (e: PointerEvent) => {
      tx = (e.clientX / window.innerWidth - 0.5);
      ty = (e.clientY / window.innerHeight - 0.5);
    };
    const loop = () => {
      cx += (tx - cx) * 0.06;
      cy += (ty - cy) * 0.06;
      if (imgRef.current) imgRef.current.style.transform = `scale(1.12) translate3d(${cx * -26}px, ${cy * -18}px, 0)`;
      if (fgRef.current) fgRef.current.style.transform = `translate3d(${cx * 16}px, ${cy * 12}px, 0)`;
      raf = requestAnimationFrame(loop);
    };
    window.addEventListener("pointermove", onMove);
    raf = requestAnimationFrame(loop);
    return () => { window.removeEventListener("pointermove", onMove); cancelAnimationFrame(raf); };
  }, []);

  return (
    <section className="relative h-[100svh] min-h-[640px] overflow-hidden bg-stone-950">
      {/* image layer */}
      <div ref={imgRef} className="absolute inset-0" style={{ transform: "scale(1.12)", willChange: "transform" }}>
        <Image
          src="/img/brabus.png"
          alt="Brabus Mercedes-AMG G etter detailing hos SH Bilpleie i Vesterålen"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>

      {/* depth gradients + vignette */}
      <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/35 to-stone-950/60" />
      <div className="absolute inset-0" style={{ background: "radial-gradient(120% 90% at 50% 35%, transparent 40%, rgba(0,0,0,0.65) 100%)" }} />
      {/* grain */}
      <div className="absolute inset-0 opacity-[0.07] mix-blend-overlay pointer-events-none" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='140' height='140'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")" }} />

      {/* foreground content */}
      <div ref={fgRef} className="relative h-full max-w-7xl mx-auto px-6 flex flex-col justify-end pb-24" style={{ willChange: "transform" }}>
        <div className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.5em] text-stone-300 hero-line" style={{ animationDelay: "120ms" }}>
          <span className="h-px w-12 bg-brand" />
          <span>Detailing · Vesterålen</span>
        </div>
        <h1 className="font-bold text-white mt-6" style={{ fontSize: "clamp(3.2rem, 10vw, 9rem)", letterSpacing: "-0.045em", lineHeight: 0.96 }}>
          <span className="block hero-line" style={{ animationDelay: "220ms" }}>Lakk som</span>
          <span className="block italic font-light text-stone-300 hero-line pb-[0.08em]" style={{ animationDelay: "340ms" }}>fanger lyset.</span>
        </h1>
        <div className="mt-8 max-w-xl">
          <p className="text-lg md:text-xl text-stone-200 leading-relaxed hero-line" style={{ animationDelay: "480ms" }}>
            Polering, keramisk coating og interiør på et nivå Vesterålen ikke har sett før.
            Lever inn hverdagsbilen — eller drømmebilen.
          </p>
        </div>
        <div className="flex flex-wrap gap-3 items-center mt-10 hero-line" style={{ animationDelay: "620ms" }}>
          <a href="tel:+4791534263" className="inline-flex items-center gap-3 px-7 py-4 bg-brand text-white hover:bg-brand-light transition-colors font-bold">
            <span className="text-xs uppercase tracking-[0.25em]">Ring</span>
            <span className="text-lg font-mono">915 34 263</span>
          </a>
          <a href="#tjenester" className="inline-block px-7 py-4 border border-white/25 text-white hover:bg-white hover:text-stone-950 transition-colors uppercase tracking-[0.25em] text-xs font-semibold backdrop-blur-sm">
            Se hva vi gjør
          </a>
        </div>
      </div>

      {/* scroll cue */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-stone-400">
        <span className="font-mono text-[10px] uppercase tracking-[0.3em]">Scroll</span>
        <span className="block w-px h-10 bg-gradient-to-b from-stone-400 to-transparent scroll-cue" />
      </div>

      <style>{`
        .hero-line { opacity: 0; transform: translateY(28px); animation: heroUp .9s cubic-bezier(.16,1,.3,1) forwards; }
        @keyframes heroUp { to { opacity: 1; transform: translateY(0); } }
        .scroll-cue { transform-origin: top; animation: cue 1.8s ease-in-out infinite; }
        @keyframes cue { 0%,100%{ transform: scaleY(.4); opacity:.4 } 50%{ transform: scaleY(1); opacity:1 } }
        @media (prefers-reduced-motion: reduce){ .hero-line{ opacity:1; transform:none; animation:none } .scroll-cue{ animation:none } }
      `}</style>
    </section>
  );
}
