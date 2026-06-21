import Image from "next/image";
import Hero from "./components/Hero";
import Parallax from "./components/Parallax";
import Reveal from "./components/Reveal";
import StickyServices from "./components/StickyServices";
import ContactForm from "./components/ContactForm";

const MARQUEE_BRANDS = [
  "FERRARI", "BRABUS", "TESLA", "BMW M", "MERCEDES AMG", "PORSCHE", "AUDI", "LAND ROVER", "VOLVO", "VOLKSWAGEN",
];

const SERVICES = [
  { num: "01 — Polering", title: "Polering", desc: "RUPES Bigfoot på riktig pute og polish. Fjerner riper, holografi og oksidasjon til lakken speiler igjen.", img: "/img/work-0735.jpg" },
  { num: "02 — Coating", title: "Keramisk coating", desc: "Et flytende keramisk lag påføres lakken og herder til en hard, vannavstøtende barriere. Beskytter mot UV, vegsalt og fugleskitt, gjør bilen langt lettere å holde ren — og varer i flere år.", img: "/img/tesla.jpg" },
  { num: "03 — Korrigering", title: "Lakkorrigering", desc: "Swirls, vaskeriper og minor scratches slipes vekk i flere trinn. For deg som vil ha lakken bedre enn ny.", img: "/img/bilder-nettside.jpg" },
  { num: "04 — Interiør", title: "Interiør & skinn", desc: "Seter, tepper, dashbord og himling. Rens, conditioner og UV-beskyttelse — bilen lukter og ser fersk ut igjen.", img: "/img/work-4423.jpg" },
];

const EXTRA = [
  { icon: "ozon", title: "Ozonbehandling", desc: "Fjerner røyk-, dyre-, fukt- og matlukt på molekylært nivå — bilen kjennes helt fersk igjen. Perfekt før salg eller etter et uhell." },
  { icon: "folie", title: "Foliemontering", desc: "Dekorfolie, striper og logoer monteres med presisjon — helt uten luftbobler eller skjeve kanter." },
  { icon: "maskin", title: "Maskinutleie", desc: "Lei tekstilrensere og ozongeneratorer av oss og gjør jobben selv — med samme proff-utstyr som vi bruker." },
];

function ServiceIcon({ type }: { type: string }) {
  const p = {
    width: 30, height: 30, viewBox: "0 0 24 24", fill: "none",
    stroke: "currentColor", strokeWidth: 1.6,
    strokeLinecap: "round" as const, strokeLinejoin: "round" as const,
  };
  if (type === "ozon")
    return (
      <svg {...p}><circle cx="6.5" cy="9" r="2.4" /><circle cx="17.5" cy="7.5" r="2.4" /><circle cx="12" cy="17.5" r="2.4" /><path d="M8.5 10.2 11 15.1M8.8 8.2 15.2 7.2M15.7 9.3 13 15.2" /></svg>
    );
  if (type === "folie")
    return (
      <svg {...p}><path d="M7 3h7l4 4v14H7z" /><path d="M14 3v4h4" /><path d="M9.8 12.5l1.8 1.8L15 11" /></svg>
    );
  return (
    <svg {...p}><rect x="3.5" y="7.5" width="12" height="11" rx="1.5" /><circle cx="9.5" cy="13" r="2.6" /><path d="M15.5 10.5h4v6h-4" /></svg>
  );
}

const GALLERY = [
  "/img/ferrari.jpg",
  "/img/brabus.png",
  "/img/tesla.jpg",
  "/img/bmw.jpg",
  "/img/brabus1.jpg",
];

const JSONLD = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "AutoWash"],
  name: "SH Bilpleie og Service Halvorsen",
  description: "Profesjonell bilpleie, polering og keramisk coating i Vesterålen.",
  image: "https://shbilpleie.no/img/ferrari.jpg",
  url: "https://shbilpleie.no",
  telephone: "+4791534263",
  email: "Shbilpleievesteraalen@gmail.com",
  priceRange: "$$",
  address: { "@type": "PostalAddress", addressLocality: "Sortland", postalCode: "8400", addressRegion: "Nordland", addressCountry: "NO" },
  geo: { "@type": "GeoCoordinates", latitude: 68.6966, longitude: 15.4117 },
  areaServed: { "@type": "AdministrativeArea", name: "Vesterålen" },
  sameAs: ["https://www.facebook.com/p/SH-Service-100083445484335/"],
};

