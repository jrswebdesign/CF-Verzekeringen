"use client";

import { useState } from "react";
import Image from "next/image";

const linkGroups = [
  {
    title: "Verzekeringen",
    links: ["Particulier", "Zakelijk", "Verzekering aanvragen", "Schade melden"],
  },
  {
    title: "Hypotheken",
    links: ["Hypotheekadvies", "Hypotheek berekenen", "Verhuurhypotheek", "Tweede huis op Bonaire"],
  },
  {
    title: "Bedrijf",
    links: ["Over ons", "Kenniscentrum", "VVE", "Contact"],
  },
];

export default function FooterV3() {
  const [email, setEmail] = useState("");
  const [naam, setNaam] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <footer style={{ background: "#0a0908" }}>

      {/* ── Nieuwsbrief — geïntegreerd bovenin de footer ── */}
      <div style={{ borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
        <div className="max-w-[1200px] mx-auto px-6 py-16 lg:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

            {/* Tekst */}
            <div>
              <h3 className="text-2xl lg:text-3xl font-bold tracking-tight leading-tight mb-3 text-white">
                Blijf op de hoogte
              </h3>
              <p className="text-sm leading-relaxed max-w-md" style={{ color: "rgba(255,255,255,0.55)" }}>
                Praktische tips en nieuws over verzekeringen en hypotheken op Bonaire, rechtstreeks in je inbox. Geen spam, wel relevant.
              </p>
            </div>

            {/* Formulier */}
            <div>
              {submitted ? (
                <p className="text-sm font-semibold" style={{ color: "#ED694B" }}>
                  Bedankt voor je inschrijving. Check binnenkort je inbox.
                </p>
              ) : (
                <form onSubmit={onSubmit} className="flex flex-col sm:flex-row gap-3">
                  <input
                    type="text"
                    required
                    value={naam}
                    onChange={(e) => setNaam(e.target.value)}
                    placeholder="Naam"
                    className="flex-1 px-4 py-3.5 rounded-full text-sm text-white placeholder-white/35 outline-none transition-colors duration-200 focus:border-[#ED694B]"
                    style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.14)" }}
                  />
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="E-mailadres"
                    className="flex-1 px-4 py-3.5 rounded-full text-sm text-white placeholder-white/35 outline-none transition-colors duration-200 focus:border-[#ED694B]"
                    style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.14)" }}
                  />
                  <button
                    type="submit"
                    className="flex-shrink-0 inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 cursor-pointer"
                    style={{ background: "#ED694B", boxShadow: "0 8px 24px rgba(237,105,75,0.30)" }}
                  >
                    Inschrijven
                  </button>
                </form>
              )}
            </div>

          </div>
        </div>
      </div>

      {/* ── Hoofdfooter — logo, navigatie, contact ── */}
      <div className="max-w-[1200px] mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-[1.4fr_1fr_1fr_1fr] gap-12 lg:gap-8">

          {/* Merk + contact */}
          <div>
            <div className="mb-5">
              <Image
                src="/logo-dark.png"
                alt="Crooij & Flipse"
                width={180}
                height={40}
                className="h-8 w-auto object-contain"
                style={{ filter: "brightness(0) invert(1)" }}
              />
            </div>
            <p className="text-sm leading-relaxed mb-6 max-w-xs" style={{ color: "rgba(255,255,255,0.45)" }}>
              Onafhankelijk advies voor verzekeringen en hypotheken op Bonaire, persoonlijk, lokaal en van begin tot eind.
            </p>
            <div className="flex flex-col gap-2.5">
              <a href="tel:+59971710 10" className="inline-flex items-center gap-2.5 text-sm transition-colors duration-200 hover:text-white" style={{ color: "rgba(255,255,255,0.55)" }}>
                <svg className="w-4 h-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                +599 717 10 10
              </a>
              <a href="mailto:info@crooijflipse.com" className="inline-flex items-center gap-2.5 text-sm transition-colors duration-200 hover:text-white" style={{ color: "rgba(255,255,255,0.55)" }}>
                <svg className="w-4 h-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                info@crooijflipse.com
              </a>
              <span className="inline-flex items-center gap-2.5 text-sm" style={{ color: "rgba(255,255,255,0.55)" }}>
                <svg className="w-4 h-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a2 2 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                Kralendijk, Bonaire
              </span>
            </div>
          </div>

          {/* Linkkolommen */}
          {linkGroups.map((group) => (
            <div key={group.title}>
              <p className="text-xs font-bold tracking-[0.15em] uppercase mb-5" style={{ color: "rgba(255,255,255,0.35)" }}>
                {group.title}
              </p>
              <ul className="flex flex-col gap-3">
                {group.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-sm transition-colors duration-200 hover:text-white" style={{ color: "rgba(255,255,255,0.55)" }}>
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

        </div>
      </div>

      {/* ── Onderbalk ── */}
      <div style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}>
        <div className="max-w-[1200px] mx-auto px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs" style={{ color: "rgba(255,255,255,0.35)" }}>
            &copy; {new Date().getFullYear()} Crooij &amp; Flipse. Alle rechten voorbehouden.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-xs transition-colors duration-200 hover:text-white" style={{ color: "rgba(255,255,255,0.35)" }}>Privacybeleid</a>
            <a href="#" className="text-xs transition-colors duration-200 hover:text-white" style={{ color: "rgba(255,255,255,0.35)" }}>Algemene voorwaarden</a>
          </div>
        </div>
      </div>

    </footer>
  );
}
