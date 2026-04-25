import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Treatments", href: "#treatments" },
  { label: "Reviews", href: "#reviews" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 sm:h-20 items-center justify-between">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2 shrink-0">
            <div className="flex items-center gap-1.5">
              <div className="grid grid-cols-2 gap-0.5">
                <div className="h-3 w-3 rounded-sm bg-primary-light" />
                <div className="h-3 w-3 rounded-sm bg-primary-light" />
                <div className="h-3 w-3 rounded-sm bg-primary-light" />
                <div className="h-3 w-3 rounded-sm bg-primary" />
              </div>
              <span className={`text-lg sm:text-xl font-semibold tracking-wide transition-colors ${scrolled ? "text-text-dark" : "text-white"}`}>
                schiechl
              </span>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`px-3 py-2 text-sm font-medium rounded-lg transition-colors hover:bg-primary/10 ${
                  scrolled
                    ? "text-text-mid hover:text-primary-dark"
                    : "text-white/90 hover:text-white"
                }`}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#appointment"
              className="ml-3 inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-white shadow-md hover:bg-primary-dark transition-colors"
            >
              <Phone className="h-4 w-4" />
              Appointment
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`lg:hidden p-2 rounded-lg transition-colors ${
              scrolled ? "text-text-dark" : "text-white"
            }`}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="lg:hidden bg-white shadow-lg border-t border-gray-100 animate-fade-in">
          <div className="px-4 py-3 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-4 py-2.5 text-sm font-medium text-text-mid rounded-lg hover:bg-bg-section hover:text-primary-dark transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#appointment"
              onClick={() => setIsOpen(false)}
              className="block mt-2 text-center rounded-lg bg-primary px-4 py-2.5 text-sm font-semibold text-white hover:bg-primary-dark transition-colors"
            >
              Book Appointment
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
