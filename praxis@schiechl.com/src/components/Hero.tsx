import { ChevronDown } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/images/hero-dental.jpg"
          alt="Modern dental treatment room at Dr. Schiechl's clinic in Wolfsberg"
          className="h-full w-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1a2332]/85 via-[#1a2332]/60 to-[#1a2332]/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-32 sm:py-40">
        <div className="max-w-2xl">
          <div className="animate-fade-in-up">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/15 backdrop-blur-sm px-4 py-1.5 mb-6">
              <div className="h-2 w-2 rounded-full bg-primary-light animate-pulse" />
              <span className="text-xs sm:text-sm font-medium text-white/90 tracking-wide">
                Accepting New Patients
              </span>
            </div>
          </div>

          <h1 className="animate-fade-in-up animation-delay-200 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white leading-tight">
            Dr. Klaus Peter
            <br />
            <span className="text-primary-light">Schiechl</span> MSc
          </h1>

          <p className="animate-fade-in-up animation-delay-400 mt-4 sm:mt-6 text-base sm:text-lg md:text-xl text-white/80 font-light leading-relaxed max-w-xl">
            Specialist in Dentistry, Oral and Maxillofacial Surgery.
            <br className="hidden sm:block" />
            Precision care you can trust.
          </p>

          <div className="animate-fade-in-up animation-delay-600 mt-8 sm:mt-10 flex flex-col sm:flex-row gap-4">
            <a
              href="#appointment"
              className="inline-flex items-center justify-center rounded-lg bg-primary px-6 sm:px-8 py-3 sm:py-3.5 text-sm sm:text-base font-semibold text-white shadow-lg shadow-primary/30 hover:bg-primary-dark hover:shadow-xl transition-all duration-300"
            >
              Book Appointment
            </a>
            <a
              href="#services"
              className="inline-flex items-center justify-center rounded-lg border-2 border-white/30 px-6 sm:px-8 py-3 sm:py-3.5 text-sm sm:text-base font-semibold text-white hover:bg-white/10 backdrop-blur-sm transition-all duration-300"
            >
              Our Services
            </a>
          </div>

          {/* Stats */}
          <div className="animate-fade-in-up animation-delay-600 mt-12 sm:mt-16 grid grid-cols-3 gap-4 sm:gap-8 max-w-md">
            {[
              { num: "25+", label: "Years Experience" },
              { num: "10K+", label: "Happy Patients" },
              { num: "100%", label: "Patient Care" },
            ].map((stat) => (
              <div key={stat.label} className="text-center sm:text-left">
                <div className="text-2xl sm:text-3xl font-bold text-white">{stat.num}</div>
                <div className="text-xs sm:text-sm text-white/60 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <a href="#about" aria-label="Scroll to about section">
          <ChevronDown className="h-6 w-6 text-white/60" />
        </a>
      </div>
    </section>
  );
}
