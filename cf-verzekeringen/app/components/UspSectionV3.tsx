const usps = [
  {
    label: "Onafhankelijk advies",
    body: "Niet verbonden aan één aanbieder, we kijken naar wat het beste bij u past.",
    icon: (
      // Kompas — vrije richting, geen vaste koers naar één aanbieder
      <svg viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="8.75" stroke="currentColor" strokeWidth={1.15} />
        <path
          d="M15.2 8.8l-2.1 4.4-4.4 2.1 2.1-4.4 4.4-2.1z"
          stroke="currentColor"
          strokeWidth={1.15}
          strokeLinejoin="round"
        />
        <circle cx="12" cy="12" r="0.9" fill="currentColor" />
      </svg>
    ),
  },
  {
    label: "Persoonlijke begeleiding",
    body: "Eén vast aanspreekpunt, van het eerste gesprek tot lang na het afsluiten.",
    icon: (
      // Twee elkaar overlappende cirkels — één doorlopende relatie
      <svg viewBox="0 0 24 24" fill="none">
        <circle cx="9.5" cy="12" r="6" stroke="currentColor" strokeWidth={1.15} />
        <circle cx="14.5" cy="12" r="6" stroke="currentColor" strokeWidth={1.15} />
      </svg>
    ),
  },
  {
    label: "Lokale kennis van Bonaire",
    body: "We kennen de markt, de regelgeving en de praktijk van het eiland.",
    icon: (
      // Abstract eiland-contour met markering — lokale, specifieke kennis
      <svg viewBox="0 0 24 24" fill="none">
        <path
          d="M3.5 15.5c1.8-2.3 3.6-3.6 5.5-3.6 1.4 0 2.3 1 3.6 1 1.6 0 2.6-1.6 4.4-1.6 1.4 0 2.5.7 3.5 2"
          stroke="currentColor"
          strokeWidth={1.15}
          strokeLinecap="round"
        />
        <circle cx="12" cy="6.5" r="1.4" stroke="currentColor" strokeWidth={1.15} />
        <path d="M12 7.9V10.6" stroke="currentColor" strokeWidth={1.15} strokeLinecap="round" />
      </svg>
    ),
  },
  {
    label: "Prijsneutraal",
    body: "U betaalt via CF nooit meer dan rechtstreeks, soms zelfs voordeliger.",
    icon: (
      // Balans in evenwicht — gelijke schalen, geen meerprijs
      <svg viewBox="0 0 24 24" fill="none">
        <path d="M12 3.5V19" stroke="currentColor" strokeWidth={1.15} strokeLinecap="round" />
        <path d="M4.5 20.5h15" stroke="currentColor" strokeWidth={1.15} strokeLinecap="round" />
        <path d="M5.5 7l3.5-1.2L12.5 7" stroke="currentColor" strokeWidth={1.15} strokeLinecap="round" strokeLinejoin="round" />
        <path d="M3.7 10.3a2.3 2.3 0 004.6 0L6 6l-2.3 4.3z" stroke="currentColor" strokeWidth={1.15} strokeLinejoin="round" />
        <path d="M11.5 7l3.5-1.5 3.5 1.5" stroke="currentColor" strokeWidth={1.15} strokeLinecap="round" strokeLinejoin="round" />
        <path d="M13.7 10.6a2.3 2.3 0 004.6 0L16 6.3l-2.3 4.3z" stroke="currentColor" strokeWidth={1.15} strokeLinejoin="round" />
      </svg>
    ),
  },
];

export default function UspSectionV3() {
  return (
    <section style={{ background: "#ffffff" }}>
      <div className="max-w-[1200px] mx-auto px-6 pt-16 lg:pt-20 pb-16 lg:pb-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {usps.map((usp) => (
            <div key={usp.label} className="flex flex-col items-center text-center">
              <div className="flex items-center justify-center mb-5" style={{ color: "#1A1A1A" }}>
                <span className="w-9 h-9">{usp.icon}</span>
              </div>
              <p className="font-semibold mb-2 leading-snug" style={{ fontSize: "1rem", color: "#1A1A1A" }}>
                {usp.label}
              </p>
              <p className="leading-relaxed max-w-[240px]" style={{ fontSize: "0.875rem", color: "#666666" }}>
                {usp.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
