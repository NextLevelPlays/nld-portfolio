/*
 * Design: Midnight Forge — Industrial Minimalism
 * About: Colorado mountain background, founder story, split layout
 */
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const ABOUT_BG = 'https://d2xsxph8kpxj0f.cloudfront.net/310519663152740364/MiQBYzbv8KT7fLJyBs7oEx/about_bg-nmSrC5dyUG3s5fYFxVMbT2.webp';

export default function AboutSection() {
  const { ref: sectionRef, isVisible } = useScrollAnimation(0.15);

  return (
    <section id="about" className="relative py-24 sm:py-32 overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
        style={{ backgroundImage: `url(${ABOUT_BG})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#0b1120] via-[#0b1120]/80 to-[#0b1120]" />

      <div ref={sectionRef} className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Label */}
        <div
          className={`mb-4 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <span className="font-mono text-[#00d4ff] text-xs tracking-[0.3em] uppercase">
            The Story
          </span>
        </div>

        <h2
          className={`font-sans font-bold text-3xl sm:text-4xl md:text-5xl text-white mb-12 transition-all duration-700 delay-100 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          Built by a Builder
        </h2>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
          {/* Left: Story */}
          <div
            className={`space-y-6 transition-all duration-700 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            <p className="font-body text-[#94a3b8] text-base sm:text-lg leading-relaxed">
              James Malocsay is a Colorado native, outdoorsman, and serial entrepreneur who
              doesn't wait for permission to build. While working full-time as an HVAC/R
              technician, he taught himself product design and software engineering — then
              started shipping.
            </p>
            <p className="font-body text-[#94a3b8] text-base sm:text-lg leading-relaxed">
              In under two years, James has designed, developed, and launched{' '}
              <span className="text-white font-medium">9 AI-powered digital products</span>{' '}
              spanning outdoor safety, contractor tools, personal development, social gaming,
              and AI entertainment — all as a solo founder.
            </p>
            <p className="font-body text-[#94a3b8] text-base sm:text-lg leading-relaxed">
              Next Level Digital, LLC isn't backed by venture capital or built by a team of 50.
              It's one person with a vision, a relentless work ethic, and the belief that
              technology should solve real problems for real people.
            </p>
          </div>

          {/* Right: Key Facts */}
          <div
            className={`space-y-6 transition-all duration-700 delay-400 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            <div className="glass-card rounded-lg p-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-md bg-[#00d4ff]/10 flex items-center justify-center shrink-0 mt-1">
                  <svg className="w-5 h-5 text-[#00d4ff]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-sans font-semibold text-white text-base mb-1">Colorado Born & Built</h3>
                  <p className="font-body text-[#94a3b8] text-sm leading-relaxed">
                    Based in Keenesburg, CO — drawing inspiration from the mountains, trails, and
                    the rugged independence of the West.
                  </p>
                </div>
              </div>
            </div>

            <div className="glass-card rounded-lg p-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-md bg-[#00d4ff]/10 flex items-center justify-center shrink-0 mt-1">
                  <svg className="w-5 h-5 text-[#00d4ff]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-sans font-semibold text-white text-base mb-1">Self-Taught Engineer</h3>
                  <p className="font-body text-[#94a3b8] text-sm leading-relaxed">
                    From HVAC technician to product designer and software engineer — proof that
                    drive beats degrees.
                  </p>
                </div>
              </div>
            </div>

            <div className="glass-card rounded-lg p-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-md bg-[#00d4ff]/10 flex items-center justify-center shrink-0 mt-1">
                  <svg className="w-5 h-5 text-[#00d4ff]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-sans font-semibold text-white text-base mb-1">AI-First Philosophy</h3>
                  <p className="font-body text-[#94a3b8] text-sm leading-relaxed">
                    Every product leverages artificial intelligence to deliver smarter, faster,
                    and more personalized experiences.
                  </p>
                </div>
              </div>
            </div>

            <div className="glass-card rounded-lg p-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-md bg-[#00d4ff]/10 flex items-center justify-center shrink-0 mt-1">
                  <svg className="w-5 h-5 text-[#00d4ff]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-sans font-semibold text-white text-base mb-1">9 Products in 2 Years</h3>
                  <p className="font-body text-[#94a3b8] text-sm leading-relaxed">
                    Shipping at a pace that most funded startups can't match — because
                    bureaucracy doesn't live here.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
