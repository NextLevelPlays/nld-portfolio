/*
 * Design: Midnight Forge — Industrial Minimalism
 * Footer: Contact info, social links placeholders, copyright, thin cyan top border
 */
import { Mail, Phone, MapPin } from 'lucide-react';

const NLD_LOGO = 'https://d2xsxph8kpxj0f.cloudfront.net/310519663152740364/MiQBYzbv8KT7fLJyBs7oEx/nld_logo_8366c00c.jpg';

export default function Footer() {
  return (
    <footer className="relative border-t border-[#1e293b]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img
                src={NLD_LOGO}
                alt="Next Level Digital"
                className="h-10 w-auto rounded-md"
              />
              <div>
                <span className="font-sans font-bold text-white text-sm block">
                  Next Level Digital
                </span>
                <span className="font-body text-[#475569] text-xs">LLC</span>
              </div>
            </div>
            <p className="font-body text-[#94a3b8] text-sm leading-relaxed max-w-xs">
              Building AI-powered products that solve real problems for real people.
              Colorado born, digitally driven.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-sans font-semibold text-white text-sm mb-4 uppercase tracking-wider">
              Contact
            </h4>
            <div className="space-y-3">
              <a
                href="mailto:james.malocsay@l3vel3dup.com"
                className="flex items-center gap-3 text-[#94a3b8] hover:text-[#00d4ff] transition-colors font-body text-sm"
              >
                <Mail className="w-4 h-4 shrink-0" />
                james.malocsay@l3vel3dup.com
              </a>
              <a
                href="tel:+13037202276"
                className="flex items-center gap-3 text-[#94a3b8] hover:text-[#00d4ff] transition-colors font-body text-sm"
              >
                <Phone className="w-4 h-4 shrink-0" />
                1(303)-720-2276
              </a>
              <div className="flex items-start gap-3 text-[#94a3b8] font-body text-sm">
                <MapPin className="w-4 h-4 shrink-0 mt-0.5" />
                <span>32850 Highway 52<br />Keenesburg, CO 80643</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-sans font-semibold text-white text-sm mb-4 uppercase tracking-wider">
              Quick Links
            </h4>
            <div className="space-y-3">
              <a
                href="#about"
                className="block text-[#94a3b8] hover:text-[#00d4ff] transition-colors font-body text-sm"
              >
                About
              </a>
              <a
                href="#products"
                className="block text-[#94a3b8] hover:text-[#00d4ff] transition-colors font-body text-sm"
              >
                Products
              </a>
              <a
                href="#contact"
                className="block text-[#94a3b8] hover:text-[#00d4ff] transition-colors font-body text-sm"
              >
                Get Early Access
              </a>
              <a
                href="https://l3vel3dup.com"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-[#94a3b8] hover:text-[#00d4ff] transition-colors font-body text-sm"
              >
                l3vel3dup.com
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-[#1e293b] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-body text-[#475569] text-xs">
            &copy; {new Date().getFullYear()} Next Level Digital, LLC. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            {/* Social Placeholders */}
            {['X', 'LinkedIn', 'GitHub'].map((social) => (
              <button
                key={social}
                onClick={() => {
                  // toast placeholder
                }}
                className="text-[#475569] hover:text-[#00d4ff] transition-colors font-body text-xs"
                title={`${social} — Coming Soon`}
              >
                {social}
              </button>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
