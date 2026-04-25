import { Bone, Scissors, HeartPulse, Crown, ShieldCheck } from "lucide-react";

const services = [
  {
    icon: Bone,
    title: "Implantology",
    desc: "Premium dental implants for permanent tooth replacement with natural look and function. We use advanced 3D planning for precise implant placement.",
  },
  {
    icon: Scissors,
    title: "Oral Surgery",
    desc: "Expert surgical procedures including wisdom tooth extraction, bone augmentation, and complex dental surgeries with minimal discomfort.",
  },
  {
    icon: HeartPulse,
    title: "Periodontology",
    desc: "Comprehensive gum disease treatment and prevention. We specialize in periodontal therapy to preserve your natural teeth and gum health.",
  },
  {
    icon: Crown,
    title: "Prosthetics",
    desc: "Custom-crafted dental prosthetics including crowns, bridges, and dentures designed for optimal fit, function, and aesthetics.",
  },
  {
    icon: ShieldCheck,
    title: "Dental Prophylaxis",
    desc: "Professional cleaning and preventive care to maintain oral health. Regular prophylaxis to prevent cavities and gum disease.",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 sm:py-28 bg-bg-section">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 mb-4">
            <span className="text-xs font-semibold text-primary uppercase tracking-wider">Our Services</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-text-dark">
            Comprehensive <span className="text-primary">Dental Care</span>
          </h2>
          <p className="mt-4 text-text-mid leading-relaxed">
            We offer a full range of dental services with a focus on quality, precision, and patient comfort.
          </p>
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <div
              key={s.title}
              className={`group bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-gray-100 hover:shadow-lg hover:border-primary/20 hover:-translate-y-1 transition-all duration-300 ${
                i === 4 ? "sm:col-span-2 lg:col-span-1 lg:col-start-2" : ""
              }`}
            >
              <div className="h-14 w-14 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:shadow-lg group-hover:shadow-primary/20 transition-all duration-300">
                <s.icon className="h-7 w-7 text-primary group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="mt-5 text-lg font-bold text-text-dark">{s.title}</h3>
              <p className="mt-3 text-sm text-text-mid leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
