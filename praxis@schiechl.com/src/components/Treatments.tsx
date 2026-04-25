const treatments = [
  {
    title: "Dental Implants",
    desc: "Permanent titanium-based tooth replacements that look and function like natural teeth.",
    icon: "🦷",
  },
  {
    title: "Crowns & Bridges",
    desc: "Custom-made restorations to repair damaged teeth or replace missing ones seamlessly.",
    icon: "👑",
  },
  {
    title: "Veneers",
    desc: "Ultra-thin porcelain shells for a perfect, natural-looking smile transformation.",
    icon: "✨",
  },
  {
    title: "Dentures",
    desc: "Comfortable removable prosthetics, custom-fitted for natural appearance and function.",
    icon: "😁",
  },
  {
    title: "Dental Fillings",
    desc: "Tooth-colored composite fillings for a seamless, durable cavity restoration.",
    icon: "🔬",
  },
  {
    title: "Teeth Whitening",
    desc: "Professional bleaching treatments for a brighter, more radiant smile.",
    icon: "💎",
  },
];

export default function Treatments() {
  return (
    <section id="treatments" className="py-20 sm:py-28 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 mb-4">
            <span className="text-xs font-semibold text-primary uppercase tracking-wider">Treatments</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-text-dark">
            Products & <span className="text-primary">Treatments</span>
          </h2>
          <p className="mt-4 text-text-mid leading-relaxed">
            From implants to cosmetic dentistry, we provide high-quality treatments tailored to your needs.
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {treatments.map((t) => (
            <div
              key={t.title}
              className="group relative bg-gradient-to-br from-bg-light to-white rounded-2xl p-6 sm:p-7 border border-gray-100 hover:shadow-lg hover:border-primary/20 transition-all duration-300"
            >
              <div className="text-3xl sm:text-4xl mb-4">{t.icon}</div>
              <h3 className="text-lg font-bold text-text-dark group-hover:text-primary transition-colors">{t.title}</h3>
              <p className="mt-2 text-sm text-text-mid leading-relaxed">{t.desc}</p>
              <div className="mt-4">
                <a
                  href="#appointment"
                  className="inline-flex items-center text-xs font-semibold text-primary hover:text-primary-dark transition-colors"
                >
                  Book consultation →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
