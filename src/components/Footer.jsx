import { Link } from "react-router-dom";

import { publicLinks } from "../utils/content";

function Footer() {
  return (
    <footer className="border-t border-slate-200/70 bg-white/80">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.3fr_0.7fr]">
          <div>
            <Link to="/" className="text-2xl font-semibold tracking-tight text-slate-900">
              Mogify
            </Link>
            <p className="mt-4 max-w-xl text-sm leading-7 text-slate-600 sm:text-base">
              Mogify is a premium AI appearance coach for facial analysis, grooming direction, skincare planning, hairstyle suggestions, and progress tracking.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8 text-sm">
            <div>
              <h3 className="font-semibold text-slate-900">Navigation</h3>
              <div className="mt-4 space-y-3 text-slate-600">
                {publicLinks.slice(0, 3).map((link) => (
                  <a key={link.label} href={link.href} className="block transition hover:text-slate-900">
                    {link.label}
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-slate-900">Account</h3>
              <div className="mt-4 space-y-3 text-slate-600">
                <Link to="/login" className="block transition hover:text-slate-900">
                  Login
                </Link>
                <Link to="/register" className="block transition hover:text-slate-900">
                  Register
                </Link>
                <Link to="/dashboard" className="block transition hover:text-slate-900">
                  Dashboard
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-slate-200/70 pt-6 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Mogify. Built for a modern portfolio-grade SaaS experience.</p>
          <p>React, Vite, Tailwind CSS v4, Framer Motion, and Lucide React.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;