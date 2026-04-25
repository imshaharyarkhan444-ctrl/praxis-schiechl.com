import { MapPin, Phone, Mail, ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#1a2332] text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="grid grid-cols-2 gap-0.5">
                <div className="h-3 w-3 rounded-sm bg-primary-light" />
                <div className="h-3 w-3 rounded-sm bg-primary-light" />
                <div className="h-3 w-3 rounded-sm bg-primary-light" />
                <div className="h-3 w-3 rounded-sm bg-primary" />
              </div>
              <span className="text-xl font-semibold tracking-wide">schiechl</span>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed max-w-xs">
              Dr. med. univ. et med. dent. Klaus Peter Schiechl MSc — Your trusted partner for dental health in Wolfsberg.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-300 mb-4">Quick Links</h3>
            <ul className="space-y-2.5">
              {["Home", "About", "Services", "Treatments", "Reviews", "Contact"].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-sm text-gray-400 hover:text-primary-light transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-300 mb-4">Services</h3>
            <ul className="space-y-2.5">
              {["Implantology", "Oral Surgery", "Periodontology", "Prosthetics", "Prophylaxis"].map((s) => (
                <li key={s}>
                  <a href="#services" className="text-sm text-gray-400 hover:text-primary-light transition-colors">
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-300 mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2.5">
                <MapPin className="h-4 w-4 text-primary-light mt-0.5 shrink-0" />
                <span className="text-sm text-gray-400">Roßmarkt 8, 9400 Wolfsberg, Austria</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="h-4 w-4 text-primary-light shrink-0" />
                <a href="tel:+4343523777" className="text-sm text-gray-400 hover:text-primary-light transition-colors">
                  +43 4352 37777
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="h-4 w-4 text-primary-light shrink-0" />
                <a href="mailto:office@dr-schiechl.at" className="text-sm text-gray-400 hover:text-primary-light transition-colors">
                  office@dr-schiechl.at
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-gray-500">
            © {new Date().getFullYear()} Dr. Klaus Peter Schiechl MSc. All rights reserved.
          </p>
          <button
            onClick={scrollToTop}
            className="h-9 w-9 rounded-lg bg-gray-800 hover:bg-primary flex items-center justify-center transition-colors"
            aria-label="Scroll to top"
          >
            <ArrowUp className="h-4 w-4 text-gray-400" />
          </button>
        </div>
      </div>
    </footer>
  );
}
