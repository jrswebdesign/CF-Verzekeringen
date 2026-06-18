"use client";

import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import { usePathname } from "next/navigation";

// ── Data ────────────────────────────────────────────────────────────────────

const PARTICULIER = [
  {
    cat: "Huis & woning",
    items: [
      "Opstal- / Woonverzekering",
      "Inboedelverzekering",
      "Kostbaarhedenverzekering",
      "Aansprakelijkheidsverzekering",
      "Bouwverzekering",
    ],
  },
  {
    cat: "Verkeer & vervoer",
    items: [
      "Autoverzekering",
      "Motorverzekering",
      "Scooterverzekering",
      "Ongevallen inzittendenverzekering",
    ],
  },
  {
    cat: "Reizen & vrije tijd",
    items: [
      "Reisverzekering",
      "Annuleringsverzekering",
      "Pleziersvaartuigverzekering",
    ],
  },
  {
    cat: "Leven & gezondheid",
    items: [
      "Ongevallenverzekering",
      "Uitvaartverzekering",
      "Ziektekostenverzekering",
      "Nabestaandenverzekering",
    ],
  },
];

const ZAKELIJK = [
  {
    cat: "Pand & bezittingen",
    items: ["Bedrijfsgebouw verzekering", "Bouwverzekering", "Inventaris"],
  },
  {
    cat: "Schade & kosten",
    items: [
      "Bedrijfsschadeverzekering",
      "Extra kostenverzekering",
      "Transportverzekering",
    ],
  },
  {
    cat: "Aansprakelijkheid",
    items: [
      "Beroepsaansprakelijkheidsverzekering",
      "Bestuurdersaansprakelijkheidsverzekering",
    ],
  },
  {
    cat: "Personeel & inkomen",
    items: [
      "Arbeidsongeschiktheidsverzekering",
      "Zakenreisverzekering",
      "Overlijdensrisicoverzekering",
      "Compagnonsverzekering",
      "Collectieve ongevallenverzekering",
    ],
  },
];

const HYPOTHEKEN = [
  {
    label: "Onafhankelijk hypotheekadvies",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
  },
  {
    label: "Hypotheek berekenen",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    label: "Verhuurhypotheek",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
      </svg>
    ),
  },
  {
    label: "Tweede huis op Bonaire",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
];

// ── Component ────────────────────────────────────────────────────────────────

