import Image from "next/image";
import { Anton } from "next/font/google";
import Reveal from "../components/Reveal";

const display = Anton({ subsets: ["latin"], weight: "400" });

const ACCENT = "#ff3b2f";

const SERVICES = [
  { n: "01", t: "POLERING", d: "RUPES Bigfoot. Fjerner riper, holografi og oksidasjon.", img: "/img/work-0735.jpg" },
  { n: "02", t: "KERAMISK COATING", d: "Hard, vannavstøtende barriere. Varer i årevis.", img: "/img/tesla.jpg" },
  { n: "03", t: "LAKKORRIGERING", d: "Swirls og vaskeriper slipes vekk. Bedre enn ny.", img: "/img/bilder-nettside.jpg" },
  { n: "04", t: "INTERIØR & SKINN", d: "Rens, conditioner, UV-beskyttelse. Fersk igjen.", img: "/img/work-4423.jpg" },
];

const GALLERY = ["/img/ferrari.jpg", "/img/brabus.png", "/img/tesla.jpg", "/img/bmw.jpg", "/img/brabus1.jpg"];
const TICKER = ["POLERING", "COATING", "INTERIØR", "OZON", "FOLIE", "LAKKORRIGERING"];

export default function Press() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-[#f2f2f0]" style={{ fontFamily: "system-ui" }}>
      {/* Nav */}
      <nav className="fixed top-0 inset-x-0 z-40 border-b border-white/15 bg-[#0a0a0a]/80 backdrop-blur-md">
        <div className="flex items-stretch justify-between">
          <span className={`${display.className} text-xl px-5 py-4 tracking-wide border-r border-white/15`}>SH BILPLEIE</span>
          <div className="hidden md:flex items-stretch text-xs uppercase tracking-[0.2em]">
            <a href="#tjenester" className="px-6 flex items-center border-l border-white/15 hover:bg-white hover:text-black transition-colors">Tjenester</a>
            <a href="#galleri" className="px-6 flex items-center border-l border-white/15 hover:bg-white hover:text-black transition-colors">Galleri</a>
            <a href="tel:+4791534263" className="px-6 flex items-center text-black font-bold tracking-[0.2em]" style={{ background: ACCENT }}>BESTILL TIME</a>
          </div>
        </div>
      </nav>

      {/* Hero — type over image */}
      <section className="relative min-h-screen flex flex-col justify-end overflow-hidden border-b border-white/15">
        <Image src="/img/brabus.png" alt="Bil hos SH Bilpleie" fill priority sizes="100vw" className="object-cover opacity-55" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/30 to-[#0a0a0a]/50" />
        <div className="relative px-5 pb-10 pt-32">
          <div className="flex items-center gap-3 text-xs uppercase tracking-[0.4em] mb-6" style={{ color: ACCENT }}>
            <span className="h-3 w-3" style={{ background: ACCENT }} /> Detailing · Vesterålen
          </div>
          <h1 className={`${display.className} uppercase leading-[0.82]`} style={{ fontSize: "clamp(3.5rem, 16vw, 15rem)", letterSpacing: "-0.01em" }}>
            Råere<br />enn fabrikk.
          </h1>
          <div className="mt-9 flex flex-wrap gap-4 items-center">
            <a href="tel:+4791534263" className={`${display.className} text-2xl px-8 py-4 text-black tracking-wide`} style={{ background: ACCENT }}>RING 915 34 263</a>
            <a href="#tjenester" className="text-sm uppercase tracking-[0.2em] border border-white/30 px-7 py-4 hover:bg-white hover:text-black transition-colors">Se hva vi gjør</a>
          </div>
        </div>
      </section>

      {/* Ticker */}
      <section className="overflow-hidden border-b border-white/15 py-4 text-black" style={{ background: ACCENT }}>
        <div className="flex items-center gap-8 whitespace-nowrap" style={{ animation: "press-marq 30s linear infinite" }}>
          {[...TICKER, ...TICKER, ...TICKER].map((b, i) => (
            <span key={i} className={`${display.className} text-2xl md:text-3xl uppercase flex items-center gap-8`}>{b} <span>/</span></span>
          ))}
        </div>
        <style>{`@keyframes press-marq{from{transform:translateX(0)}to{transform:translateX(-33.333%)}}@media(prefers-reduced-motion:reduce){[style*="press-marq"]{animation:none}}`}</style>
      </section>

      {/* Tjenester — big numbered rows */}
      <section id="tjenester" className="border-b border-white/15">
        <div className="px-5 py-16 border-b border-white/15">
          <p className="text-xs uppercase tracking-[0.4em] mb-4" style={{ color: ACCENT }}>/ Tjenester</p>
          <h2 className={`${display.className} uppercase leading-[0.9]`} style={{ fontSize: "clamp(2.5rem, 8vw, 6rem)" }}>Det vi gjør.</h2>
        </div>
        {SERVICES.map((s) => (
          <Reveal key={s.n}>
            <article className="group grid md:grid-cols-[auto_1fr_auto] items-center gap-6 md:gap-10 px-5 py-8 border-b border-white/15 hover:bg-white hover:text-black transition-colors">
              <span className={`${display.className} text-3xl md:text-5xl`} style={{ color: ACCENT }}>{s.n}</span>
              <div>
                <h3 className={`${display.className} text-3xl md:text-5xl uppercase leading-none mb-2`}>{s.t}</h3>
                <p className="text-sm text-stone-400 group-hover:text-stone-700 max-w-md">{s.d}</p>
              </div>
              <div className="relative w-full md:w-56 aspect-[16/10] overflow-hidden grayscale group-hover:grayscale-0 transition-all">
                <Image src={s.img} alt={s.t} fill sizes="240px" className="object-cover" />
              </div>
            </article>
          </Reveal>
        ))}
      </section>

      {/* Galleri */}
      <section id="galleri" className="border-b border-white/15">
        <div className="px-5 py-16">
          <p className="text-xs uppercase tracking-[0.4em] mb-4" style={{ color: ACCENT }}>/ Referanser</p>
          <h2 className={`${display.className} uppercase leading-[0.9]`} style={{ fontSize: "clamp(2.5rem, 8vw, 6rem)" }}>På løftet.</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-5 border-t border-white/15">
          {GALLERY.map((src, i) => (
            <Reveal key={i} delay={(i % 5) * 70}>
              <div className="relative aspect-square overflow-hidden border-r border-b border-white/15 group">
                <Image src={src} alt="Bil etter detailing hos SH Bilpleie" fill sizes="20vw" className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" />
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Kontakt */}
      <section id="kontakt" className="px-5 py-20">
        <p className="text-xs uppercase tracking-[0.4em] mb-4" style={{ color: ACCENT }}>/ Bestilling</p>
        <h2 className={`${display.className} uppercase leading-[0.85] mb-10`} style={{ fontSize: "clamp(3rem, 12vw, 10rem)" }}>
          Lever inn<br />bilen.
        </h2>
        <a href="tel:+4791534263" className={`${display.className} inline-block text-4xl md:text-6xl text-black px-8 py-5`} style={{ background: ACCENT }}>915 34 263</a>
        <p className="mt-8 text-stone-400 uppercase tracking-[0.2em] text-sm">Sortland · Vesterålen · Man–lør etter avtale · Shbilpleievesteraalen@gmail.com</p>
      </section>

      <footer className="border-t border-white/15 px-5 py-10 flex items-center justify-between flex-wrap gap-4">
        <span className={`${display.className} text-xl`}>SH BILPLEIE</span>
        <span className="text-xs uppercase tracking-[0.2em] text-stone-500">© {new Date().getFullYear()} · Service Halvorsen · Vesterålen</span>
      </footer>

      <a href="tel:+4791534263" className="md:hidden fixed bottom-0 inset-x-0 z-50 text-black flex items-center justify-center gap-3 py-4 text-sm font-bold uppercase tracking-[0.2em]" style={{ background: ACCENT }}>
        Ring · 915 34 263
      </a>
    </div>
  );
}
