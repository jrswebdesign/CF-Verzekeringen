import Image from "next/image";
import UspSection from "./components/UspSection";
import DienstenSection from "./components/DienstenSection";

export default function Home() {
  return (
    <>
      <main className="relative min-h-screen flex items-end overflow-hidden">

        {/* ── Achtergrond foto — zonnig Bonaire strand ── */}
        <Image
          src="/bonaire-hero-1.png"
          alt="Bonaire – zonnig strand"
          fill
          priority
          className="object-cover"
          style={{ objectPosition: "center 30%" }}
          sizes="100vw"
        />

        {/* ── Overlay — links donkerder voor leesbaarheid, rechts open ── */}
        <div
          aria-hidden="true"
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(105deg, rgba(8,6,4,0.58) 0%, rgba(8,6,4,0.32) 40%, rgba(8,6,4,0.06) 70%, rgba(8,6,4,0.0) 100%)",
          }}
        />

        {/* ── Content ── */}
        <div className="relative w-full px-8 pb-16 pt-32 sm:px-12 sm:pb-20 lg:px-20 lg:pb-24">
          <div className="max-w-[620px]">

            {/* Label */}
            <p
              className="text-xs font-semibold tracking-[0.18em] uppercase mb-5 animate-fade-up"
              style={{ color: "#ED694B" }}
            >
              Verzekeringen &amp; Hypotheken op Bonaire
            </p>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-[3.25rem] font-bold leading-[1.1] tracking-tight mb-6 text-white animate-fade-up-delay">
              Onafhankelijk advies voor verzekeringen en hypotheken op Bonaire
            </h1>

            {/* Supporting text */}
            <p
              className="text-lg leading-relaxed mb-9 animate-fade-up-delay"
              style={{ color: "rgba(255,255,255,0.85)" }}
            >
              Persoonlijk advies, lokale kennis en begeleiding van begin tot eind.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 animate-fade-up-delay-2">
              <a
                href="#contact"
                className="group inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl text-base font-semibold text-white cursor-pointer transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_8px_32px_rgba(237,105,75,0.50)]"
                style={{ backgroundColor: "#ED694B" }}
              >
                Plan een adviesgesprek
                <svg
                  className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1"
                  fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a
                href="#informatie"
                className="inline-flex items-center justify-center px-8 py-4 rounded-2xl text-base font-medium cursor-pointer transition-all duration-200 hover:bg-white hover:text-[#333333]"
                style={{
                  border: "2px solid rgba(255,255,255,0.55)",
                  color: "rgba(255,255,255,0.92)",
                }}
              >
                Informatie aanvragen
              </a>
            </div>

          </div>
        </div>

      </main>

      <UspSection variant="light" />
      <DienstenSection />
    </>
  );
}
