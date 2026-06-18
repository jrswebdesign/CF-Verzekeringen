"use client";

import { useState, useRef, useEffect } from "react";

const diensten = [
  {
    num: "01",
    tag: "Particulier",
    title: "Particuliere\nverzekeringen",
    body: "Van woonhuis en auto tot reizen en gezondheid. CF adviseert onafhankelijk en begeleidt het hele traject.",
    cta: "Bekijk particuliere verzekeringen",
    href: "/verzekeringen/particulier",
    accent: "#ED694B",
    image: "/particulier.jpg",
  },
  {
    num: "02",
    tag: "Zakelijk",
    title: "Zakelijke\nverzekeringen",
    body: "Van bedrijfspand en aansprakelijkheid tot personeel en inventaris. Onafhankelijk advies voor elke ondernemer op Bonaire.",
    cta: "Bekijk zakelijke verzekeringen",
    href: "/verzekeringen/zakelijk",
    accent: "#04A76F",
    image: "/hero-team.jpg",
  },
];

export default function DienstenSectionDark() {
  const [hovered, setHovered] = useState<number | null>(null);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const mouseRef = useRef({ x: 0, y: 0 });
  const rafRef = useRef<number>(0);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };
    const tick = () => {
      setMouse((prev) => ({
        x: prev.x + (mouseRef.current.x - prev.x) * 0.10,
        y: prev.y + (mouseRef.current.y - prev.y) * 0.10,
      }));
      rafRef.current = requestAnimationFrame(tick);
    };
    window.addEventListener("mousemove", onMove, { passive: true });
    rafRef.current = requestAnimationFrame(tick);
    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <section ref={sectionRef} style={{ background: "transparent", position: "relative" }}>

      {/* Zwevende foto die de cursor volgt */}
      {diensten.map((d, i) => (
        <div
          key={d.num}
          className="pointer-events-none fixed z-50"
          style={{
            left: mouse.x + 24,
            top: mouse.y - 80,
            width: 280,
            height: 180,
            borderRadius: 12,
            overflow: "hidden",
            opacity: hovered === i ? 1 : 0,
            transform: hovered === i ? "scale(1) rotate(-2deg)" : "scale(0.85) rotate(-4deg)",
            transition: "opacity 0.35s ease, transform 0.35s ease",
            boxShadow: `0 20px 60px rgba(0,0,0,0.5), 0 0 0 1px ${d.accent}40`,
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={d.image}
            alt=""
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
          <div
            style={{
              position: "absolute",
              inset: 0,
              background: `linear-gradient(135deg, ${d.accent}30 0%, transparent 60%)`,
            }}
          />
        </div>
      ))}
      <div className="max-w-[1200px] mx-auto px-6 py-20 lg:py-28">

        {/* Sectie header */}
        <div className="flex items-end justify-between mb-16 gap-8">
          <div>
            <p
              className="text-xs font-bold tracking-[0.2em] uppercase mb-3"
              style={{ color: "rgba(255,255,255,0.35)" }}
            >
              Wat we doen
            </p>
            <h2
              className="text-3xl lg:text-5xl font-bold tracking-tight leading-[1.05] text-white"
            >
              Verzekeringen<br />
              <span style={{ color: "#ED694B" }}>&</span> Hypotheekadvies
            </h2>
          </div>
          <div
            className="hidden lg:block h-px flex-1 max-w-[200px]"
            style={{ background: "rgba(255,255,255,0.10)" }}
          />
        </div>

        {/* Verzekeringen — twee rijen met grote typografie */}
        <div className="space-y-0 mb-4">
          {diensten.map((d, i) => (
            <a
              key={d.num}
              href={d.href}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              className="group flex items-center justify-between gap-8 py-8 border-t relative overflow-hidden block"
              style={{
                borderColor: "rgba(255,255,255,0.08)",
                borderBottom: i === diensten.length - 1 ? "1px solid rgba(255,255,255,0.08)" : "none",
              }}
            >
              {/* Hover achtergrond glow */}
              <div
                className="absolute inset-0 pointer-events-none transition-opacity duration-500"
                style={{
                  background: `radial-gradient(ellipse 60% 100% at 0% 50%, ${d.accent}12 0%, transparent 70%)`,
                  opacity: hovered === i ? 1 : 0,
                }}
              />

              {/* Links: nummer + titel */}
              <div className="relative flex items-baseline gap-6 lg:gap-10 flex-1">
                <span
                  className="text-xs font-bold tracking-[0.2em] flex-shrink-0"
                  style={{ color: d.accent }}
                >
                  {d.num}
                </span>
                <h3
                  className="text-2xl lg:text-4xl font-bold text-white leading-tight whitespace-pre-line transition-all duration-300"
                  style={{
                    transform: hovered === i ? "translateX(8px)" : "translateX(0)",
                  }}
                >
                  {d.title}
                </h3>
              </div>

              {/* Rechts: omschrijving + cta */}
              <div
                className="relative hidden lg:flex flex-col items-end gap-4 max-w-sm text-right transition-all duration-300"
                style={{
                  opacity: hovered === i ? 1 : 0.4,
                  transform: hovered === i ? "translateX(0)" : "translateX(8px)",
                }}
              >
                <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.55)" }}>
                  {d.body}
                </p>
                <span
                  className="inline-flex items-center gap-2 text-sm font-semibold"
                  style={{ color: d.accent }}
                >
                  {d.cta}
                  <svg className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </div>

              {/* Pijl op kleine schermen */}
              <svg className="lg:hidden w-5 h-5 flex-shrink-0 transition-transform duration-200 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} style={{ color: d.accent }}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          ))}
        </div>

        {/* Hypotheek — breed prominentblok */}
        <div
          className="relative overflow-hidden rounded-2xl mt-16 group cursor-pointer"
          style={{
            background: "linear-gradient(135deg, rgba(237,105,75,0.15) 0%, rgba(237,105,75,0.05) 100%)",
            border: "1px solid rgba(237,105,75,0.25)",
          }}
        >
          {/* Decoratief groot cijfer */}
          <div
            aria-hidden="true"
            className="absolute right-8 top-1/2 -translate-y-1/2 font-black pointer-events-none select-none"
            style={{
              fontSize: "clamp(8rem, 18vw, 16rem)",
              lineHeight: 1,
              color: "#ED694B",
              opacity: 0.05,
              letterSpacing: "-0.06em",
            }}
          >
            03
          </div>

          <div className="relative p-8 lg:p-12 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
            <div className="max-w-xl">
              <p
                className="text-xs font-bold tracking-[0.2em] uppercase mb-5"
                style={{ color: "rgba(237,105,75,0.70)" }}
              >
                Hypotheekadvies
              </p>
              <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4 leading-tight">
                Hypotheekadvies<br />op Bonaire
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.50)" }}>
                CF begeleidt bij eigen woning, verhuurpand en tweede huis op Bonaire. Onafhankelijk advies van oriëntatie tot aanvraag. Via CF ben je minimaal even voordelig als bij de bank direct.
              </p>
            </div>

            <a
              href="/hypotheek-berekenen"
              className="flex-shrink-0 inline-flex items-center gap-2.5 px-7 py-4 rounded-xl text-sm font-semibold transition-all duration-200 hover:-translate-y-0.5 group/btn"
              style={{
                background: "#ED694B",
                color: "white",
                boxShadow: "0 8px 32px rgba(237,105,75,0.30)",
              }}
            >
              Hypotheek berekenen
              <svg
                className="w-4 h-4 transition-transform duration-200 group-hover/btn:translate-x-1"
                fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
