/*
 * Design: Midnight Forge — Industrial Minimalism
 * Navbar: Fixed top, glass-morphism background, NLD logo left, nav links right
 * Subtle border-bottom glow on scroll
 */
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const NLD_LOGO = 'https://d2xsxph8kpxj0f.cloudfront.net/310519663152740364/MiQBYzbv8KT7fLJyBs7oEx/nld_logo_8366c00c.jpg';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Products', href: '#products' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-[#0b1120]/90 backdrop-blur-xl border-b border-[#00d4ff]/10 shadow-lg shadow-black/20'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <img
              src={NLD_LOGO}
              alt="Next Level Digital"
              className="h-9 sm:h-11 w-auto rounded-md"
            />
            <div className="hidden sm:block">
              <span className="text-white font-sans font-bold text-base tracking-wide">
                Next Level Digital
              </span>
              <span className="block text-[#94a3b8] text-[11px] tracking-widest uppercase font-body">
                LLC
              </span>
            </div>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[#94a3b8] hover:text-[#00d4ff] transition-colors duration-300 text-sm font-body font-medium tracking-wide"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="btn-cyan px-5 py-2 rounded-md text-sm font-sans"
            >
              Get Early Access
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden text-[#94a3b8] hover:text-[#00d4ff] transition-colors"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          mobileOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-[#0b1120]/95 backdrop-blur-xl border-t border-[#00d4ff]/10 px-4 py-4 space-y-3">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="block text-[#94a3b8] hover:text-[#00d4ff] transition-colors duration-300 text-sm font-body font-medium py-2"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMobileOpen(false)}
            className="btn-cyan block text-center px-5 py-2.5 rounded-md text-sm font-sans mt-2"
          >
            Get Early Access
          </a>
        </div>
      </div>
    </nav>
  );
}