export default function Header() {
  const [open, setOpen] = useState<"verzekeringen" | "hypotheken" | null>(null);
  const [tab, setTab] = useState<"particulier" | "zakelijk">("particulier");
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    const threshold = pathname === "/hero-v2" ? window.innerHeight * 0.9 : 40;
    const onScroll = () => setScrolled(window.scrollY > threshold);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (headerRef.current && !headerRef.current.contains(e.target as Node)) {
        setOpen(null);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const toggle = (item: "verzekeringen" | "hypotheken") => {
    setOpen((prev) => (prev === item ? null : item));
  };

  const cols = tab === "particulier" ? PARTICULIER : ZAKELIJK;
  const ctaTitle = tab === "particulier" ? "Start jouw aanvraag" : "Risicovrij ondernemen";
  const ctaBody =
    tab === "particulier"
      ? "Bekijk jouw mogelijkheden en ontvang in een paar stappen een persoonlijk advies op maat."
      : "Vergelijk de opties voor jouw bedrijf en ontvang een passend advies voor jouw situatie op Bonaire.";

  // Transparant wanneer nog niet gescrolld én geen dropdown open
  const isTransparent = !scrolled && !open;

  const navItemClass = (active?: boolean) =>
    `flex items-center gap-1 px-3 py-2 text-sm font-medium rounded-lg transition-colors cursor-pointer ${
      active
        ? isTransparent
          ? "text-white bg-white/15"
          : "text-[#ED694B] bg-[#fff3f0]"
        : isTransparent
        ? "text-white/90 hover:text-white hover:bg-white/10"
        : "text-[#333] hover:text-[#ED694B] hover:bg-[#fff3f0]"
    }`;

  return (
    <header ref={headerRef} className="fixed top-0 left-0 right-0 z-50">

      {/* ── Topbalk — verborgen bij transparant ── */}
      <div
        style={{
          backgroundColor: "#ED694B",
          maxHeight: isTransparent ? "0" : "48px",
          overflow: "hidden",
          transition: "max-height 0.35s ease, opacity 0.35s ease",
          opacity: isTransparent ? 0 : 1,
        }}
      >
        <div className="max-w-[1200px] mx-auto px-6 h-9 flex items-center justify-between">
          <div className="flex items-center gap-5">
            <a href="tel:+59971710 10" className="flex items-center gap-1.5 text-white text-xs font-medium hover:opacity-80 transition-opacity">
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              +599 717 10 10
            </a>
            <span className="w-px h-3 bg-white/30" />
            <a href="/schade-melden" className="flex items-center gap-1.5 text-white text-xs font-medium hover:opacity-80 transition-opacity">
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
              Schade melden
            </a>
          </div>
          <div className="flex items-center gap-2">
            <a href="/hypotheek-berekenen" className="flex items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded-full bg-white/15 text-white hover:bg-white/25 transition-colors">
              <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
              </svg>
              Hypotheek berekenen
            </a>
            <a href="/verzekering-aanvragen" className="flex items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded-full bg-white text-[#ED694B] hover:bg-white/90 transition-colors">
              <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Verzekering aanvragen
            </a>
          </div>
        </div>
      </div>

      {/* ── Hoofdmenu ── */}
      <div
        style={{
          background: isTransparent ? "transparent" : "white",
          boxShadow: !isTransparent && (scrolled || open) ? "0 2px 20px rgba(0,0,0,0.10)" : "none",
          transition: "background 0.35s ease, box-shadow 0.35s ease",
          backdropFilter: isTransparent ? "none" : "none",
        }}
      >
        <div className="max-w-[1200px] mx-auto px-6 h-16 flex items-center justify-between gap-8">

          {/* Logo — wisselt tussen donker en licht */}
          <a href="/" className="flex-shrink-0">
            <Image
              src="/logo-dark.png"
              style={{
                filter: isTransparent ? "brightness(0) invert(1)" : "none",
                transition: "filter 0.3s ease",
              }}
              alt="Crooij & Flipse"
              width={180}
              height={40}
              className="h-9 w-auto object-contain transition-opacity duration-300"
              priority
            />
          </a>

          {/* Nav — desktop */}
          <nav className="hidden lg:flex items-center gap-1">
            <button onClick={() => toggle("verzekeringen")} className={navItemClass(open === "verzekeringen")}>
              Verzekeringen
              <svg className={`w-3.5 h-3.5 transition-transform duration-200 ${open === "verzekeringen" ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            <div className="relative">
              <button onClick={() => toggle("hypotheken")} className={navItemClass(open === "hypotheken")}>
                Hypotheken
                <svg className={`w-3.5 h-3.5 transition-transform duration-200 ${open === "hypotheken" ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {open === "hypotheken" && (
                <div className="absolute top-full left-0 mt-2 w-72 bg-white rounded-2xl shadow-[0_8px_40px_rgba(0,0,0,0.12)] border border-gray-100 py-2 z-50">
                  {HYPOTHEKEN.map((item) => (
                    <a key={item.label} href="#" className="flex items-center gap-3 px-4 py-3 text-sm text-[#333] hover:text-[#ED694B] hover:bg-[#fff8f6] transition-colors">
                      <span className="flex-shrink-0 text-[#ED694B]">{item.icon}</span>
                      {item.label}
                    </a>
                  ))}
                </div>
              )}
            </div>

            {["VVE", "Over ons", "Kenniscentrum", "Contact"].map((item) => (
              <a key={item} href={`/${item.toLowerCase().replace(" ", "-")}`} className={navItemClass()}>
                {item}
              </a>
            ))}
          </nav>

          {/* Mobile hamburger */}
          <button onClick={() => setMobileOpen(!mobileOpen)} className="lg:hidden flex flex-col gap-1.5 p-2 cursor-pointer" aria-label="Menu openen">
            <span className={`block w-5 h-0.5 transition-all duration-200 ${isTransparent ? "bg-white" : "bg-[#333]"} ${mobileOpen ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block w-5 h-0.5 transition-all duration-200 ${isTransparent ? "bg-white" : "bg-[#333]"} ${mobileOpen ? "opacity-0" : ""}`} />
            <span className={`block w-5 h-0.5 transition-all duration-200 ${isTransparent ? "bg-white" : "bg-[#333]"} ${mobileOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </button>
        </div>
      </div>

      {/* ── Verzekeringen megamenu ── */}
      {open === "verzekeringen" && (
        <div className="bg-white border-t border-gray-100 shadow-[0_8px_40px_rgba(0,0,0,0.10)]">
          <div className="max-w-[1200px] mx-auto px-6 py-6 flex gap-0">
            <div className="w-36 flex-shrink-0 border-r border-gray-100 pr-4 flex flex-col gap-1">
              {(["particulier", "zakelijk"] as const).map((t) => (
                <button key={t} onClick={() => setTab(t)} className={`flex items-center justify-between w-full px-3 py-2.5 rounded-lg text-sm font-semibold text-left cursor-pointer transition-colors ${tab === t ? "bg-[#fff3f0] text-[#ED694B]" : "text-[#555] hover:bg-gray-50"}`}>
                  <span className="flex items-center gap-2">
                    {t === "particulier" ? (
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}><path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
                    ) : (
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}><path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
                    )}
                    {t.charAt(0).toUpperCase() + t.slice(1)}
                  </span>
                  <svg className="w-3.5 h-3.5 opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
                </button>
              ))}
            </div>
            <div className="flex-1 px-6 grid grid-cols-2 gap-x-8 gap-y-5">
              {cols.map((group) => (
                <div key={group.cat}>
                  <p className="text-[10px] font-bold tracking-[0.12em] uppercase mb-2" style={{ color: "#ED694B" }}>{group.cat}</p>
                  <ul className="space-y-1">
                    {group.items.map((item) => (
                      <li key={item}>
                        <a href="#" className="flex items-center gap-2 text-sm text-[#444] hover:text-[#ED694B] transition-colors group">
                          <span className="w-1 h-1 rounded-full flex-shrink-0 bg-[#ED694B] opacity-40 group-hover:opacity-100 transition-opacity" />
                          {item}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <div className="w-64 flex-shrink-0 rounded-2xl p-6 flex flex-col justify-between" style={{ background: "linear-gradient(135deg, #ED694B 0%, #d4522f 100%)" }}>
              <div>
                <p className="text-[10px] font-bold tracking-[0.12em] uppercase text-white/70 mb-2">{tab === "particulier" ? "Voor particulieren" : "Voor ondernemers"}</p>
                <p className="text-base font-bold text-white leading-tight mb-2">{ctaTitle}</p>
                <p className="text-xs text-white/80 leading-relaxed">{ctaBody}</p>
              </div>
              <a href="/verzekering-aanvragen" className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold bg-white text-[#ED694B] px-3 py-2 rounded-lg hover:bg-white/90 transition-colors">
                Aanvragen
                <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </a>
            </div>
          </div>
        </div>
      )}

      {/* ── Mobile menu ── */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 shadow-lg max-h-[80vh] overflow-y-auto">
          <div className="px-4 py-4 flex flex-col gap-1">
            {["Verzekeringen", "Hypotheken", "VVE", "Over ons", "Kenniscentrum", "Contact"].map((item) => (
              <a key={item} href="#" className="px-4 py-3 text-sm font-medium text-[#333] rounded-xl hover:bg-[#fff3f0] hover:text-[#ED694B] transition-colors">{item}</a>
            ))}
            <div className="mt-3 pt-3 border-t border-gray-100 flex flex-col gap-2">
              <a href="/hypotheek-berekenen" className="text-center px-4 py-3 rounded-xl text-sm font-semibold border-2 border-[#ED694B] text-[#ED694B]">Hypotheek berekenen</a>
              <a href="/verzekering-aanvragen" className="text-center px-4 py-3 rounded-xl text-sm font-semibold bg-[#ED694B] text-white">Verzekering aanvragen</a>
            </div>
          </div>
        </div>
      )}

    </header>
  );
}
