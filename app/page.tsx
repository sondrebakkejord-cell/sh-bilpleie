const IMG = "https://impro.usercontent.one/appid/oneComWsb/domain/shbilpleie.no/media/shbilpleie.no/onewebmedia";

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
            <div className="text-[10px] uppercase tracking-[0.4em] text-stone-400 mt-0.5">og Service Halvorsen · Vesterålen</div>
          </div>
          <div className="hidden md:flex items-center gap-10 text-sm">
            <a href="#tjenester" className="hover:text-red-400 transition-colors uppercase tracking-widest text-xs">Tjenester</a>
            <a href="#galleri" className="hover:text-red-400 transition-colors uppercase tracking-widest text-xs">Galleri</a>
            <a href="#merker" className="hover:text-red-400 transition-colors uppercase tracking-widest text-xs">Merker</a>
            <a href="#kontakt" className="hover:text-red-400 transition-colors uppercase tracking-widest text-xs">Kontakt</a>
            <a href="tel:+4791534263" className="px-5 py-2.5 bg-red-600 text-white hover:bg-red-500 transition-colors uppercase tracking-widest text-xs font-bold">
              Bestill time
            </a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative h-screen min-h-[700px] flex items-end overflow-hidden bg-stone-950">
        <img
          src={`${IMG}/IMG_0327.jpg`}
          alt="SH Bilpleie — bilpleie og keramisk coating i Vesterålen"
          className="absolute inset-0 w-full h-full object-cover opacity-60"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/60 to-stone-950/40" />
        <div className="relative max-w-7xl mx-auto px-6 pb-28 w-full">
          <div className="inline-flex items-center gap-3 mb-8">
            <span className="h-px w-12 bg-red-500" />
            <p className="text-[11px] uppercase tracking-[0.4em] text-red-400 font-semibold">Vesterålen · Sortland</p>
          </div>
          <h1 className="font-bold mb-8 max-w-4xl text-white" style={{ fontSize: "clamp(2.75rem, 7vw, 5.5rem)", letterSpacing: "-0.025em", lineHeight: 1 }}>
            Førsteklasses bilpleie<br />
            <span className="text-red-500">til hver eneste bil.</span>
          </h1>
          <p className="text-lg md:text-xl text-stone-300 max-w-xl mb-10 leading-relaxed">
            Polering, keramisk coating, lakk-korrigering og interiørrens.
            Vi jobber med kvalitetsprodukter fra RUPES, CarPro og Koch-Chemie.
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href="tel:+4791534263"
              className="inline-block px-8 py-4 bg-red-600 text-white hover:bg-red-500 transition-colors uppercase tracking-[0.25em] text-xs font-bold"
            >
              Ring 915 34 263
            </a>
            <a
              href="#tjenester"
              className="inline-block px-8 py-4 border border-stone-50/30 text-stone-50 hover:bg-stone-50 hover:text-stone-950 transition-colors uppercase tracking-[0.25em] text-xs font-semibold"
            >
              Se tjenester
            </a>
          </div>
        </div>
      </section>

      {/* Velkomst */}
      <section className="py-28 px-6 bg-stone-950">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs uppercase tracking-[0.4em] text-red-500 mb-6 font-semibold">— Om oss —</p>
          <h2 className="font-bold mb-10 leading-[1.02]" style={{ fontSize: "clamp(2rem, 4.5vw, 3.25rem)", letterSpacing: "-0.025em" }}>
            Vi er lidenskapelig opptatt av <span className="text-red-500">bilpleie</span>.
          </h2>
          <div className="space-y-5 text-lg text-stone-300 leading-relaxed">
            <p>
              SH Bilpleie og Service Halvorsen leverer profesjonell bilpleie i Vesterålen.
              Vi tar oss av alt fra rask polering til fullt detailing-program med keramisk
              coating som varer.
            </p>
            <p>
              Vi bruker kvalitetsprodukter og maskiner som RUPES Bigfoot, CarPro og
              Koch-Chemie — utstyr som proff-detailere bruker over hele verden. Det er
              forskjellen mellom å vaske en bil, og å pleie den.
            </p>
          </div>
        </div>
      </section>

      {/* Tjenester */}
      <section id="tjenester" className="py-24 px-6 bg-stone-900 border-t border-stone-800">
        <div className="max-w-6xl mx-auto">
          <div className="mb-14 max-w-2xl">
            <p className="text-xs uppercase tracking-[0.4em] text-red-500 mb-4 font-semibold">— Tjenester —</p>
            <h2 className="font-bold leading-tight" style={{ fontSize: "clamp(2rem, 4vw, 3rem)", letterSpacing: "-0.025em" }}>
              Det vi gjør med bilen din.
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-stone-800">
            {[
              { num: "01", title: "Polering", desc: "Fjerner riper og oksidasjon. Beskytter lakken og bringer glansen tilbake." },
              { num: "02", title: "Keramisk coating", desc: "Langtidsbeskyttelse av lakken, dypere glans, og enklere vask i lang tid framover." },
              { num: "03", title: "Lakk­korrigering", desc: "Vi fjerner riper, swirls og mindre skader. For deg som vil ha lakken som ny." },
              { num: "04", title: "Interiørrens", desc: "Seter, gulvtepper og dashbord rengjøres grundig — bilen lukter og ser fersk ut igjen." },
              { num: "05", title: "Skinn­behandling", desc: "Rens, conditioner og beskyttelse av skinninteriør. Forhindrer sprekker og falming." },
              { num: "06", title: "Ozon­behandling", desc: "Fjerner lukt fra røyk, mat, dyr og fukt — miljøvennlig og effektivt." },
              { num: "07", title: "Folie­montering", desc: "Montering av dekorfolie, logoer og wraps med presisjon og uten luftbobler." },
              { num: "08", title: "Maskinutleie", desc: "Vi leier ut tekstilrensere og ozongeneratorer for de som vil gjøre jobben selv." },
            ].map((s) => (
              <div key={s.num} className="bg-stone-900 p-7 hover:bg-stone-950 transition-colors">
                <p className="text-xs font-mono text-red-500 mb-3 tracking-widest">S/{s.num}</p>
                <h3 className="text-lg font-bold mb-2 text-white">{s.title}</h3>
                <p className="text-sm text-stone-400 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>

          <p className="text-center mt-12 text-sm text-stone-500 max-w-xl mx-auto">
            Pris avtales etter befaring — ring oss eller send melding for et tilbud på din bil.
          </p>
        </div>
      </section>

      {/* Galleri */}
      <section id="galleri" className="py-24 px-6 bg-stone-950">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12 max-w-2xl">
            <p className="text-xs uppercase tracking-[0.4em] text-red-500 mb-4 font-semibold">— Vårt arbeid —</p>
            <h2 className="font-bold leading-tight" style={{ fontSize: "clamp(2rem, 4vw, 3rem)", letterSpacing: "-0.025em" }}>
              Noen av bilene som har vært innom.
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
            {[
              { src: `${IMG}/brabus.png`, alt: "Brabus etter bilpleie hos SH Bilpleie" },
              { src: `${IMG}/tesla.jpeg`, alt: "Tesla etter detailing" },
              { src: `${IMG}/bmw.jpeg`, alt: "BMW polert og coatet hos SH Bilpleie" },
              { src: `${IMG}/brabus1.jpeg`, alt: "Brabus detailing-jobb" },
              { src: `${IMG}/polish.jpeg`, alt: "Polering av lakk" },
              { src: `${IMG}/IMG_4423.jpeg`, alt: "Detailing-prosjekt fra SH Bilpleie" },
            ].map((img, i) => (
              <div key={i} className="aspect-[4/3] overflow-hidden bg-stone-800 group">
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Merker / Sertifiseringer */}
      <section id="merker" className="py-24 px-6 bg-stone-900 border-y border-stone-800">
        <div className="max-w-6xl mx-auto">
          <div className="mb-14 text-center">
            <p className="text-xs uppercase tracking-[0.4em] text-red-500 mb-4 font-semibold">— Vi jobber med —</p>
            <h2 className="font-bold leading-tight text-white" style={{ fontSize: "clamp(2rem, 4vw, 3rem)", letterSpacing: "-0.025em" }}>
              Profesjonelle merker.
            </h2>
            <p className="text-stone-400 mt-4 max-w-xl mx-auto">
              Vi bruker bare utstyr og produkter som proff-detailere stoler på over hele verden.
            </p>
          </div>

          {/* Brand cards — styled to mimic logo cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
            {/* RUPES */}
            <div className="bg-white p-6 flex flex-col items-center justify-center rounded-sm">
              <div className="flex items-center gap-2 mb-1">
                <span className="bg-red-600 text-white text-xs font-bold px-2 py-1 tracking-widest">RUPES</span>
                <span className="text-stone-900 font-bold italic">Bigfoot</span>
              </div>
              <p className="text-[9px] uppercase tracking-widest text-stone-500 mt-1">Polishing Systems</p>
            </div>
            {/* CarPro */}
            <div className="bg-white p-6 flex flex-col items-center justify-center rounded-sm">
              <span className="text-stone-900 font-light italic text-2xl relative inline-block">
                <span className="absolute -top-0.5 left-0 right-0 h-0.5 bg-cyan-700" />
                CarPro
              </span>
              <p className="text-[9px] uppercase tracking-widest text-stone-400 mt-2">Detailing Solutions</p>
            </div>
            {/* KochChemie */}
            <div className="bg-stone-300 p-6 flex flex-col items-center justify-center rounded-sm">
              <span className="text-stone-900 font-bold text-xl">KochChemie<sup className="text-xs">®</sup></span>
              <p className="text-[9px] uppercase tracking-widest text-stone-600 mt-2">German engineered</p>
            </div>
            {/* Arbeidstilsynet */}
            <div className="bg-white p-6 flex flex-col items-center justify-center rounded-sm">
              <div className="w-16 h-16 rounded-full border-2 border-teal-600 bg-teal-600 flex items-center justify-center mb-1">
                <span className="text-white text-xs font-bold leading-tight text-center">
                  OFFENTLIG<br />GODKJENT
                </span>
              </div>
              <p className="text-[9px] uppercase tracking-widest text-stone-700 mt-1">Arbeidstilsynet</p>
            </div>
          </div>

          <p className="text-center text-xs text-stone-500 italic">
            Sertifisert bilpleievirksomhet — godkjent av Arbeidstilsynet etter forskrift om bilpleie.
          </p>
        </div>
      </section>

      {/* Kontakt */}
      <section id="kontakt" className="py-28 px-6 bg-stone-950">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-14">
            <div>
              <p className="text-xs uppercase tracking-[0.4em] text-red-500 mb-4 font-semibold">— Kontakt —</p>
              <h2 className="font-bold mb-6 leading-tight text-white" style={{ fontSize: "clamp(2rem, 4vw, 3rem)", letterSpacing: "-0.025em" }}>
                Få tilbud på bilen din.
              </h2>
              <p className="text-lg text-stone-300 mb-10 leading-relaxed">
                Ring oss for en uforpliktende prat om hva som passer din bil — vi tar
                gjerne en titt og gir et tilbud.
              </p>

              <div className="space-y-5">
                <div>
                  <p className="text-xs uppercase tracking-widest text-stone-500 mb-2 font-semibold">Telefon</p>
                  <a href="tel:+4791534263" className="block text-2xl font-bold text-white hover:text-red-500 transition-colors">
                    915 34 263
                  </a>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-stone-500 mb-2 font-semibold">E-post</p>
                  <a href="mailto:Shbilpleievesteraalen@gmail.com" className="block text-lg text-white hover:text-red-500 transition-colors break-all">
                    Shbilpleievesteraalen@gmail.com
                  </a>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-stone-500 mb-2 font-semibold">Sted</p>
                  <p className="text-lg text-white">Vesterålen · 8400 Sortland-området</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-stone-500 mb-2 font-semibold">Sosialt</p>
                  <a href="https://www.facebook.com/p/SH-Service-100083445484335/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-red-500 transition-colors underline underline-offset-4">
                    SH Service på Facebook
                  </a>
                </div>
              </div>
            </div>

            <div className="overflow-hidden rounded-lg border border-stone-800 h-full min-h-[480px]">
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
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24 px-6 bg-red-600 text-white overflow-hidden">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-bold mb-6" style={{ fontSize: "clamp(2rem, 4.5vw, 3.25rem)", letterSpacing: "-0.025em", lineHeight: 1.05 }}>
            Klar for å gi bilen<br />litt kjærlighet?
          </h2>
          <p className="text-lg text-white/90 mb-10 leading-relaxed">
            Ring eller send en melding, så finner vi den løsningen som passer best.
          </p>
          <a
            href="tel:+4791534263"
            className="inline-block px-10 py-4 bg-white text-red-700 hover:bg-stone-100 transition-colors uppercase tracking-[0.25em] text-xs font-bold"
          >
            Ring 915 34 263
          </a>
        </div>
      </section>

      <footer className="bg-stone-950 text-stone-500 py-10 px-6 text-center text-xs border-t border-stone-800">
        <p className="uppercase tracking-widest mb-2 font-semibold text-stone-300">SH Bilpleie og Service Halvorsen</p>
        <p>8400 Sortland-området · 915 34 263 · Shbilpleievesteraalen@gmail.com</p>
        <p className="mt-3 opacity-60">© {new Date().getFullYear()} SH Bilpleie og Service Halvorsen</p>
      </footer>
    </div>
  );
}
