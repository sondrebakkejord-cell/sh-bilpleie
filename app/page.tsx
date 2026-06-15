const IMG = "https://impro.usercontent.one/appid/oneComWsb/domain/shbilpleie.no/media/shbilpleie.no/onewebmedia";

const MARQUEE_BRANDS = [
  "FERRARI", "BRABUS", "TESLA", "BMW M", "MERCEDES AMG", "PORSCHE", "AUDI", "LAND ROVER", "VOLVO", "VOLKSWAGEN",
];

export default function Home() {
  return (
    <div className="min-h-screen bg-stone-950 text-stone-100">
      {/* Nav */}
      <nav className="absolute top-0 left-0 right-0 z-40 px-6 py-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div>
            <div className="text-stone-50 font-bold text-xl tracking-tight uppercase">
              SH <span className="text-red-500">Bilpleie</span>
            </div>
            <div className="text-[10px] uppercase tracking-[0.4em] text-stone-400 mt-0.5 font-mono">Vesterålen</div>
          </div>
          <div className="hidden md:flex items-center gap-10 text-sm">
            <a href="#protokoll" className="hover:text-red-400 transition-colors uppercase tracking-widest text-xs">Protokoll</a>
            <a href="#tjenester" className="hover:text-red-400 transition-colors uppercase tracking-widest text-xs">Tjenester</a>
            <a href="#biler" className="hover:text-red-400 transition-colors uppercase tracking-widest text-xs">Bilene</a>
            <a href="#kontakt" className="hover:text-red-400 transition-colors uppercase tracking-widest text-xs">Kontakt</a>
            <a href="tel:+4791534263" className="px-5 py-2.5 bg-red-600 text-white hover:bg-red-500 transition-colors uppercase tracking-widest text-xs font-bold">
              Bestill time
            </a>
          </div>
        </div>
      </nav>

      {/* Hero — editorial split feel */}
      <section className="relative min-h-screen flex items-end overflow-hidden bg-stone-950 pt-32 pb-12">
        <img
          src={`${IMG}/ff.jpeg`}
          alt="Rød Ferrari etter detailing hos SH Bilpleie i Vesterålen"
          className="absolute inset-0 w-full h-full object-cover object-right opacity-50 md:opacity-65"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-stone-950 via-stone-950/85 md:via-stone-950/30 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/40 to-transparent md:via-transparent" />

        <div className="relative max-w-7xl mx-auto px-6 w-full">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-8 font-mono text-[11px] uppercase tracking-[0.4em] text-stone-400">
              <span className="h-px w-10 bg-red-500" />
              <span>SH/01 · Bilpleie</span>
              <span className="text-stone-600">·</span>
              <span>Vesterålen</span>
            </div>
            <h1
              className="font-bold mb-8 text-white"
              style={{
                fontSize: "clamp(3rem, 9vw, 8rem)",
                letterSpacing: "-0.04em",
                lineHeight: 0.92,
              }}
            >
              Bilpleie.<br />
              <span className="italic font-light text-stone-300">Slik proffene gjør det.</span>
            </h1>
            <p className="text-lg md:text-xl text-stone-200 max-w-xl mb-10 leading-relaxed">
              Polering, coating, interiørrens, skinnbehandling og ozon. Vi tar bilen
              din — fra hverdagsbil til exotic — og leverer den slik den ble levert
              fra fabrikken.
            </p>
            <div className="flex flex-wrap gap-3 items-center">
              <a
                href="tel:+4791534263"
                className="inline-flex items-center gap-3 px-7 py-4 bg-red-600 text-white hover:bg-red-500 transition-colors font-bold"
              >
                <span className="text-xs uppercase tracking-[0.25em]">Ring</span>
                <span className="text-lg font-mono">915 34 263</span>
              </a>
              <a
                href="#protokoll"
                className="inline-block px-7 py-4 border border-stone-50/25 text-stone-50 hover:bg-stone-50 hover:text-stone-950 transition-colors uppercase tracking-[0.25em] text-xs font-semibold"
              >
                Se protokollen
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Marquee — featured marques (signature element) */}
      <section className="relative bg-red-600 text-white py-6 overflow-hidden border-y-2 border-red-700">
        <div
          className="flex items-center gap-12 whitespace-nowrap"
          style={{ animation: "marquee 35s linear infinite" }}
        >
          {[...MARQUEE_BRANDS, ...MARQUEE_BRANDS, ...MARQUEE_BRANDS].map((b, i) => (
            <span
              key={i}
              className="inline-flex items-center gap-12 text-2xl md:text-3xl font-bold tracking-[0.15em] uppercase"
            >
              {b}
              <span className="text-white/50 text-base">●</span>
            </span>
          ))}
        </div>
        <style>{`
          @keyframes marquee {
            from { transform: translateX(0); }
            to { transform: translateX(-33.333%); }
          }
        `}</style>
      </section>

      {/* Intro — sharp confident copy */}
      <section className="py-28 px-6 bg-stone-950">
        <div className="max-w-5xl mx-auto grid md:grid-cols-12 gap-12 items-start">
          <div className="md:col-span-3 md:sticky md:top-24">
            <p className="font-mono text-[11px] uppercase tracking-[0.4em] text-stone-400">SH/02</p>
            <p className="font-mono text-[11px] uppercase tracking-[0.4em] text-stone-600 mt-1">Hvem vi er</p>
          </div>
          <div className="md:col-span-9">
            <h2
              className="font-bold mb-10 leading-[1.02] text-white"
              style={{ fontSize: "clamp(2rem, 5vw, 3.75rem)", letterSpacing: "-0.025em" }}
            >
              I Vesterålen er det få som tar
              bilpleie helt seriøst.{" "}
              <span className="text-stone-500">Vi gjør det.</span>
            </h2>
            <div className="space-y-5 text-lg text-stone-300 leading-relaxed max-w-2xl">
              <p>
                SH Bilpleie er et profesjonelt verksted basert i Vesterålen. Vi tar oss av
                hele bilen — lakk, interiør, skinn og lukt — med utstyr og produkter
                proff-detailere bruker over hele verden.
              </p>
              <p>
                Fra full keramisk coating til en grundig interiør- eller ozonbehandling.
                Vi gjør jobben skikkelig, uansett om bilen er ny eller ti år gammel.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Protokoll — signature methodology section */}
      <section id="protokoll" className="py-24 px-6 bg-stone-900 border-t border-stone-800">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <p className="font-mono text-[11px] uppercase tracking-[0.4em] text-stone-400 mb-4">SH/03 · Metodikk</p>
              <h2
                className="font-bold leading-[1.02] text-white"
                style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", letterSpacing: "-0.025em" }}
              >
                Slik jobber vi<br />med en bil.
              </h2>
            </div>
            <p className="max-w-md text-stone-400 leading-relaxed">
              Et eksempel: full lakk-foredling med keramisk coating. Andre tjenester
              følger samme tilnærming — grundig inspeksjon, riktig produkt, ferdig
              jobb.
            </p>
          </div>

          <ol className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-stone-800">
            {[
              {
                n: "01",
                title: "Inspeksjon",
                desc: "Vi går over lakken med lys og måler dybden. Du får vite hva som er mulig — og hva som ikke er det.",
              },
              {
                n: "02",
                title: "Foamvask",
                desc: "pH-nøytral skum, to-bøtte-vask med microfiber. Vi fjerner all overflate-skitt før vi tar i lakken.",
              },
              {
                n: "03",
                title: "Dekontaminering",
                desc: "Tjære, jernspon og industrifallout fjernes med Iron-X og clay bar. Lakken må være helt ren før vi polerer.",
              },
              {
                n: "04",
                title: "Lakk­korrigering",
                desc: "RUPES Bigfoot 15 på riktig pute og polish. Vi fjerner riper, swirls og holografi — uten å redusere lakk-tykkelsen unødvendig.",
              },
              {
                n: "05",
                title: "Keramisk coating",
                desc: "CarPro CQuartz eller tilsvarende. Lakken får et flerårig beskyttende lag som gjør vask raskere og glansen dypere.",
              },
              {
                n: "06",
                title: "Overlevering",
                desc: "Ren bil, beskyttet lakk, og en pleieguide. Vi gir deg konkrete råd for å holde resultatet i månedene som kommer.",
              },
            ].map((step) => (
              <li key={step.n} className="bg-stone-900 p-8 relative">
                <span
                  className="block font-mono text-stone-700 mb-4 font-bold"
                  style={{ fontSize: "clamp(2.5rem, 4vw, 3.5rem)", letterSpacing: "-0.04em", lineHeight: 1 }}
                >
                  P/{step.n}
                </span>
                <h3 className="text-lg font-bold text-white mb-3">{step.title}</h3>
                <p className="text-sm text-stone-400 leading-relaxed">{step.desc}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Tjenester */}
      <section id="tjenester" className="py-24 px-6 bg-stone-950">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <p className="font-mono text-[11px] uppercase tracking-[0.4em] text-stone-400 mb-4">SH/04 · Tjenester</p>
            <h2
              className="font-bold leading-[1.02] text-white max-w-3xl"
              style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", letterSpacing: "-0.025em" }}
            >
              Det vi gjør — fra hverdagsbilen til <em className="italic font-light text-stone-300">superbilen</em>.
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-stone-800">
            {[
              { num: "01", title: "Polering", desc: "RUPES Bigfoot på riktig pute og polish. Fjerner riper, holografi og oksidasjon.", img: `${IMG}/IMG_0735.jpeg` },
              { num: "02", title: "Keramisk coating", desc: "CarPro CQuartz og tilsvarende. Beskyttelse som varer i flere år.", img: `${IMG}/coating.jpg` },
              { num: "03", title: "Lakk­korrigering", desc: "Fjerner swirls, vaskeriper og minor scratches. For deg som vil ha lakken som ny.", img: `${IMG}/Bilder%20nettside.jpeg` },
              { num: "04", title: "Interiørrens", desc: "Seter, tepper, dashbord og himling. Bilen lukter og ser fersk ut igjen.", img: `${IMG}/unsplash_xz4U-ecu8E0.jpg` },
              { num: "05", title: "Skinn­behandling", desc: "Rens, conditioner og UV-beskyttelse. Forhindrer sprekker og falming.", img: `${IMG}/unsplash_4Lh-4xE5_Js.jpg` },
              { num: "06", title: "Ozon­behandling", desc: "Fjerner lukt fra røyk, dyr, fukt og mat — på molekylær nivå.", img: `${IMG}/unsplash_KpSdMeuaHRg.jpg` },
              { num: "07", title: "Folie­montering", desc: "Dekorfolie og logoer monteres med presisjon — uten luftbobler eller skjevheter.", img: `${IMG}/unsplash_osAdNaRHxzo.jpg` },
              { num: "08", title: "Maskinutleie", desc: "Tekstilrensere og ozongeneratorer for de som vil gjøre jobben selv.", img: `${IMG}/unsplash_Iu6parQAO-U.jpg` },
            ].map((s) => (
              <article key={s.num} className="bg-stone-900 hover:bg-stone-950 transition-colors flex flex-col">
                <div className="aspect-[16/10] overflow-hidden bg-stone-800 relative">
                  <img
                    src={s.img}
                    alt={s.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <span className="absolute top-3 left-3 inline-flex items-center px-2 py-1 bg-stone-950/80 backdrop-blur-sm text-stone-300 text-[10px] uppercase tracking-[0.3em] font-bold font-mono">
                    T/{s.num}
                  </span>
                </div>
                <div className="p-6 flex-1">
                  <h3 className="text-base font-bold mb-2 text-white">{s.title}</h3>
                  <p className="text-sm text-stone-400 leading-relaxed">{s.desc}</p>
                </div>
              </article>
            ))}
          </div>

          <p className="text-sm text-stone-500 mt-10 max-w-xl">
            Pris avtales etter befaring. Ring eller send melding — vi gir et tydelig
            tilbud før vi tar i bilen.
          </p>
        </div>
      </section>

      {/* Biler — featured marques */}
      <section id="biler" className="py-24 px-6 bg-stone-900 border-y border-stone-800">
        <div className="max-w-7xl mx-auto">
          <div className="mb-14 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <p className="font-mono text-[11px] uppercase tracking-[0.4em] text-stone-400 mb-4">SH/05 · Referanser</p>
              <h2
                className="font-bold leading-[1.02] text-white"
                style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", letterSpacing: "-0.025em" }}
              >
                Noen av bilene<br />som har vært innom.
              </h2>
            </div>
            <p className="max-w-sm text-stone-400 leading-relaxed">
              Vi har behandlet alt fra familiebiler til exotic clientele. Et utvalg
              vises her.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-1">
            {[
              { src: `${IMG}/ff.jpeg`, marque: "Ferrari", model: "F430" },
              { src: `${IMG}/brabus.png`, marque: "Brabus", model: "Mercedes G" },
              { src: `${IMG}/tesla.jpeg`, marque: "Tesla", model: "Model S" },
              { src: `${IMG}/bmw.jpeg`, marque: "BMW", model: "M-serien" },
              { src: `${IMG}/brabus1.jpeg`, marque: "Brabus", model: "Spesialutgave" },
              { src: `${IMG}/IMG_4423.jpeg`, marque: "Detailing", model: "Levert" },
            ].map((c, i) => (
              <article key={i} className="group relative aspect-[4/5] overflow-hidden bg-stone-800">
                <img
                  src={c.src}
                  alt={`${c.marque} ${c.model} etter detailing hos SH Bilpleie`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <p className="font-mono text-[10px] text-stone-300 uppercase tracking-[0.3em] mb-1">{c.marque}</p>
                  <p className="text-white font-semibold text-sm">{c.model}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Merker — refined */}
      <section className="py-20 px-6 bg-stone-950">
        <div className="max-w-6xl mx-auto">
          <div className="mb-10 text-center">
            <p className="font-mono text-[11px] uppercase tracking-[0.4em] text-stone-400 mb-4">SH/06 · Verktøy &amp; sertifiseringer</p>
            <h2
              className="font-bold leading-tight text-white"
              style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)", letterSpacing: "-0.025em" }}
            >
              Hva vi jobber med.
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            <div className="bg-white p-7 flex flex-col items-center justify-center">
              <div className="flex items-center gap-2 mb-2">
                <span className="bg-red-600 text-white text-xs font-bold px-2 py-1 tracking-widest">RUPES</span>
                <span className="text-stone-900 font-bold italic">Bigfoot</span>
              </div>
              <p className="text-[9px] uppercase tracking-[0.3em] text-stone-500">Polishing Systems</p>
            </div>
            <div className="bg-white p-7 flex flex-col items-center justify-center">
              <span className="text-stone-900 font-light italic text-2xl relative inline-block">
                <span className="absolute -top-0.5 left-0 right-0 h-0.5 bg-cyan-700" />
                CarPro
              </span>
              <p className="text-[9px] uppercase tracking-[0.3em] text-stone-500 mt-2">Coating &amp; chemistry</p>
            </div>
            <div className="bg-stone-300 p-7 flex flex-col items-center justify-center">
              <span className="text-stone-900 font-bold text-xl">KochChemie<sup className="text-xs">®</sup></span>
              <p className="text-[9px] uppercase tracking-[0.3em] text-stone-600 mt-2">German engineered</p>
            </div>
            <div className="bg-white p-7 flex flex-col items-center justify-center">
              <div className="w-14 h-14 rounded-full border-2 border-teal-600 bg-teal-600 flex items-center justify-center mb-2">
                <span className="text-white text-[10px] font-bold leading-tight text-center">
                  OFFENTLIG<br />GODKJENT
                </span>
              </div>
              <p className="text-[9px] uppercase tracking-[0.3em] text-stone-700">Arbeidstilsynet</p>
            </div>
          </div>
        </div>
      </section>

      {/* Kontakt */}
      <section id="kontakt" className="py-28 px-6 bg-stone-950 border-t border-stone-800">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-14">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.4em] text-stone-400 mb-4">SH/07 · Bestilling</p>
            <h2
              className="font-bold mb-6 leading-[1.05] text-white"
              style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", letterSpacing: "-0.025em" }}
            >
              Skal bilen din<br />få en oppgradering?
            </h2>
            <p className="text-lg text-stone-300 mb-10 leading-relaxed">
              Ring oss for en uforpliktende prat. Vi tar gjerne en titt på bilen
              først — så vi gir et tydelig tilbud før vi setter i gang.
            </p>

            <div className="space-y-6 border-t border-stone-800 pt-8">
              <a href="tel:+4791534263" className="flex items-baseline gap-6 group">
                <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-stone-500 w-20 shrink-0">Telefon</span>
                <span className="text-2xl md:text-3xl font-bold font-mono text-white group-hover:text-red-500 transition-colors">915 34 263</span>
              </a>
              <a href="mailto:Shbilpleievesteraalen@gmail.com" className="flex items-baseline gap-6 group">
                <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-stone-500 w-20 shrink-0">E-post</span>
                <span className="text-base md:text-lg text-white group-hover:text-red-500 transition-colors break-all">Shbilpleievesteraalen@gmail.com</span>
              </a>
              <div className="flex items-baseline gap-6">
                <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-stone-500 w-20 shrink-0">Sted</span>
                <span className="text-lg text-white">8400 Sortland-området</span>
              </div>
              <a href="https://www.facebook.com/p/SH-Service-100083445484335/" target="_blank" rel="noopener noreferrer" className="flex items-baseline gap-6 group">
                <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-stone-500 w-20 shrink-0">Sosialt</span>
                <span className="text-base text-white underline underline-offset-4 group-hover:text-red-500 transition-colors">SH Service på Facebook</span>
              </a>
            </div>
          </div>

          <div className="overflow-hidden border border-stone-800 h-full min-h-[480px]">
            <iframe
              title="SH Bilpleie — Sortland-området"
              src="https://maps.google.com/maps?q=Sortland%208400&t=&z=12&ie=UTF8&iwloc=B&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0, display: "block", minHeight: "480px", filter: "invert(0.9) hue-rotate(180deg)" }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>
      </section>

      <footer className="bg-stone-950 text-stone-500 py-10 px-6 text-center text-xs border-t border-stone-800">
        <p className="uppercase tracking-[0.3em] mb-2 font-bold text-stone-300">SH Bilpleie og Service Halvorsen</p>
        <p className="font-mono">8400 Sortland-området · 915 34 263 · Shbilpleievesteraalen@gmail.com</p>
        <p className="mt-3 opacity-60">© {new Date().getFullYear()} SH Bilpleie og Service Halvorsen</p>
      </footer>
    </div>
  );
}
