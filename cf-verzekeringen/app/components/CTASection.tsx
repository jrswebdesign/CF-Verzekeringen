export default function CTASection() {
  return (
    <section className="relative overflow-hidden" style={{ background: "#0a0908" }}>
      {/* ── Achtergrond: geblurde foto + gloed + rustige CSS-drift ── */}
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
          style={{ position: "absolute", width: "55%", height: "55%", left: "10%", top: "20%", background: "radial-gradient(ellipse, rgba(237,105,75,0.30) 0%, transparent 70%)" }}
        />
      </div>

      {/* Signatuur: Bonaire eilandsilhouet, groot en centraal, zachtjes drijvend */}
      <div
        aria-hidden="true"
        className="pointer-events-none hidden md:block animate-island-float"
        style={{
          position: "absolute",
          right: "-8%",
          top: "62%",
          width: "105%",
          maxWidth: 1320,
          aspectRatio: "1.5 / 1",
          backgroundColor: "rgba(255,255,255,0.07)",
          maskImage: "url('/bonaire-hero.svg')",
          WebkitMaskImage: "url('/bonaire-hero.svg')",
          maskSize: "contain",
          WebkitMaskSize: "contain",
          maskRepeat: "no-repeat",
          WebkitMaskRepeat: "no-repeat",
          maskPosition: "center",
          WebkitMaskPosition: "center",
          zIndex: 1,
        }}
      />

      {/* Content */}
      <div className="relative max-w-[1200px] mx-auto px-6 py-24 lg:py-32" style={{ zIndex: 2 }}>
        <div className="max-w-2xl">
          <h2
            className="font-bold tracking-tight leading-[1.05] mb-7 text-white"
            style={{ fontSize: "clamp(2.25rem, 4.5vw, 3.5rem)", letterSpacing: "-0.03em" }}
          >
            Wij staan voor<br />je klaar
          </h2>
          <p className="text-lg leading-relaxed mb-12 max-w-lg" style={{ color: "rgba(255,255,255,0.62)" }}>
            CF begeleidt je stap voor stap, onafhankelijk en persoonlijk. Of het nu gaat om een verzekering of een hypotheek, we denken met je mee, vanuit onze kennis van Bonaire.
          </p>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-8">
            <a
              href="/contact"
              className="group inline-flex items-center gap-2.5 px-8 py-4 rounded-full text-base font-semibold text-white transition-all duration-200 hover:-translate-y-0.5"
              style={{ background: "#ED694B", boxShadow: "0 12px 40px rgba(237,105,75,0.35)" }}
            >
              Neem contact op
              <svg
                className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1"
                fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a
              href="tel:+59971710 10"
              className="inline-flex items-center gap-2.5 text-sm font-semibold transition-colors duration-200 hover:text-white"
              style={{ color: "rgba(255,255,255,0.55)" }}
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              +599 717 10 10
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
