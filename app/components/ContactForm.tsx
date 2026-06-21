"use client";

import { useState } from "react";

const field =
  "w-full bg-stone-900 border border-stone-800 text-white placeholder-stone-500 px-4 py-3 text-sm outline-none focus:border-brand transition-colors";

export default function ContactForm() {
  const [sent, setSent] = useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const navn = String(f.get("navn") || "");
    const tlf = String(f.get("telefon") || "");
    const epost = String(f.get("epost") || "");
    const bil = String(f.get("bil") || "");
    const melding = String(f.get("melding") || "");
    const subject = `Forespørsel fra ${navn || "kunde"}`;
    const body =
      `Navn: ${navn}\nTelefon: ${tlf}\nE-post: ${epost}\nBil: ${bil}\n\n${melding}`;
    window.location.href = `mailto:Shbilpleievesteraalen@gmail.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
    setSent(true);
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="navn" className="block font-mono text-[10px] uppercase tracking-[0.3em] text-stone-500 mb-2">Navn *</label>
          <input id="navn" name="navn" required autoComplete="name" className={field} placeholder="Ola Nordmann" />
        </div>
        <div>
          <label htmlFor="telefon" className="block font-mono text-[10px] uppercase tracking-[0.3em] text-stone-500 mb-2">Telefon *</label>
          <input id="telefon" name="telefon" required inputMode="tel" autoComplete="tel" className={field} placeholder="912 34 567" />
        </div>
      </div>
      <div>
        <label htmlFor="epost" className="block font-mono text-[10px] uppercase tracking-[0.3em] text-stone-500 mb-2">E-post</label>
        <input id="epost" name="epost" type="email" autoComplete="email" className={field} placeholder="deg@epost.no" />
      </div>
      <div>
        <label htmlFor="bil" className="block font-mono text-[10px] uppercase tracking-[0.3em] text-stone-500 mb-2">Bil (modell / årsmodell)</label>
        <input id="bil" name="bil" className={field} placeholder="Tesla Model Y, 2023" />
      </div>
      <div>
        <label htmlFor="melding" className="block font-mono text-[10px] uppercase tracking-[0.3em] text-stone-500 mb-2">Hva ønsker du gjort?</label>
        <textarea id="melding" name="melding" rows={4} className={field} placeholder="Polering + keramisk coating, ev. interiør …" />
      </div>
      <button
        type="submit"
        className="w-full sm:w-auto px-8 py-4 bg-brand text-white font-bold uppercase tracking-[0.2em] text-xs hover:bg-brand-light transition-colors active:scale-[0.98]"
      >
        Send forespørsel
      </button>
      {sent && (
        <p className="text-sm text-stone-400" role="status">
          E-posten din er klargjort — trykk send i e-postprogrammet. Eller ring oss direkte på{" "}
          <a href="tel:+4791534263" className="text-brand-light underline underline-offset-2">915 34 263</a>.
        </p>
      )}
    </form>
  );
}
