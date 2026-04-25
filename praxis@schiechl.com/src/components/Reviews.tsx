import { Star, Quote } from "lucide-react";

const reviews = [
  {
    name: "Maria H.",
    text: "Fantastic experience! Dr. Schiechl and his team made me feel completely at ease. My implant procedure was painless, and the results are incredible. Highly recommend!",
    rating: 5,
    treatment: "Dental Implant",
  },
  {
    name: "Thomas W.",
    text: "Got an appointment very quickly. The staff is extremely friendly and professional. The treatment was gentle and thorough. Best dental practice in the region!",
    rating: 5,
    treatment: "Oral Surgery",
  },
  {
    name: "Elisabeth K.",
    text: "I was always afraid of the dentist, but Dr. Schiechl changed that. He explains everything calmly and the treatment is virtually pain-free. The modern equipment gives great confidence.",
    rating: 5,
    treatment: "Dental Prophylaxis",
  },
  {
    name: "Stefan M.",
    text: "After years of dental problems, I finally found the right doctor. The crowns look absolutely natural. Professional work from start to finish. Thank you!",
    rating: 5,
    treatment: "Crowns & Bridges",
  },
  {
    name: "Anna R.",
    text: "Quick appointment, short waiting time, excellent treatment. My veneers look amazing and completely natural. Very grateful for the great result!",
    rating: 5,
    treatment: "Veneers",
  },
  {
    name: "Georg P.",
    text: "Top-class practice with modern equipment. Dr. Schiechl takes time for every patient and explains the treatment plan in detail. Absolutely trustworthy!",
    rating: 5,
    treatment: "Periodontology",
  },
];

export default function Reviews() {
  return (
    <section id="reviews" className="py-20 sm:py-28 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 mb-4">
            <span className="text-xs font-semibold text-primary uppercase tracking-wider">Testimonials</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-text-dark">
            What Our <span className="text-primary">Patients Say</span>
          </h2>
          <p className="mt-4 text-text-mid leading-relaxed">
            Real feedback from our valued patients about their experience at our clinic.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((r, i) => (
            <div
              key={i}
              className="relative bg-bg-light rounded-2xl p-6 sm:p-7 border border-gray-100 hover:shadow-md transition-all duration-300"
            >
              <Quote className="h-8 w-8 text-primary/15 absolute top-5 right-5" />
              
              {/* Stars */}
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: r.rating }).map((_, j) => (
                  <Star key={j} className="h-4 w-4 fill-amber-400 text-amber-400" />
                ))}
              </div>

              <p className="text-sm text-text-mid leading-relaxed mb-5">"{r.text}"</p>

              <div className="flex items-center gap-3 pt-4 border-t border-gray-200/60">
                <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-sm font-bold text-primary">{r.name.charAt(0)}</span>
                </div>
                <div>
                  <div className="text-sm font-semibold text-text-dark">{r.name}</div>
                  <div className="text-xs text-text-light">{r.treatment}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
