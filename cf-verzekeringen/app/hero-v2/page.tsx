import Image from "next/image";
import HeroShader from "../components/HeroShader";

export default function HeroV2() {
  // Header hoogte: ~48px topbalk + ~80px hoofdmenu = 128px
  const HEADER = 128;

  return (
    <main
      className="relative bg-[#0E0D0D] overflow-hidden"
      style={{ minHeight: "100vh" }}
    >
      <HeroShader />

      {/* Volledig scherm minus header */}
      <div
        className="relative flex flex-col items-center justify-center"
        style={{
          minHeight: `calc(100vh - ${HEADER}px)`,
          marginTop: `${HEADER}px`,
          paddingBottom: "48px",
        }}
      >
        {/* ── Staggered rij: Zekerheid | cirkel | Op Bonaire ── */}
        <div
          className="relative flex items-stretch justify-center w-full"
          style={{ height: "calc(100vh - 280px)" }}
        >
          {/* Links — Zekerheid bovenaan */}
          <div
            className="flex flex-col items-end justify-start flex-1 pr-0"
            style={{ paddingTop: "5%", marginRight: "-2.8vw", zIndex: 20, position: "relative" }}
          >
            <span
              aria-hidden="true"
              className="font-bold text-white leading-none select-none whitespace-nowrap"
              style={{
                fontSize: "clamp(2.6rem, 5vw, 6rem)",
                letterSpacing: "-0.03em",
              }}
            >
              Zekerheid
            </span>
          </div>

          {/* Cirkel — volledig zichtbaar, gecentreerd */}
          <div
            className="relative flex-shrink-0 self-center"
            style={{
              width: "clamp(260px, 62vh, 540px)",
              height: "clamp(260px, 62vh, 540px)",
              zIndex: 5,
            }}
          >
            {/* Koraal glow ring */}
            <div
              aria-hidden="true"
              className="absolute inset-0 rounded-full"
              style={{
                boxShadow:
                  "0 0 0 2px rgba(237,105,75,0.55), 0 0 70px 15px rgba(237,105,75,0.10)",
              }}
            />

            {/* Foto met Ken Burns animatie */}
            <div className="absolute inset-0 rounded-full overflow-hidden">
              <div className="absolute inset-0 animate-kenburns">
                <Image
                  src="/bonaire-aerial.png"
                  alt="Bonaire – luchtfoto van Kralendijk"
                  fill
                  priority
                  className="object-cover object-center"
                  sizes="(max-width: 768px) 80vw, 34vw"
                />
              </div>
              {/* Rand fade */}
              <div
                className="absolute inset-0 rounded-full"
                style={{
                  background:
                    "radial-gradient(circle, transparent 58%, rgba(14,13,13,0.6) 100%)",
                }}
              />
            </div>

            {/* Label onderaan in cirkel */}
            <div className="absolute bottom-[20%] left-1/2 -translate-x-1/2 z-10">
              <p
                className="text-[9px] font-semibold tracking-[0.28em] uppercase whitespace-nowrap"
                style={{ color: "rgba(255,255,255,0.45)" }}
              >
                Onafhankelijk advies
              </p>
            </div>
          </div>

          {/* Rechts — Op Bonaire onderaan */}
          <div
            className="flex flex-col items-start justify-end flex-1 pl-0"
            style={{ paddingBottom: "5%", marginLeft: "-2.8vw", zIndex: 20, position: "relative" }}
          >
            <span
              aria-hidden="true"
              className="font-bold text-white leading-none select-none whitespace-nowrap"
              style={{
                fontSize: "clamp(2.6rem, 5vw, 6rem)",
                letterSpacing: "-0.03em",
              }}
            >
              Op Bonaire
            </span>
          </div>
        </div>

        {/* ── CTA onderaan ── */}
        <div className="flex items-center gap-8 mt-10">
          <a
            href="#contact"
            className="group inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full text-sm font-semibold text-white transition-all duration-200 hover:bg-[#ED694B]"
            style={{ border: "1.5px solid rgba(237,105,75,0.75)" }}
          >
            Start Gesprek
            <svg
              className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M7 17L17 7M17 7H7M17 7v10"
              />
            </svg>
          </a>
          <a
            href="#informatie"
            className="text-sm font-semibold transition-colors duration-200 hover:text-white"
            style={{ color: "rgba(255,255,255,0.38)" }}
          >
            Meer informatie
          </a>
        </div>
      </div>

      <h1 className="sr-only">Zekerheid Op Bonaire — Crooij &amp; Flipse</h1>
    </main>
  );
}
