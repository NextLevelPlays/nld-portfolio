/*
 * Design: Midnight Forge — Industrial Minimalism
 * Contact/CTA: Full-width section with tech background, email signup form
 */
import { useState } from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { toast } from 'sonner';
import { Send, CheckCircle } from 'lucide-react';

const CTA_BG = 'https://d2xsxph8kpxj0f.cloudfront.net/310519663152740364/MiQBYzbv8KT7fLJyBs7oEx/cta_bg-J4LtwzDVbqbwAi9Gt4oK5X.webp';

export default function ContactSection() {
  const { ref, isVisible } = useScrollAnimation(0.15);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [interest, setInterest] = useState('general');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim()) {
      toast.error('Please fill in all fields');
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      toast.error('Please enter a valid email address');
      return;
    }

    setLoading(true);
    // Simulate form submission (static site — no backend)
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setLoading(false);
    setSubmitted(true);
    toast.success('You\'re on the list! We\'ll be in touch soon.');
  };

  return (
    <section id="contact" className="relative py-24 sm:py-32 overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40"
        style={{ backgroundImage: `url(${CTA_BG})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#0b1120] via-[#0b1120]/70 to-[#0b1120]" />

      <div ref={ref} className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span
          className={`font-mono text-[#00d4ff] text-xs tracking-[0.3em] uppercase block mb-4 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          Stay Connected
        </span>

        <h2
          className={`font-sans font-bold text-3xl sm:text-4xl md:text-5xl text-white mb-4 transition-all duration-700 delay-100 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          Get on the List
        </h2>

        <p
          className={`font-body text-[#94a3b8] text-base sm:text-lg mb-10 max-w-xl mx-auto transition-all duration-700 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          Be the first to know when new products launch, get early access pricing,
          and join the Next Level Digital community.
        </p>

        {submitted ? (
          <div
            className={`glass-card rounded-xl p-8 sm:p-10 transition-all duration-700 delay-300 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            <CheckCircle className="w-12 h-12 text-[#22c55e] mx-auto mb-4" />
            <h3 className="font-sans font-bold text-white text-xl mb-2">You're In!</h3>
            <p className="font-body text-[#94a3b8] text-sm">
              Thanks for signing up, {name}. We'll keep you posted on everything Next Level Digital.
            </p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className={`glass-card rounded-xl p-6 sm:p-8 text-left transition-all duration-700 delay-300 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            <div className="grid sm:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block font-body text-[#94a3b8] text-xs mb-1.5 uppercase tracking-wider">
                  Name
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your name"
                  className="w-full bg-[#0b1120]/60 border border-[#1e293b] rounded-md px-4 py-3 text-white font-body text-sm placeholder:text-[#475569] focus:border-[#00d4ff]/50 focus:outline-none focus:ring-1 focus:ring-[#00d4ff]/30 transition-all"
                  required
                />
              </div>
              <div>
                <label className="block font-body text-[#94a3b8] text-xs mb-1.5 uppercase tracking-wider">
                  Email
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  className="w-full bg-[#0b1120]/60 border border-[#1e293b] rounded-md px-4 py-3 text-white font-body text-sm placeholder:text-[#475569] focus:border-[#00d4ff]/50 focus:outline-none focus:ring-1 focus:ring-[#00d4ff]/30 transition-all"
                  required
                />
              </div>
            </div>

            <div className="mb-6">
              <label className="block font-body text-[#94a3b8] text-xs mb-1.5 uppercase tracking-wider">
                I'm most interested in
              </label>
              <select
                value={interest}
                onChange={(e) => setInterest(e.target.value)}
                className="w-full bg-[#0b1120]/60 border border-[#1e293b] rounded-md px-4 py-3 text-white font-body text-sm focus:border-[#00d4ff]/50 focus:outline-none focus:ring-1 focus:ring-[#00d4ff]/30 transition-all appearance-none"
              >
                <option value="general">All Products — Keep Me Updated</option>
                <option value="hiked">HIKED — Outdoor Safety</option>
                <option value="projectpro">Project Pro — Contractor Estimating</option>
                <option value="myguideai">My Guide AI — Navigation</option>
                <option value="trunu">TruNu — Habit Coaching</option>
                <option value="spillit">SpillIt! — Secrets Game</option>
                <option value="roastme">RoastME AI — Comedy Roast</option>
                <option value="screenclean">Screen Clean — Call Screener</option>
                <option value="botstopper">Bot Stopper — Scam Detection</option>
                <option value="mystories">My Stories — Bedtime Stories</option>
              </select>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="btn-cyan w-full py-3.5 rounded-md text-sm font-sans flex items-center justify-center gap-2 disabled:opacity-50"
            >
              {loading ? (
                <span className="animate-spin w-4 h-4 border-2 border-[#0b1120] border-t-transparent rounded-full" />
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  Join the List
                </>
              )}
            </button>

            <p className="font-body text-[#475569] text-xs text-center mt-4">
              No spam. Unsubscribe anytime. Your data stays with us.
            </p>
          </form>
        )}
      </div>
    </section>
  );
}
