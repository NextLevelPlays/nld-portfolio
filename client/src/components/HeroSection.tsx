/*
 * Design: Midnight Forge — Industrial Minimalism
 * Hero: Full-viewport, generated dark tech background, NLD logo centered,
 * bold headline, founder tagline, CTA button
 */
import { useEffect, useState } from 'react';
import { ChevronDown } from 'lucide-react';

const HERO_BG = 'https://d2xsxph8kpxj0f.cloudfront.net/310519663152740364/MiQBYzbv8KT7fLJyBs7oEx/hero_bg-ZbzRqgcUUVNZ95yNHoHPhc.webp';
const NLD_LOGO = 'https://d2xsxph8kpxj0f.cloudfront.net/310519663152740364/MiQBYzbv8KT7fLJyBs7oEx/nld_logo_8366c00c.jpg';

export default function HeroSection() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${HERO_BG})` }}
      />
      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0b1120]/60 via-[#0b1120]/30 to-[#0b1120]" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#0b1120]/40 via-transparent to-[#0b1120]/40" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        {/* Logo */}
        <div
          className={`mb-8 transition-all duration-1000 ${
            loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <img
            src={NLD_LOGO}
            alt="Next Level Digital, LLC"
            className="h-20 sm:h-28 w-auto mx-auto rounded-lg shadow-2xl shadow-[#00d4ff]/10"
          />
        </div>

        {/* Company Name */}
        <h1
          className={`font-sans font-bold text-4xl sm:text-5xl md:text-7xl text-white mb-4 tracking-tight transition-all duration-1000 delay-200 ${
            loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          Next Level{' '}
          <span className="gradient-text">Digital</span>
        </h1>

        {/* Tagline */}
        <p
          className={`font-body text-[#94a3b8] text-lg sm:text-xl md:text-2xl mb-3 font-light tracking-wide transition-all duration-1000 delay-400 ${
            loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          Solo founder. 9 products. 2 years. All AI-powered.
        </p>

        {/* Subtitle */}
        <p
          className={`font-body text-[#475569] text-sm sm:text-base mb-10 max-w-xl mx-auto transition-all duration-1000 delay-500 ${
            loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          Building the future of digital products from Colorado.
        </p>

        {/* CTA Buttons */}
        <div
          className={`flex flex-col sm:flex-row items-center justify-center gap-4 transition-all duration-1000 delay-700 ${
            loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <a
            href="#products"
            className="btn-cyan px-8 py-3.5 rounded-md text-base font-sans inline-block"
          >
            Explore Our Products
          </a>
          <a
            href="#about"
            className="px-8 py-3.5 rounded-md text-base font-sans text-[#94a3b8] border border-[#94a3b8]/20 hover:border-[#00d4ff]/40 hover:text-[#00d4ff] transition-all duration-300 inline-block"
          >
            Our Story
          </a>
        </div>

        {/* Stats Row */}
        <div
          className={`mt-16 flex items-center justify-center gap-8 sm:gap-16 transition-all duration-1000 delay-[900ms] ${
            loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <div className="text-center">
            <div className="font-sans font-bold text-2xl sm:text-3xl text-white">9</div>
            <div className="font-body text-[#475569] text-xs sm:text-sm mt-1">Products</div>
          </div>
          <div className="w-px h-10 bg-[#1e293b]" />
          <div className="text-center">
            <div className="font-sans font-bold text-2xl sm:text-3xl text-white">3</div>
            <div className="font-body text-[#475569] text-xs sm:text-sm mt-1">In Beta/Live</div>
          </div>
          <div className="w-px h-10 bg-[#1e293b]" />
          <div className="text-center">
            <div className="font-sans font-bold text-2xl sm:text-3xl text-white">100%</div>
            <div className="font-body text-[#475569] text-xs sm:text-sm mt-1">AI-Powered</div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <a href="#about" className="text-[#475569] hover:text-[#00d4ff] transition-colors">
          <ChevronDown size={28} />
        </a>
      </div>
    </section>
  );
}
