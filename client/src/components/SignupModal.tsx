/*
 * Design: Midnight Forge — Industrial Minimalism
 * Signup Modal: Slide-in drawer/modal for product-specific CTA signups
 */
import { useState } from 'react';
import { type Product } from '@/lib/products';
import { toast } from 'sonner';
import { X, Send, CheckCircle } from 'lucide-react';

interface SignupModalProps {
  product: Product | null;
  onClose: () => void;
}

export default function SignupModal({ product, onClose }: SignupModalProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  if (!product) return null;

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
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setLoading(false);
    setSubmitted(true);
    toast.success(`You're signed up for ${product.name}!`);
  };

  const handleClose = () => {
    setName('');
    setEmail('');
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={handleClose}
      />

      {/* Modal */}
      <div className="relative glass-card rounded-xl p-6 sm:p-8 max-w-md w-full animate-in fade-in zoom-in-95 duration-300 border border-[#00d4ff]/15">
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-[#475569] hover:text-white transition-colors"
        >
          <X size={20} />
        </button>

        {/* Product Header */}
        <div className="flex items-center gap-3 mb-6">
          {product.icon ? (
            <img
              src={product.icon}
              alt={product.name}
              className="w-12 h-12 rounded-lg object-contain bg-[#0b1120]/50 p-0.5"
            />
          ) : (
            <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#00d4ff]/15 to-[#0088cc]/10 border border-[#00d4ff]/20 flex items-center justify-center">
              <span className="font-sans font-bold text-[#00d4ff] text-sm">
                {product.name.charAt(0)}
              </span>
            </div>
          )}
          <div>
            <h3 className="font-sans font-bold text-white text-lg">{product.name}</h3>
            <p className="font-body text-[#00d4ff] text-xs">{product.tagline}</p>
          </div>
        </div>

        {submitted ? (
          <div className="text-center py-6">
            <CheckCircle className="w-12 h-12 text-[#22c55e] mx-auto mb-4" />
            <h4 className="font-sans font-bold text-white text-lg mb-2">You're In!</h4>
            <p className="font-body text-[#94a3b8] text-sm mb-6">
              We'll notify you about {product.name} updates and early access opportunities.
            </p>
            <button
              onClick={handleClose}
              className="btn-cyan px-6 py-2.5 rounded-md text-sm font-sans"
            >
              Done
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <div className="space-y-4 mb-6">
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

            <button
              type="submit"
              disabled={loading}
              className="btn-cyan w-full py-3 rounded-md text-sm font-sans flex items-center justify-center gap-2 disabled:opacity-50"
            >
              {loading ? (
                <span className="animate-spin w-4 h-4 border-2 border-[#0b1120] border-t-transparent rounded-full" />
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  {product.cta}
                </>
              )}
            </button>

            <p className="font-body text-[#475569] text-xs text-center mt-3">
              No spam. We respect your inbox.
            </p>
          </form>
        )}
      </div>
    </div>
  );
}
