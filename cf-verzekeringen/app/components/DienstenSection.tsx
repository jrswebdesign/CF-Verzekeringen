import Image from "next/image";

export default function DienstenSection() {
  return (
    <section style={{ background: "#F7F7F5" }}>
      <div className="max-w-[1200px] mx-auto px-6 py-20 lg:py-28">

        {/* Sectie header */}
        <div className="mb-12">
          <p
            className="text-xs font-bold tracking-[0.2em] uppercase mb-3"
            style={{ color: "#ED694B" }}
          >
            Wat we doen
          </p>
          <h2
            className="text-3xl lg:text-4xl font-bold tracking-tight"
            style={{ color: "#1A1A1A" }}
          >
            Verzekeringen en hypotheekadvies
          </h2>
        </div>

        {/* Twee verzekerings-tegels */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">

          {/* Particuliere verzekeringen */}
          <div
            className="relative overflow-hidden rounded-2xl group"
            style={{ background: "#1A1A1A", minHeight: 340 }}
          >
            {/* Achtergrond foto */}
            <Image
              src="/bonaire-hero-1.png"
              alt="Particuliere verzekeringen"
              fill
              className="object-cover opacity-30 group-hover:opacity-40 transition-opacity duration-500"
              sizes="(max-width: 768px) 100vw, 50vw"
            />

            {/* Koraal accent vlak linksboven */}
            <div
              className="absolute top-0 left-0 w-1 h-full"
              style={{ background: "#ED694B" }}
            />

            <div className="relative p-8 lg:p-10 flex flex-col justify-between h-full" style={{ minHeight: 340 }}>
              {/* Label */}
              <div>
                <p
                  className="text-xs font-bold tracking-[0.18em] uppercase mb-6"
                  style={{ color: "#ED694B" }}
                >
                  Particulier
                </p>
                <h3
                  className="text-2xl font-bold text-white mb-4 leading-tight"
                >
                  Particuliere verzekeringen
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "rgba(255,255,255,0.60)" }}
                >
                  Van woonhuis en auto tot reizen en gezondheid. CF adviseert onafhankelijk en begeleidt het hele traject.
                </p>
              </div>

              {/* CTA */}
              <a
                href="/verzekeringen/particulier"
                className="inline-flex items-center gap-2 text-sm font-semibold mt-8 group/link"
                style={{ color: "#ED694B" }}
              >
                Bekijk particuliere verzekeringen
                <svg
                  className="w-4 h-4 transition-transform duration-200 group-hover/link:translate-x-1"
                  fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>

          {/* Zakelijke verzekeringen */}
          <div
            className="relative overflow-hidden rounded-2xl group"
            style={{ background: "#0D2B1F", minHeight: 340 }}
          >
            {/* Achtergrond foto */}
            <Image
              src="/bonaire-aerial.png"
              alt="Zakelijke verzekeringen"
              fill
              className="object-cover opacity-25 group-hover:opacity-35 transition-opacity duration-500"
              sizes="(max-width: 768px) 100vw, 50vw"
            />

            {/* Groen accent vlak linksboven */}
            <div
              className="absolute top-0 left-0 w-1 h-full"
              style={{ background: "#04A76F" }}
            />

            <div className="relative p-8 lg:p-10 flex flex-col justify-between h-full" style={{ minHeight: 340 }}>
              <div>
                <p
                  className="text-xs font-bold tracking-[0.18em] uppercase mb-6"
                  style={{ color: "#04A76F" }}
                >
                  Zakelijk
                </p>
                <h3 className="text-2xl font-bold text-white mb-4 leading-tight">
                  Zakelijke verzekeringen
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "rgba(255,255,255,0.60)" }}
                >
                  Van bedrijfspand en aansprakelijkheid tot personeel en inventaris. Onafhankelijk advies voor elke ondernemer op Bonaire.
                </p>
              </div>

              <a
                href="/verzekeringen/zakelijk"
                className="inline-flex items-center gap-2 text-sm font-semibold mt-8 group/link"
                style={{ color: "#04A76F" }}
              >
                Bekijk zakelijke verzekeringen
                <svg
                  className="w-4 h-4 transition-transform duration-200 group-hover/link:translate-x-1"
                  fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Hypotheekblok — volledige breedte */}
        <div
          className="relative overflow-hidden rounded-2xl group"
          style={{ background: "#ED694B" }}
        >
          <Image
            src="/bonaire-huts.png"
            alt="Hypotheekadvies op Bonaire"
            fill
            className="object-cover object-center opacity-15 group-hover:opacity-20 transition-opacity duration-500"
            sizes="100vw"
          />

          {/* Subtiel patroon overlay */}
          <div
            className="absolute inset-0"
            style={{
              background: "radial-gradient(ellipse 60% 100% at 80% 50%, rgba(255,255,255,0.08) 0%, transparent 70%)",
            }}
          />

          <div className="relative p-8 lg:p-12 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
            <div className="max-w-2xl">
              <p
                className="text-xs font-bold tracking-[0.18em] uppercase mb-6"
                style={{ color: "rgba(255,255,255,0.65)" }}
              >
                Hypotheekadvies
              </p>
              <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4 leading-tight">
                Hypotheekadvies op Bonaire
              </h3>
              <p
                className="text-sm leading-relaxed"
                style={{ color: "rgba(255,255,255,0.80)" }}
              >
                CF begeleidt bij eigen woning, verhuurpand en tweede huis op Bonaire. Onafhankelijk advies van oriëntatie tot aanvraag. Via CF ben je minimaal even voordelig als bij de bank direct.
              </p>
            </div>

            <a
              href="/hypotheek-berekenen"
              className="flex-shrink-0 inline-flex items-center gap-2.5 px-7 py-4 rounded-xl text-sm font-semibold transition-all duration-200 hover:-translate-y-0.5 group/link"
              style={{
                background: "white",
                color: "#ED694B",
                boxShadow: "0 4px 20px rgba(0,0,0,0.15)",
              }}
            >
              Hypotheek berekenen
              <svg
                className="w-4 h-4 transition-transform duration-200 group-hover/link:translate-x-1"
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
