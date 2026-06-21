import Image from "next/image";
import { Fraunces } from "next/font/google";
import Reveal from "../components/Reveal";
import Parallax from "../components/Parallax";

const serif = Fraunces({ subsets: ["latin"], weight: ["300", "400", "500"], style: ["normal", "italic"] });

const SERVICES = [
  { n: "01", t: "Polering", d: "RUPES Bigfoot fjerner riper, holografi og oksidasjon — til lakken speiler igjen.", img: "/img/work-0735.jpg" },
  { n: "02", t: "Keramisk coating", d: "Et flytende keramisk lag herder til en hard, vannavstøtende barriere som varer i årevis.", img: "/img/tesla.jpg" },
  { n: "03", t: "Lakkorrigering", d: "Swirls og vaskeriper slipes vekk i flere trinn. Lakken blir bedre enn ny.", img: "/img/bilder-nettside.jpg" },
  { n: "04", t: "Interiør & skinn", d: "Rens, conditioner og UV-beskyttelse — bilen kjennes fersk ut igjen.", img: "/img/work-4423.jpg" },
];

const GALLERY = ["/img/ferrari.jpg", "/img/brabus.png", "/img/tesla.jpg", "/img/bmw.jpg", "/img/brabus1.jpg"];

export default function Atelier() {
  return (
    <div className={`${serif.className} min-h-screen text-[#1c1a17]`} style={{ background: "#f3efe7" }}>
      {/* Nav */}
      <nav className="absolute top-0 inset-x-0 z-40 px-6 md:px-10 py-7">
        <div className="max-w-[1400px] mx-auto flex items-center justify-between">
          <span className="text-lg tracking-[0.05em]" style={{ fontWeight: 500 }}>
            SH&nbsp;Bilpleie <span className="italic font-light text-[#9a7b4f]">·&nbsp;Atelier</span>
          </span>
          <div className="hidden md:flex items-center gap-10 text-sm" style={{ fontFamily: "system-ui" }}>
            <a href="#tjenester" className="hover:text-[#9a7b4f] transition-colors">Tjenester</a>
            <a href="#galleri" className="hover:text-[#9a7b4f] transition-colors">Galleri</a>
            <a href="tel:+4791534263" className="px-5 py-2.5 bg-[#1c1a17] text-[#f3efe7] hover:bg-[#9a7b4f] transition-colors text-xs tracking-[0.2em] uppercase" style={{ fontFamily: "system-ui" }}>
              Bestill time
            </a>
          </div>
        </div>
      </nav>

      {/* Hero — editorial split */}
      <section className="max-w-[1400px] mx-auto px-6 md:px-10 pt-36 md:pt-44 pb-20 grid md:grid-cols-2 gap-12 md:gap-16 items-center">
        <div>
          <Reveal>
            <p className="text-xs tracking-[0.4em] uppercase text-[#9a7b4f] mb-8" style={{ fontFamily: "system-ui" }}>
              Bilpleie · Vesterålen
            </p>
            <h1 className="leading-[0.95]" style={{ fontSize: "clamp(3rem, 7vw, 6.5rem)", fontWeight: 300 }}>
              Bilen din,<br /><span className="italic">gjenskapt.</span>
            </h1>
            <p className="mt-9 text-lg leading-relaxed max-w-md text-[#5a5249]" style={{ fontFamily: "system-ui" }}>
              Polering, keramisk coating og interiør på et nivå Vesterålen ikke har sett før.
              Håndverk i hver detalj — fra hverdagsbil til drømmebil.
            </p>
            <div className="mt-11 flex flex-wrap gap-4 items-center" style={{ fontFamily: "system-ui" }}>
              <a href="tel:+4791534263" className="px-8 py-4 bg-[#1c1a17] text-[#f3efe7] hover:bg-[#9a7b4f] transition-colors text-sm tracking-[0.15em] uppercase">
                Ring 915 34 263
              </a>
              <a href="#tjenester" className="text-sm tracking-[0.15em] uppercase border-b border-[#1c1a17]/30 pb-1 hover:border-[#9a7b4f] hover:text-[#9a7b4f] transition-colors">
                Se tjenester
              </a>
            </div>
          </Reveal>
        </div>
        <Reveal delay={150}>
          <div className="relative">
            <Parallax speed={0.06} className="relative aspect-[4/5] overflow-hidden shadow-[0_40px_80px_-30px_rgba(0,0,0,0.35)]">
              <div className="relative w-full h-[112%] -top-[6%]">
                <Image src="/img/ferrari.jpg" alt="Detaljert bil hos SH Bilpleie" fill priority sizes="50vw" className="object-cover" />
              </div>
            </Parallax>
            <div className="absolute -bottom-5 -left-5 bg-[#f3efe7] px-6 py-4 shadow-lg hidden md:block">
              <p className="text-3xl" style={{ fontWeight: 400 }}>2 400<span className="text-[#9a7b4f]">+</span></p>
              <p className="text-[11px] tracking-[0.25em] uppercase text-[#5a5249]" style={{ fontFamily: "system-ui" }}>biler gjennom</p>
            </div>
          </div>
        </Reveal>
      </section>

      {/* Marque line */}
      <section className="border-y border-[#1c1a17]/12 py-7">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 flex flex-wrap items-center justify-center gap-x-10 gap-y-3 text-sm tracking-[0.25em] uppercase text-[#8a7f70]" style={{ fontFamily: "system-ui" }}>
          {["Ferrari", "Brabus", "Tesla", "BMW M", "Mercedes AMG", "Porsche", "Audi"].map((b) => (
            <span key={b}>{b}</span>
          ))}
        </div>
      </section>

      {/* Tjenester — editorial list */}
      <section id="tjenester" className="max-w-[1400px] mx-auto px-6 md:px-10 py-24 md:py-32">
        <Reveal className="mb-16 max-w-2xl">
          <p className="text-xs tracking-[0.4em] uppercase text-[#9a7b4f] mb-5" style={{ fontFamily: "system-ui" }}>Tjenester</p>
          <h2 style={{ fontSize: "clamp(2rem, 4.5vw, 3.5rem)", fontWeight: 300 }}>Det vi gjør — med hånd og øye.</h2>
        </Reveal>
        <div className="grid md:grid-cols-2 gap-x-16 gap-y-20">
          {SERVICES.map((s, i) => (
            <Reveal key={s.n} delay={(i % 2) * 120}>
              <article className="group">
                <div className="relative aspect-[16/10] overflow-hidden mb-7">
                  <Image src={s.img} alt={s.t} fill sizes="50vw" className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105" />
                </div>
                <div className="flex items-baseline gap-5">
                  <span className="text-[#9a7b4f] text-lg" style={{ fontWeight: 400 }}>{s.n}</span>
                  <div>
                    <h3 className="text-2xl mb-2" style={{ fontWeight: 400 }}>{s.t}</h3>
                    <p className="text-[#5a5249] leading-relaxed max-w-md" style={{ fontFamily: "system-ui" }}>{s.d}</p>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Dark editorial moment */}
      <section className="relative h-[70vh] overflow-hidden bg-[#1c1a17]">
        <Parallax speed={0.12} className="absolute inset-x-0 -top-[10%] h-[120%]">
          <div className="relative w-full h-full opacity-70">
            <Image src="/img/brabus1.jpg" alt="Detaljering hos SH Bilpleie" fill sizes="100vw" className="object-cover object-center" />
          </div>
        </Parallax>
        <div className="absolute inset-0 bg-gradient-to-t from-[#1c1a17] via-[#1c1a17]/40 to-[#1c1a17]/60" />
        <div className="relative h-full max-w-[1400px] mx-auto px-6 md:px-10 flex items-center">
          <Reveal>
            <p className="text-xs tracking-[0.4em] uppercase text-[#c9a877] mb-6" style={{ fontFamily: "system-ui" }}>Filosofien</p>
            <h2 className="text-[#f3efe7] max-w-3xl" style={{ fontSize: "clamp(2rem, 6vw, 5rem)", fontWeight: 300, lineHeight: 1.02 }}>
              Detaljer du ikke ser, <span className="italic text-[#c9a877]">men kjenner.</span>
            </h2>
          </Reveal>
        </div>
      </section>

      {/* Galleri */}
      <section id="galleri" className="max-w-[1400px] mx-auto px-6 md:px-10 py-24 md:py-32">
        <Reveal className="mb-14 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <h2 style={{ fontSize: "clamp(2rem, 4.5vw, 3.5rem)", fontWeight: 300 }}>Noen av bilene<br />som har vært innom.</h2>
          <p className="max-w-sm text-[#5a5249] leading-relaxed" style={{ fontFamily: "system-ui" }}>Fra familiebiler til exotic clientele. Et utvalg fra løftet.</p>
        </Reveal>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
          {GALLERY.map((src, i) => (
            <Reveal key={i} delay={(i % 3) * 90}>
              <div className="relative aspect-[4/5] overflow-hidden group">
                <Image src={src} alt="Bil etter detailing hos SH Bilpleie" fill sizes="20vw" className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-110" />
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Kontakt */}
      <section id="kontakt" className="bg-[#1c1a17] text-[#f3efe7] py-24 md:py-32 px-6 md:px-10">
        <div className="max-w-[1400px] mx-auto grid md:grid-cols-2 gap-16 items-center">
          <Reveal>
            <p className="text-xs tracking-[0.4em] uppercase text-[#c9a877] mb-6" style={{ fontFamily: "system-ui" }}>Bestilling</p>
            <h2 style={{ fontSize: "clamp(2rem, 5vw, 4rem)", fontWeight: 300, lineHeight: 1.04 }}>
              Skal bilen din<br /><span className="italic text-[#c9a877]">få nytt liv?</span>
            </h2>
            <p className="mt-8 text-lg leading-relaxed text-[#cfc6b8] max-w-md" style={{ fontFamily: "system-ui" }}>
              Ring for en uforpliktende prat. Vi tar en titt på bilen først — så får du et tydelig tilbud før vi setter i gang.
            </p>
            <div className="mt-10 space-y-4" style={{ fontFamily: "system-ui" }}>
              <a href="tel:+4791534263" className="block text-3xl md:text-4xl tracking-tight hover:text-[#c9a877] transition-colors">915 34 263</a>
              <p className="text-[#cfc6b8]">Sortland · Vesterålen · Man–lør etter avtale</p>
              <p className="text-[#cfc6b8] break-all">Shbilpleievesteraalen@gmail.com</p>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div className="relative aspect-[4/5] overflow-hidden">
              <Image src="/img/brabus.png" alt="Brabus hos SH Bilpleie" fill sizes="50vw" className="object-cover" />
            </div>
          </Reveal>
        </div>
      </section>

      <footer className="bg-[#f3efe7] py-12 px-6 text-center" style={{ fontFamily: "system-ui" }}>
        <Image src="/img/logo.png" alt="SH Bilpleie" width={200} height={60} className="h-11 w-auto mx-auto mb-5 opacity-80" style={{ filter: "grayscale(1) brightness(0.4)" }} />
        <p className="text-sm tracking-[0.2em] uppercase text-[#8a7f70]">SH Bilpleie og Service Halvorsen · Vesterålen</p>
      </footer>

      <a href="tel:+4791534263" className="md:hidden fixed bottom-0 inset-x-0 z-50 bg-[#1c1a17] text-[#f3efe7] flex items-center justify-center gap-3 py-4 text-sm tracking-[0.2em] uppercase" style={{ fontFamily: "system-ui" }}>
        Ring · 915 34 263
      </a>
    </div>
  );
}
