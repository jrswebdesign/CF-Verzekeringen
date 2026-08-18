"use client";

import { useEffect, useRef, type ReactNode } from "react";
import Image from "next/image";

const kernfeiten = [
  {
    titel: "100% Onafhankelijk",
    toelichting: "Niet verbonden aan een verzekeraar of bank",
    icon: (
      // Keurmerk — badge met vinkje, staat voor 100% gegarandeerd onafhankelijk
      <svg viewBox="0 0 24 24" fill="none">
        <path
          d="M12 2.5l2.36 1.64 2.86-.36 1.02 2.7 2.53 1.4-.7 2.82.7 2.82-2.53 1.4-1.02 2.7-2.86-.36L12 21.5l-2.36-1.64-2.86.36-1.02-2.7-2.53-1.4.7-2.82-.7-2.82 2.53-1.4 1.02-2.7 2.86.36L12 2.5z"
          stroke="currentColor"
          strokeWidth={1.2}
          strokeLinejoin="round"
        />
        <path d="M8.8 12.3l2.1 2.1 4.3-4.6" stroke="currentColor" strokeWidth={1.3} strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    titel: "1 Vast aanspreekpunt",
    toelichting: "Van oriëntatie tot schade en nazorg",
    icon: (
      // Doelwit — één vast punt, geen wisselend contact
      <svg viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="8.75" stroke="currentColor" strokeWidth={1.2} />
        <circle cx="12" cy="12" r="5" stroke="currentColor" strokeWidth={1.2} />
        <circle cx="12" cy="12" r="1.3" fill="currentColor" />
      </svg>
    ),
  },
  {
    titel: "Bonaire Lokaal kantoor",
    toelichting: "Lokale kennis, lokale aanwezigheid",
    icon: null,
  },
];

export default function OverOnsSection({ cta }: { cta?: ReactNode }) {
  const layer1InnerRef = useRef<HTMLDivElement>(null);
  const layer1ScrimRef = useRef<HTMLDivElement>(null);
  const layer2Ref = useRef<HTMLDivElement>(null);
  const layer2InnerRef = useRef<HTMLDivElement>(null);
  const layer2ScrimRef = useRef<HTMLDivElement>(null);
  const layer2TextRef = useRef<HTMLDivElement>(null);
  const layer3Ref = useRef<HTMLDivElement>(null);
  const layer3ContentRef = useRef<HTMLDivElement>(null);
  const ctaWrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const closeGap = () => {
      if (!layer3Ref.current || !layer3ContentRef.current || !ctaWrapRef.current) return;
      const boxHeight = layer3Ref.current.getBoundingClientRect().height;
      const contentHeight = layer3ContentRef.current.getBoundingClientRect().height;
      const gap = Math.max(0, boxHeight - contentHeight);
      ctaWrapRef.current.style.marginTop = `-${gap}px`;
    };
    closeGap();
    window.addEventListener("resize", closeGap);
    return () => window.removeEventListener("resize", closeGap);
  }, []);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const isDesktop = () => window.matchMedia("(min-width: 1024px)").matches;
    if (reduced || !isDesktop()) return;

    let raf = 0;
    const update = () => {
      if (!isDesktop()) return;
      const vh = window.innerHeight;

      if (layer2Ref.current) {
        const top = layer2Ref.current.getBoundingClientRect().top;
        const p = Math.min(Math.max(1 - top / vh, 0), 1);
        if (layer1InnerRef.current) layer1InnerRef.current.style.transform = `scale(${1 - p * 0.06})`;
        if (layer1ScrimRef.current) layer1ScrimRef.current.style.opacity = String(p * 0.4);
        if (layer2TextRef.current) {
          const enter = Math.min(Math.max(p / 0.7, 0), 1);
          layer2TextRef.current.style.opacity = String(enter);
          layer2TextRef.current.style.transform = `translateY(${(1 - enter) * 28}px) scale(${0.94 + enter * 0.06})`;
        }
      }

      if (layer3Ref.current) {
        const top = layer3Ref.current.getBoundingClientRect().top;
        const p = Math.min(Math.max(1 - top / vh, 0), 1);
        if (layer2TextRef.current) {
          layer2TextRef.current.style.transform = `translateY(0px) scale(${1 - p * 0.06})`;
          layer2TextRef.current.style.opacity = String(1 - p * 0.6);
        }
        if (layer2ScrimRef.current) layer2ScrimRef.current.style.opacity = String(p * 0.4);
      }

      raf = requestAnimationFrame(update);
    };
    raf = requestAnimationFrame(update);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <section style={{ position: "relative" }}>

      {/* ── Laag 1: Introductietekst — tweekoloms met afbeelding ── */}
      <div
        className="lg:sticky lg:top-0 flex items-center lg:overflow-hidden min-h-0 lg:min-h-screen"
        style={{ background: "#ffffff", zIndex: 1 }}
      >
        <div ref={layer1InnerRef} className="w-full" style={{ transformOrigin: "center top", willChange: "transform" }}>
          <div className="max-w-[1200px] mx-auto px-6 py-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

              {/* Tekst */}
              <div>
                <p
                  className="text-xs font-bold tracking-[0.2em] uppercase mb-4"
                  style={{ color: "#ED694B" }}
                >
                  Over CF
                </p>
                <h2
                  className="text-3xl lg:text-4xl font-bold tracking-tight leading-tight mb-6"
                  style={{ color: "#1A1A1A" }}
                >
                  Wij geven je advies op maat
                </h2>
                <div className="space-y-4 mb-8">
                  <p className="text-base leading-relaxed" style={{ color: "#555555" }}>
                    CF begint elk traject met luisteren. Pas als we weten wat voor u belangrijk is, vergelijken we over alle aanbieders heen, zonder daarbij aan één verzekeraar of bank gebonden te zijn. Zo krijgt u advies dat echt bij uw situatie past, en begeleiden we u van het eerste gesprek tot lang daarna.
                  </p>
                  <p className="text-base leading-relaxed" style={{ color: "#555555" }}>
                    Verzekeringen en hypotheken bekijken we altijd in samenhang. Wie zijn hypotheek via CF regelt, zorgt daarmee meteen dat zijn verzekeringen daarop zijn afgestemd. Dat is de meerwaarde van een totaaltraject in plaats van losse producten.
                  </p>
                  <p className="text-base leading-relaxed" style={{ color: "#555555" }}>
                    Al jaren het vertrouwde adres voor verzekeringen en hypotheken op Bonaire.
                  </p>
                </div>
                <a
                  href="/over-ons"
                  className="inline-flex items-center gap-2 text-sm font-semibold group"
                  style={{ color: "#ED694B" }}
                >
                  Meer over ons
                  <svg
                    className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1"
                    fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>

              {/* Foto */}
              <div className="relative overflow-hidden rounded-2xl" style={{ aspectRatio: "4/3" }}>
                <Image
                  src="/hero-team.jpg"
                  alt="Het team van Crooij & Flipse op Bonaire"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>

            </div>
          </div>
        </div>

        {/* Verduistering terwijl laag 2 eroverheen schuift */}
        <div
          ref={layer1ScrimRef}
          aria-hidden="true"
          className="pointer-events-none"
          style={{ position: "absolute", inset: 0, background: "#000000", opacity: 0 }}
        />
      </div>

      {/* ── Laag 2: Quote — schuift over laag 1 heen ── */}
      <div
        ref={layer2Ref}
        className="lg:sticky lg:top-0 overflow-hidden"
        style={{ minHeight: "100vh", background: "#0a0908", zIndex: 2 }}
      >
        <div
          ref={layer2InnerRef}
          className="relative lg:absolute inset-0 w-full h-full flex items-center"
          style={{ transformOrigin: "center center", willChange: "transform" }}
        >
          <div aria-hidden="true" className="pointer-events-none" style={{ position: "absolute", inset: 0, zIndex: 0, overflow: "hidden" }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/bonaire-hero-1.png"
              alt=""
              style={{
                position: "absolute",
                inset: "-10%",
                width: "120%",
                height: "120%",
                objectFit: "cover",
                filter: "blur(48px) saturate(1.8) brightness(0.52)",
              }}
            />
            <div style={{ position: "absolute", inset: 0, background: "rgba(51,51,51,0.55)" }} />
            <div style={{ position: "absolute", top: "-10%", left: "-5%", width: "55%", height: "60%", background: "radial-gradient(ellipse, rgba(237,105,75,0.30) 0%, transparent 70%)" }} />
            <div style={{ position: "absolute", bottom: "-10%", right: "-5%", width: "50%", height: "55%", background: "radial-gradient(ellipse, rgba(4,167,111,0.20) 0%, transparent 70%)" }} />
            <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 80% 70% at 50% 45%, transparent 0%, rgba(51,51,51,0.45) 100%)" }} />
            <div
              aria-hidden="true"
              className="animate-glow-drift"
              style={{ position: "absolute", width: "60%", height: "60%", left: "20%", top: "15%", background: "radial-gradient(ellipse, rgba(237,105,75,0.28) 0%, transparent 70%)" }}
            />
          </div>
          <div
            ref={layer2TextRef}
            className="relative max-w-[900px] mx-auto px-6 text-center w-full"
            style={{ zIndex: 2, transformOrigin: "center center", willChange: "transform, opacity" }}
          >
            <p
              className="font-bold leading-tight"
              style={{
                fontSize: "clamp(1.5rem, 3.2vw, 2.5rem)",
                color: "#ffffff",
                letterSpacing: "-0.02em",
              }}
            >
              <span aria-hidden="true" style={{ color: "#ED694B" }}>&ldquo;</span>
              Alles begint met een gesprek. Zodat wij weten wat jij belangrijk vindt.
              <span aria-hidden="true" style={{ color: "#ED694B" }}>&rdquo;</span>
            </p>
          </div>
        </div>

        {/* Verduistering terwijl laag 3 eroverheen schuift */}
        <div
          ref={layer2ScrimRef}
          aria-hidden="true"
          className="pointer-events-none"
          style={{ position: "absolute", inset: 0, background: "#000000", opacity: 0, zIndex: 3 }}
        />
      </div>

      {/* ── Laag 3: Drie kernfeiten — schuift over laag 2 heen ── */}
      <div
        ref={layer3Ref}
        className="lg:sticky lg:top-0"
        style={{ minHeight: "100vh", background: "#ffffff", zIndex: 3 }}
      >
        <div ref={layer3ContentRef} className="max-w-[1200px] mx-auto px-6 py-20 lg:py-28">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 sm:gap-8">
            {kernfeiten.map((feit) => (
              <div key={feit.titel} className="flex flex-col items-center text-center">
                <div className="flex items-center justify-center mb-6" style={{ color: "#ED694B" }}>
                  {feit.icon ? (
                    <span className="w-16 h-16">{feit.icon}</span>
                  ) : (
                    <span
                      aria-hidden="true"
                      style={{
                        display: "block",
                        width: 64,
                        height: 64,
                        backgroundColor: "#ED694B",
                        maskImage: "url('/bonaire-hero.svg')",
                        WebkitMaskImage: "url('/bonaire-hero.svg')",
                        maskSize: "contain",
                        WebkitMaskSize: "contain",
                        maskRepeat: "no-repeat",
                        WebkitMaskRepeat: "no-repeat",
                        maskPosition: "center",
                        WebkitMaskPosition: "center",
                      }}
                    />
                  )}
                </div>
                <p className="font-semibold mb-2" style={{ fontSize: "1.05rem", color: "#1A1A1A" }}>
                  {feit.titel}
                </p>
                <p className="text-sm leading-relaxed" style={{ color: "#666666" }}>
                  {feit.toelichting}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {cta && (
        <div ref={ctaWrapRef} className="relative" style={{ zIndex: 4 }}>
          {cta}
        </div>
      )}

    </section>
  );
}
