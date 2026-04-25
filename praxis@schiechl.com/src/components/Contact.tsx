import { MapPin, Phone, Clock, Mail } from "lucide-react";

const hours = [
  { day: "Monday", time: "08:00 – 12:00 & 14:00 – 18:00" },
  { day: "Tuesday", time: "08:00 – 12:00 & 14:00 – 18:00" },
  { day: "Wednesday", time: "08:00 – 12:00" },
  { day: "Thursday", time: "08:00 – 12:00 & 14:00 – 18:00" },
  { day: "Friday", time: "08:00 – 12:00" },
  { day: "Saturday", time: "Closed" },
  { day: "Sunday", time: "Closed" },
];

export default function Contact() {
  return (
    <section id="contact" className="py-20 sm:py-28 bg-bg-section">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 mb-4">
            <span className="text-xs font-semibold text-primary uppercase tracking-wider">Contact Us</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-text-dark">
            Visit Our <span className="text-primary">Clinic</span>
          </h2>
          <p className="mt-4 text-text-mid leading-relaxed">
            We're conveniently located in the heart of Wolfsberg. Feel free to reach out or visit us.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div className="space-y-4">
            <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="h-11 w-11 shrink-0 rounded-xl bg-primary/10 flex items-center justify-center">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-text-dark">Address</h3>
                  <p className="mt-1 text-sm text-text-mid">Roßmarkt 8<br />9400 Wolfsberg, Austria</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="h-11 w-11 shrink-0 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Phone className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-text-dark">Phone</h3>
                  <a href="tel:+4343523777" className="mt-1 block text-sm text-primary font-medium hover:text-primary-dark transition-colors">
                    +43 4352 37777
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="h-11 w-11 shrink-0 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-text-dark">Email</h3>
                  <a href="mailto:office@dr-schiechl.at" className="mt-1 block text-sm text-primary font-medium hover:text-primary-dark transition-colors">
                    office@dr-schiechl.at
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Opening Hours */}
          <div className="bg-white rounded-2xl p-6 sm:p-7 border border-gray-100 shadow-sm">
            <div className="flex items-center gap-3 mb-5">
              <div className="h-11 w-11 shrink-0 rounded-xl bg-primary/10 flex items-center justify-center">
                <Clock className="h-5 w-5 text-primary" />
              </div>
              <h3 className="text-lg font-bold text-text-dark">Opening Hours</h3>
            </div>
            <div className="space-y-0">
              {hours.map((h) => {
                const isClosed = h.time === "Closed";
                const isToday = new Date().toLocaleDateString("en-US", { weekday: "long" }) === h.day;
                return (
                  <div
                    key={h.day}
                    className={`flex justify-between items-center py-2.5 border-b border-gray-50 last:border-0 ${
                      isToday ? "bg-primary/5 -mx-3 px-3 rounded-lg" : ""
                    }`}
                  >
                    <span className={`text-sm ${isToday ? "font-semibold text-primary" : "text-text-mid"}`}>
                      {h.day} {isToday && <span className="text-[10px] ml-1 bg-primary text-white px-1.5 py-0.5 rounded-full font-medium">Today</span>}
                    </span>
                    <span className={`text-sm ${isClosed ? "text-red-400 font-medium" : "text-text-dark font-medium"}`}>
                      {h.time}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Map */}
          <div className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm min-h-[300px] lg:min-h-0">
            <iframe
              title="Dr. Schiechl Dental Clinic Location - Roßmarkt 8, Wolfsberg, Austria"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2734.8!2d14.8405!3d46.8401!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47720a5df1d9e2d1%3A0x4c0e7e4e7f00f0e0!2sRo%C3%9Fmarkt%208%2C%209400%20Wolfsberg%2C%20Austria!5e0!3m2!1sen!2sat!4v1700000000000"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "300px" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
