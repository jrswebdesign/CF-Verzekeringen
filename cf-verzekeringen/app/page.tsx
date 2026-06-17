import Image from "next/image";

export default function Home() {
  return (
    <main className="relative min-h-screen flex items-end overflow-hidden">

      {/* ── Background photo ── */}
      <Image
        src="/bonaire-aerial.png"
        alt="Bonaire – luchtfoto van Kralendijk"
        fill
        priority
        className="object-cover object-center"
        sizes="100vw"
      />

      {/* ── Gradient overlay ── */}
      {/* Dark from bottom-left, transparent top-right */}
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(135deg, rgba(20,20,20,0.82) 0%, rgba(20,20,20,0.65) 40%, rgba(20,20,20,0.25) 75%, rgba(20,20,20,0.05) 100%)",
        }}
      />

      {/* ── Content ── */}
      <div className="relative w-full px-8 pb-16 pt-32 sm:px-12 sm:pb-20 lg:px-20 lg:pb-24">
        <div className="max-w-[680px]">

          {/* Logo */}
          <div className="mb-8 animate-fade-up">
            <Image
              src="/logo-orange.png"
              alt="Crooij & Flipse"
              width={190}
              height={42}
              priority
              className="h-9 w-auto object-contain"
            />
          </div>

          {/* Label */}
          <p
            className="text-xs font-semibold tracking-[0.15em] uppercase mb-5 animate-fade-up"
            style={{ color: "#ED694B" }}
          >
            Verzekeringen &amp; Hypotheken op Bonaire
          </p>

          {/* Headline */}
          <h1
            className="text-4xl sm:text-5xl lg:text-[3.5rem] font-bold leading-[1.1] tracking-tight mb-6 text-white animate-fade-up-delay"
          >
            Onafhankelijk advies voor verzekeringen en hypotheken op Bonaire
          </h1>

          {/* Supporting text */}
          <p
            className="text-lg leading-relaxed mb-9 animate-fade-up-delay"
            style={{ color: "rgba(255,255,255,0.80)" }}
          >
            Persoonlijk advies, lokale kennis en begeleiding van begin tot eind.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 mb-9 animate-fade-up-delay-2">
            <a
              href="#contact"
              className="group inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl text-base font-semibold text-white cursor-pointer transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_8px_32px_rgba(237,105,75,0.50)]"
              style={{ backgroundColor: "#ED694B" }}
            >
              Plan een adviesgesprek
              <svg
                className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.5}
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

          {/* Trust indicators */}
          <div className="flex flex-wrap gap-3 animate-fade-up-delay-2">
            {[
              "100% onafhankelijk advies",
              "Lokaal kantoor op Bonaire",
              "Eén vast aanspreekpunt",
            ].map((item) => (
              <span
                key={item}
                className="inline-flex items-center gap-2 text-sm font-medium px-4 py-2 rounded-full backdrop-blur-sm"
                style={{
                  background: "rgba(255,255,255,0.12)",
                  color: "rgba(255,255,255,0.90)",
                  border: "1px solid rgba(255,255,255,0.20)",
                }}
              >
                <svg className="w-3.5 h-3.5 flex-shrink-0" viewBox="0 0 16 16" fill="none">
                  <circle cx="8" cy="8" r="7" fill="#04A76F" fillOpacity="0.25" />
                  <path
                    d="M5 8l2 2 4-4"
                    stroke="#04A76F"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                {item}
              </span>
            ))}
          </div>

        </div>
      </div>

    </main>
  );
}
