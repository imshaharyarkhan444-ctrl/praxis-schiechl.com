import { Award, Heart, Shield, Sparkles } from "lucide-react";

const features = [
  { icon: Shield, title: "Advanced Implantology", desc: "State-of-the-art implant solutions for lasting results" },
  { icon: Heart, title: "Patient-Centered Care", desc: "Compassionate treatment in a comfortable environment" },
  { icon: Award, title: "Expert Oral Surgery", desc: "Specialized surgical procedures with precision" },
  { icon: Sparkles, title: "Modern Techniques", desc: "Latest dental technology for optimal outcomes" },
];

export default function About() {
  return (
    <section id="about" className="py-20 sm:py-28 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-primary/10">
              <img
                src="/images/about-clinic.jpg"
                alt="Modern dental equipment and treatment area at Dr. Schiechl dental clinic"
                className="w-full h-[300px] sm:h-[400px] lg:h-[500px] object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-accent/20 to-transparent" />
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-6 -right-2 sm:right-6 bg-white rounded-xl shadow-lg p-4 sm:p-5 border border-gray-100">
              <div className="flex items-center gap-3">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Award className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-text-dark">Certified Specialist</div>
                  <div className="text-xs text-text-light">MSc Implantology</div>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 mb-4">
              <span className="text-xs font-semibold text-primary uppercase tracking-wider">About Our Clinic</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-text-dark leading-tight">
              Your Trusted Partner for{" "}
              <span className="text-primary">Dental Health</span>
            </h2>
            <p className="mt-5 text-text-mid leading-relaxed">
              Dr. med. univ. et med. dent. Klaus Peter Schiechl MSc brings over two decades of expertise in 
              dentistry, oral surgery, and implantology. Our clinic in Wolfsberg combines advanced medical 
              technology with a warm, patient-focused approach to deliver exceptional dental care.
            </p>
            <p className="mt-4 text-text-mid leading-relaxed">
              From complex implant procedures to routine dental care, we are committed to providing 
              personalized treatments that ensure your comfort and long-term oral health. Every patient 
              receives individual attention and a tailored treatment plan.
            </p>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {features.map((f) => (
                <div key={f.title} className="flex items-start gap-3 p-3 rounded-lg hover:bg-bg-light transition-colors">
                  <div className="mt-0.5 h-9 w-9 shrink-0 rounded-lg bg-primary/10 flex items-center justify-center">
                    <f.icon className="h-4.5 w-4.5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-text-dark">{f.title}</h3>
                    <p className="text-xs text-text-light mt-0.5">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
