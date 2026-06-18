"use client";

import { useState } from "react";

const usps = [
  {
    number: "01",
    label: "Onafhankelijk advies",
    body: "CF is niet verbonden aan een aanbieder en kijkt altijd naar wat het beste bij de klant past.",
    color: "#ED694B",
  },
  {
    number: "02",
    label: "Persoonlijke begeleiding",
    body: "Een vast aanspreekpunt van het eerste gesprek tot lang na het afsluiten.",
    color: "#04A76F",
  },
  {
    number: "03",
    label: "Lokale kennis van Bonaire",
    body: "CF kent de lokale markt, regelgeving en de praktijk van wonen en ondernemen op het eiland.",
    color: "#ED694B",
  },
  {
    number: "04",
    label: "Prijsneutraal",
    body: "Via CF betaal je nooit meer dan rechtstreeks. Bij hypotheken kan CF soms zelfs iets voordeliger zijn.",
    color: "#04A76F",
  },
];

export default function UspSection({ variant = "light" }: { variant?: "light" | "dark" }) {
  const isDark = variant === "dark";
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section
      style={{
        background: isDark ? "rgba(10,9,8,0.0)" : "#ffffff",
        borderTop: isDark ? "1px solid rgba(255,255,255,0.07)" : "1px solid #EBEBEB",
      }}
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {usps.map((usp, i) => (
          <div
            key={usp.label}
            onMouseEnter={() => setHovered(i)}
            onMouseLeave={() => setHovered(null)}
            className="px-8 py-10 lg:py-14 relative overflow-hidden"
            style={{
              borderRight: isDark ? "1px solid rgba(255,255,255,0.07)" : "1px solid #EBEBEB",
              borderBottom: isDark ? "1px solid rgba(255,255,255,0.07)" : "1px solid #EBEBEB",
              background: hovered === i
                ? isDark ? "rgba(255,255,255,0.03)" : `${usp.color}0A`
                : "transparent",
              transition: "background 0.3s ease",
            }}
          >
            {/* Groot achtergrondnummer */}
            <div
              aria-hidden="true"
              style={{
                position: "absolute",
                top: "-0.1em",
                right: "-0.05em",
                fontSize: "7rem",
                fontWeight: 800,
                lineHeight: 1,
                color: usp.color,
                opacity: hovered === i ? 0.10 : 0.05,
                transition: "opacity 0.3s ease",
                userSelect: "none",
                letterSpacing: "-0.04em",
                pointerEvents: "none",
              }}
            >
              {usp.number}
            </div>

            {/* Klein nummerlabel */}
            <p
              className="text-xs font-bold tracking-[0.2em] uppercase mb-6"
              style={{ color: usp.color }}
            >
              {usp.number}
            </p>

            {/* Label */}
            <p
              className="font-semibold mb-3 leading-snug"
              style={{
                fontSize: "1rem",
                color: isDark ? "rgba(255,255,255,0.92)" : "#1A1A1A",
              }}
            >
              {usp.label}
            </p>

            {/* Body */}
            <p
              className="leading-relaxed"
              style={{
                fontSize: "0.875rem",
                color: isDark ? "rgba(255,255,255,0.45)" : "#666666",
              }}
            >
              {usp.body}
            </p>

            {/* Gekleurde onderlijn op hover */}
            <div
              style={{
                position: "absolute",
                bottom: 0,
                left: 0,
                height: "2px",
                width: hovered === i ? "100%" : "0%",
                background: usp.color,
                transition: "width 0.35s ease",
              }}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