export default function Home() {
  return (
    <div className="min-h-screen bg-stone-950 text-stone-100 pb-16 md:pb-0">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(JSONLD) }} />

      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-40 px-6 py-5 backdrop-blur-md bg-stone-950/30">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <a href="#" aria-label="SH Bilpleie — til toppen" className="flex items-center">
            <Image src="/img/logo.png" alt="SH Bilpleie" width={160} height={48} priority className="h-9 md:h-10 w-auto" />
          </a>
          <div className="hidden md:flex items-center gap-10 text-sm">
            <a href="#tjenester" className="hover:text-brand-light transition-colors uppercase tracking-widest text-xs">Tjenester</a>
            <a href="#biler" className="hover:text-brand-light transition-colors uppercase tracking-widest text-xs">Bilene</a>
            <a href="#kontakt" className="hover:text-brand-light transition-colors uppercase tracking-widest text-xs">Kontakt</a>
            <a href="tel:+4791534263" className="px-5 py-2.5 bg-brand text-white hover:bg-brand-light transition-colors uppercase tracking-widest text-xs font-bold">Bestill time</a>
          </div>
        </div>
      </nav>

      <main>
        <Hero />

        {/* Marquee */}
        <section className="relative bg-brand text-white py-6 overflow-hidden border-y-2 border-[#173a86]">
          <div className="flex items-center gap-12 whitespace-nowrap marquee-track">
            {[...MARQUEE_BRANDS, ...MARQUEE_BRANDS, ...MARQUEE_BRANDS].map((b, i) => (
              <span key={i} className="inline-flex items-center gap-12 text-2xl md:text-3xl font-bold tracking-[0.15em] uppercase">
                {b}<span className="text-white/50 text-base">●</span>
              </span>
            ))}
          </div>
          <style>{`.marquee-track{animation:marquee 38s linear infinite}@keyframes marquee{from{transform:translateX(0)}to{transform:translateX(-33.333%)}}@media (prefers-reduced-motion:reduce){.marquee-track{animation:none}}`}</style>
        </section>

        {/* Statement */}
        <section className="py-32 md:py-44 px-6 bg-stone-950">
          <div className="max-w-5xl mx-auto">
            <Reveal>
              <p className="font-mono text-[11px] uppercase tracking-[0.4em] text-stone-500 mb-8">— Hvem vi er</p>
              <h2 className="font-bold leading-[1.04] text-white" style={{ fontSize: "clamp(2rem, 6vw, 4.5rem)", letterSpacing: "-0.03em" }}>
                I Vesterålen er det få som tar bilpleie helt seriøst.{" "}
                <span className="text-stone-600">Vi gjør det — ned til hver pore i lakken.</span>
              </h2>
            </Reveal>
          </div>
        </section>

        {/* Parallax interstitial 1 */}
        <section className="relative h-[82vh] overflow-hidden bg-stone-950">
          <Parallax speed={0.1} className="absolute inset-x-0 -top-[8%] h-[116%]">
            <div className="relative w-full h-full">
              <Image src="/img/ferrari.jpg" alt="Ferrari hos SH Bilpleie" fill sizes="100vw" className="object-cover object-[center_42%]" />
            </div>
          </Parallax>
          <div className="absolute inset-0 bg-gradient-to-r from-stone-950/85 via-stone-950/45 to-stone-950/70" />
          <div className="relative h-full max-w-7xl mx-auto px-6 flex items-center">
            <Reveal>
              <p className="font-mono text-[11px] uppercase tracking-[0.4em] text-brand-light mb-5">— Filosofien</p>
              <h2 className="font-bold text-white" style={{ fontSize: "clamp(2.5rem, 8vw, 6.5rem)", letterSpacing: "-0.04em", lineHeight: 0.92 }}>
                Detaljert til<br /><span className="italic font-light text-stone-300">perfeksjon.</span>
              </h2>
            </Reveal>
          </div>
        </section>

        {/* Tjenester — sticky scroll */}
        <section id="tjenester" className="px-6 bg-stone-950">
          <div className="max-w-6xl mx-auto pt-24 md:pt-28">
            <Reveal className="mb-4 md:mb-0">
              <p className="font-mono text-[11px] uppercase tracking-[0.4em] text-stone-500 mb-4">— Tjenester</p>
              <h2 className="font-bold leading-[1.02] text-white max-w-3xl mb-10" style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", letterSpacing: "-0.025em" }}>
                Fra hverdagsbilen til <em className="italic font-light text-stone-400">superbilen</em>.
              </h2>
            </Reveal>
            <StickyServices items={SERVICES} />
          </div>

          {/* Flere tjenester — given proper room */}
          <div className="max-w-6xl mx-auto pb-28 pt-20 md:pt-28">
            <Reveal className="mb-12 max-w-2xl">
              <p className="font-mono text-[11px] uppercase tracking-[0.4em] text-brand-light mb-4">— Også hos oss</p>
              <h2 className="font-bold leading-[1.04] text-white" style={{ fontSize: "clamp(1.85rem, 4vw, 3rem)", letterSpacing: "-0.025em" }}>
                Mer enn lakk.
              </h2>
              <p className="text-stone-400 mt-5 text-lg leading-relaxed">
                Tre tjenester mange ikke vet vi tilbyr — men som mange trenger.
              </p>
            </Reveal>
            <div className="grid md:grid-cols-3 gap-5">
              {EXTRA.map((e, i) => (
                <Reveal key={e.title} delay={i * 110}>
                  <article className="h-full bg-stone-900/50 border border-stone-800 hover:border-brand hover:bg-stone-900 transition-colors p-8 md:p-10 flex flex-col">
                    <div className="text-brand-light mb-7"><ServiceIcon type={e.icon} /></div>
                    <h3 className="text-xl font-bold text-white mb-3">{e.title}</h3>
                    <p className="text-stone-400 leading-relaxed">{e.desc}</p>
                  </article>
                </Reveal>
              ))}
            </div>
            <p className="text-sm text-stone-500 mt-10 max-w-xl">
              Pris avtales etter befaring. Ring eller send melding — vi gir et tydelig tilbud før vi tar i bilen.
            </p>
          </div>
        </section>

        {/* Parallax interstitial 2 */}
        <section className="relative h-[80vh] overflow-hidden bg-stone-950">
          <Parallax speed={0.1} className="absolute inset-x-0 -top-[8%] h-[116%]">
            <div className="relative w-full h-full">
              <Image src="/img/brabus1.jpg" alt="Brabus G hos SH Bilpleie" fill sizes="100vw" className="object-cover object-center" />
            </div>
          </Parallax>
          <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/40 to-stone-950/70" />
          <div className="relative h-full max-w-7xl mx-auto px-6 flex items-end pb-20">
            <Reveal>
              <h2 className="font-bold text-white" style={{ fontSize: "clamp(2rem, 6vw, 4.5rem)", letterSpacing: "-0.03em", lineHeight: 0.96 }}>
                Beskyttelse<br /><span className="italic font-light text-stone-300">som varer i årevis.</span>
              </h2>
            </Reveal>
          </div>
        </section>

        {/* Biler */}
        <section id="biler" className="py-28 px-6 bg-stone-900 border-y border-stone-800">
          <div className="max-w-7xl mx-auto">
            <Reveal className="mb-14 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
              <div>
                <p className="font-mono text-[11px] uppercase tracking-[0.4em] text-stone-500 mb-4">— Referanser</p>
                <h2 className="font-bold leading-[1.02] text-white" style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", letterSpacing: "-0.025em" }}>
                  Noen av bilene<br />som har vært innom.
                </h2>
              </div>
              <p className="max-w-sm text-stone-400 leading-relaxed">
                Fra familiebiler til exotic clientele. Et utvalg av det som har stått på løftet.
              </p>
            </Reveal>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-1">
              {GALLERY.map((src, i) => (
                <Reveal key={i} delay={(i % 3) * 90}>
                  <article className="group relative aspect-[4/5] overflow-hidden bg-stone-800">
                    <Image src={src} alt="Bil etter detailing hos SH Bilpleie" fill sizes="(max-width:768px) 50vw, 20vw" className="object-cover group-hover:scale-110 transition-transform duration-[1200ms] ease-out" />
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Merker */}
        <section className="py-24 px-6 bg-stone-950">
          <div className="max-w-6xl mx-auto">
            <Reveal className="mb-10 text-center">
              <p className="font-mono text-[11px] uppercase tracking-[0.4em] text-stone-500 mb-4">— Verktøy &amp; sertifiseringer</p>
              <h2 className="font-bold leading-tight text-white" style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)", letterSpacing: "-0.025em" }}>Hva vi jobber med.</h2>
            </Reveal>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              <div className="bg-white p-7 flex flex-col items-center justify-center">
                <div className="flex items-center gap-2 mb-2">
                  <span className="bg-brand text-white text-xs font-bold px-2 py-1 tracking-widest">RUPES</span>
                  <span className="text-stone-900 font-bold italic">Bigfoot</span>
                </div>
                <p className="text-[9px] uppercase tracking-[0.3em] text-stone-500">Polishing Systems</p>
              </div>
              <div className="bg-white p-7 flex flex-col items-center justify-center">
                <span className="text-stone-900 font-light italic text-2xl relative inline-block">
                  <span className="absolute -top-0.5 left-0 right-0 h-0.5 bg-cyan-700" />CarPro
                </span>
                <p className="text-[9px] uppercase tracking-[0.3em] text-stone-500 mt-2">Coating &amp; chemistry</p>
              </div>
              <div className="bg-stone-300 p-7 flex flex-col items-center justify-center">
                <span className="text-stone-900 font-bold text-xl">KochChemie<sup className="text-xs">®</sup></span>
                <p className="text-[9px] uppercase tracking-[0.3em] text-stone-600 mt-2">German engineered</p>
              </div>
              <div className="bg-white p-7 flex flex-col items-center justify-center">
                <div className="w-14 h-14 rounded-full border-2 border-teal-600 bg-teal-600 flex items-center justify-center mb-2">
                  <span className="text-white text-[10px] font-bold leading-tight text-center">OFFENTLIG<br />GODKJENT</span>
                </div>
                <p className="text-[9px] uppercase tracking-[0.3em] text-stone-700">Arbeidstilsynet</p>
              </div>
            </div>
          </div>
        </section>

        {/* Kontakt */}
        <section id="kontakt" className="py-28 px-6 bg-stone-950 border-t border-stone-800">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-14 items-start">
            <Reveal>
              <p className="font-mono text-[11px] uppercase tracking-[0.4em] text-stone-500 mb-4">— Bestilling</p>
              <h2 className="font-bold mb-6 leading-[1.05] text-white" style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", letterSpacing: "-0.025em" }}>
                Skal bilen din<br />få en oppgradering?
              </h2>
              <p className="text-lg text-stone-300 mb-10 leading-relaxed">
                Ring oss for en uforpliktende prat. Vi tar gjerne en titt på bilen først — så vi gir et tydelig tilbud før vi setter i gang.
              </p>
              <div className="space-y-6 border-t border-stone-800 pt-8">
                <a href="tel:+4791534263" className="flex items-baseline gap-6 group">
                  <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-stone-500 w-24 shrink-0">Telefon</span>
                  <span className="text-2xl md:text-3xl font-bold font-mono text-white group-hover:text-brand-light transition-colors">915 34 263</span>
                </a>
                <a href="mailto:Shbilpleievesteraalen@gmail.com" className="flex items-baseline gap-6 group">
                  <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-stone-500 w-24 shrink-0">E-post</span>
                  <span className="text-base md:text-lg text-white group-hover:text-brand-light transition-colors break-all">Shbilpleievesteraalen@gmail.com</span>
                </a>
                <div className="flex items-baseline gap-6">
                  <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-stone-500 w-24 shrink-0">Åpningstid</span>
                  <span className="text-lg text-white">Man–lør etter avtale</span>
                </div>
                <div className="flex items-baseline gap-6">
                  <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-stone-500 w-24 shrink-0">Sted</span>
                  <span className="text-lg text-white">Sortland · Vesterålen</span>
                </div>
                <a href="https://www.facebook.com/p/SH-Service-100083445484335/" target="_blank" rel="noopener noreferrer" className="flex items-baseline gap-6 group">
                  <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-stone-500 w-24 shrink-0">Sosialt</span>
                  <span className="text-base text-white underline underline-offset-4 group-hover:text-brand-light transition-colors">SH Service på Facebook</span>
                </a>
              </div>
            </Reveal>
            <Reveal delay={120}>
              <ContactForm />
            </Reveal>
            </div>
            <Reveal delay={80} className="overflow-hidden border border-stone-800 mt-14 h-[420px]">
              <iframe
                title="SH Bilpleie — Sortland"
                src="https://maps.google.com/maps?q=Sortland%208400&t=&z=12&ie=UTF8&iwloc=B&output=embed"
                width="100%" height="100%"
                style={{ border: 0, display: "block", minHeight: "420px", filter: "invert(0.92) hue-rotate(180deg)" }}
                loading="lazy" referrerPolicy="no-referrer-when-downgrade" allowFullScreen
              />
            </Reveal>
          </div>
        </section>
      </main>

      <footer className="bg-stone-950 text-stone-500 py-12 px-6 text-center text-xs border-t border-stone-800">
        <Image src="/img/logo.png" alt="SH Bilpleie" width={240} height={72} className="h-12 md:h-14 w-auto mx-auto mb-6 opacity-90" />
        <p className="uppercase tracking-[0.3em] mb-2 font-bold text-stone-300">SH Bilpleie og Service Halvorsen</p>
        <p className="font-mono">Sortland · Vesterålen · 915 34 263 · Shbilpleievesteraalen@gmail.com</p>
        <p className="mt-3 opacity-60">© {new Date().getFullYear()} SH Bilpleie og Service Halvorsen</p>
      </footer>

      <a href="tel:+4791534263" className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-brand text-white flex items-center justify-center gap-3 py-4 font-bold uppercase tracking-[0.2em] text-sm">
        Ring · <span className="font-mono tracking-normal">915 34 263</span>
      </a>
    </div>
  );
}
