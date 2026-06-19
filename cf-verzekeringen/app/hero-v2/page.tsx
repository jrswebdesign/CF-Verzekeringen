"use client";

import Image from "next/image";
import HeroShader from "../components/HeroShader";
import UspSection from "../components/UspSection";
import DienstenSectionDark from "../components/DienstenSectionDark";
import { useEffect, useState, useRef } from "react";

const PHOTOS = [
  "/bonaire-aerial.png",
  "/bonaire-hero-1 kopie.png",
  "/AlgemeneFotoFlamingos-min.png",
];

export default function HeroV2() {
  const [scrollY, setScrollY] = useState(0);
  const [mouse, setMouse] = useState({ x: 50, y: 50 });
  const [photoIndex, setPhotoIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setPhotoIndex((prev) => (prev + 1) % PHOTOS.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);
  const mouseRef = useRef({ x: 50, y: 50 });

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    let raf: number;
    const onMove = (e: MouseEvent) => {
      mouseRef.current = {
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      };
    };
    const tick = () => {
      setMouse((prev) => ({
        x: prev.x + (mouseRef.current.x - prev.x) * 0.06,
        y: prev.y + (mouseRef.current.y - prev.y) * 0.06,
      }));
      raf = requestAnimationFrame(tick);
    };
    window.addEventListener("mousemove", onMove, { passive: true });
    raf = requestAnimationFrame(tick);
    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  // Animatie over 1800px — rustig en smooth:
  // Phase 1 (0→60%): cirkel schaalt langzaam op naar volledig scherm
  // Phase 2 (60→100%): vervaagt geleidelijk weg
  const raw = Math.min(scrollY / 300, 1);
  // Ease-in-out curve voor vloeiendheid
  const eased = raw < 0.5 ? 2 * raw * raw : 1 - Math.pow(-2 * raw + 2, 2) / 2;
  const phase1 = Math.min(eased / 0.50, 1);
  const phase2 = Math.max((eased - 0.50) / 0.50, 0);

  const circleScale = 1 + phase1 * 2.5;
  const circleY = phase1 * 20;
  const circleOpacity = 1 - phase2;

  return (
    <main
      className="relative overflow-hidden"
      style={{ minHeight: "320vh", background: "#0a0908" }}
    >
      {/* ── Achtergrond: Bonaire foto geblurd ── */}
      <div
        aria-hidden="true"
        className="pointer-events-none"
        style={{ position: "fixed", inset: 0, zIndex: 0, overflow: "hidden" }}
      >
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
        {/* Donkere base overlay */}
        <div style={{ position: "absolute", inset: 0, background: "rgba(51,51,51,0.55)" }} />
        {/* Koraal glow linksboven */}
        <div style={{ position: "absolute", top: "-10%", left: "-5%", width: "55%", height: "60%", background: "radial-gradient(ellipse, rgba(237,105,75,0.30) 0%, transparent 70%)" }} />
        {/* Groen glow rechtsonder */}
        <div style={{ position: "absolute", bottom: "-10%", right: "-5%", width: "50%", height: "55%", background: "radial-gradient(ellipse, rgba(4,167,111,0.20) 0%, transparent 70%)" }} />
        {/* Centrale vignette om diepte te geven */}
        <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 80% 70% at 50% 45%, transparent 0%, rgba(51,51,51,0.45) 100%)" }} />
      </div>

      <HeroShader />

      {/* ── Mobiele hero — foto + v2 sfeer (zichtbaar op mobiel en tablet-portrait) ── */}
      <div
        className="hero-mobile-section sticky top-0"
        style={{ height: "100vh", zIndex: 10, display: "none" }}
      >
        {/* Slideshow foto */}
        <div style={{ position: "absolute", inset: 0, overflow: "hidden" }}>
          {PHOTOS.map((photo, i) => (
            <div
              key={photo}
              style={{
                position: "absolute",
                inset: 0,
                opacity: i === photoIndex ? 1 : 0,
                transition: "opacity 0.8s ease-in-out",
              }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={photo}
                alt=""
                style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 40%" }}
              />
            </div>
          ))}
        </div>
        {/* Overlays — zelfde sfeer als desktop */}
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(160deg, rgba(8,6,4,0.70) 0%, rgba(8,6,4,0.45) 50%, rgba(8,6,4,0.20) 100%)" }} />
        <div style={{ position: "absolute", top: 0, left: 0, width: "70%", height: "55%", background: "radial-gradient(ellipse, rgba(237,105,75,0.28) 0%, transparent 70%)" }} />
        <div style={{ position: "absolute", bottom: 0, right: 0, width: "55%", height: "45%", background: "radial-gradient(ellipse, rgba(4,167,111,0.18) 0%, transparent 70%)" }} />
        {/* Content */}
        <div style={{ position: "relative", zIndex: 2, height: "100%", display: "flex", flexDirection: "column", justifyContent: "flex-end", padding: "0 1.5rem 5rem" }}>
          <p style={{ fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: "#ED694B", marginBottom: "1rem" }}>
            Verzekeringen &amp; Hypotheken op Bonaire
          </p>
          <h1 style={{ fontSize: "clamp(2rem, 8vw, 3rem)", fontWeight: 800, lineHeight: 1.1, letterSpacing: "-0.03em", color: "white", marginBottom: "1.25rem" }}>
            Onafhankelijk advies voor verzekeringen en hypotheken op Bonaire
          </h1>
          <p style={{ fontSize: "1rem", lineHeight: 1.6, color: "rgba(255,255,255,0.80)", marginBottom: "2rem" }}>
            Persoonlijk advies, lokale kennis en begeleiding van begin tot eind.
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
            <a href="#contact" style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", gap: "0.5rem", padding: "1rem 1.5rem", borderRadius: "1rem", background: "#ED694B", color: "white", fontWeight: 600, fontSize: "0.9rem", textDecoration: "none" }}>
              Start Gesprek
              <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M17 7H7M17 7v10" /></svg>
            </a>
            <a href="#informatie" style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", padding: "1rem 1.5rem", borderRadius: "1rem", border: "1.5px solid rgba(255,255,255,0.35)", color: "rgba(255,255,255,0.85)", fontWeight: 500, fontSize: "0.9rem", textDecoration: "none" }}>
              Meer informatie
            </a>
          </div>
        </div>
      </div>

      {/* ── Sticky hero content — desktop + tablet-landscape ── */}
      <div
        className="hero-desktop-section sticky top-0 flex flex-col items-center justify-center"
        style={{ height: "100vh", paddingTop: 64, paddingBottom: 48, zIndex: 10 }}
      >
        {/* Staggered rij */}
        <div
          className="hero-stagger-row relative flex items-stretch justify-center w-full"
          style={{ height: "calc(100vh - 200px)" }}
        >
          {/* Links — Zekerheid bovenaan */}
          <div
            className="hero-text-left flex flex-col items-end justify-start"
            style={{ paddingTop: "5%", marginRight: "-32vw", zIndex: 20, position: "relative", minWidth: 0, transform: `scale(${1 + phase1 * 0.15})`, opacity: Math.max(0, 1 - phase2 * 2), transformOrigin: "right center" }}
          >
            <span
              aria-hidden="true"
              className="font-bold text-white leading-none select-none whitespace-nowrap"
              style={{ fontSize: "clamp(1.8rem, 3.5vw, 5rem)", letterSpacing: "-0.03em" }}
            >
              Verzekeringen en<br />Hypotheken
            </span>
          </div>

          {/* ── Bonaire eilandvorm met scroll-animatie ── */}

          {/* ── Bonaire eilandvorm liggend — SVG direct ── */}
          <div
            className="relative flex-shrink-0 self-center mt-64 bonaire-island"
            style={{
              width: "clamp(620px, 94vw, 1100px)",
              height: "clamp(620px, 94vw, 1100px)",
              zIndex: 5,
              transform: `scale(${circleScale}) translateY(${circleY}px) translate(${(mouse.x - 50) * 0.18}px, ${(mouse.y - 50) * 0.12}px)`,
              opacity: Math.max(0, circleOpacity),
              willChange: "transform, opacity",
              transformOrigin: "center center",
              filter: "drop-shadow(0 0 32px rgba(237,105,75,0.45))",
            }}
          >
            <div
              className="bonaire-island-mask"
              style={{
                width: "100%",
                height: "100%",
                position: "relative",
                maskImage: "url('/bonaire-hero.svg')",
                maskSize: "contain",
                maskRepeat: "no-repeat",
                maskPosition: "center",
                WebkitMaskImage: "url('/bonaire-hero.svg')",
                WebkitMaskSize: "contain",
                WebkitMaskRepeat: "no-repeat",
                WebkitMaskPosition: "center",
              }}
            >
              {PHOTOS.map((photo, i) => (
                <div
                  key={photo}
                  style={{
                    position: "absolute",
                    inset: 0,
                    opacity: i === photoIndex ? 1 : 0,
                    transition: "opacity 0.8s ease-in-out",
                    overflow: "hidden",
                  }}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={photo}
                    alt=""
                    className="bonaire-island-photo"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      objectPosition: `${48 + (mouse.x - 50) * 0.08}% ${48 + (mouse.y - 50) * 0.08}%`,
                    }}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Rechts — en hypotheken op Bonaire onderaan */}
          <div
            className="hero-text-right flex flex-col items-start justify-end"
            style={{ paddingBottom: "5%", marginLeft: "-18vw", zIndex: 20, position: "relative", minWidth: 0, transform: `scale(${1 + phase1 * 0.15})`, opacity: Math.max(0, 1 - phase2 * 2), transformOrigin: "left center" }}
          >
            <span
              aria-hidden="true"
              className="font-bold text-white leading-none select-none whitespace-nowrap"
              style={{ fontSize: "clamp(1.8rem, 3.5vw, 5rem)", letterSpacing: "-0.03em" }}
            >
              Op Bonaire
            </span>
          </div>
        </div>

        {/* CTA — desktop */}
        <div className="hero-cta flex items-center gap-8 mt-10" style={{ zIndex: 20, position: "relative" }}>
          <a
            href="#contact"
            className="group inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full text-sm font-semibold text-white transition-all duration-200 hover:bg-[#ED694B]"
            style={{ border: "1.5px solid rgba(237,105,75,0.75)" }}
          >
            Start Gesprek
            <svg className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M17 7H7M17 7v10" />
            </svg>
          </a>
          <a href="#informatie" className="text-sm font-semibold transition-colors duration-200 hover:text-white" style={{ color: "rgba(255,255,255,0.38)" }}>
            Meer informatie
          </a>
        </div>
      </div>
      {/* einde hero-desktop-section */}

      <h1 className="sr-only">Zekerheid Op Bonaire — Crooij &amp; Flipse</h1>

      <div className="relative" style={{ zIndex: 10 }}>
        <UspSection variant="dark" />
        <DienstenSectionDark />
      </div>
    </main>
  );
}
