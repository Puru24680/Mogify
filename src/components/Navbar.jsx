import { useState } from "react";

import { motion } from "framer-motion";
import { ArrowRight, Menu, ScanFace, X } from "lucide-react";
import { Link } from "react-router-dom";

import { publicLinks } from "../utils/content";
import { buttonHover } from "../utils/motion";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/60 bg-white/70 backdrop-blur-2xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-2 text-lg font-semibold tracking-tight text-slate-900">
          <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-slate-900 text-white shadow-lg shadow-slate-900/15">
            <ScanFace className="h-5 w-5" />
          </span>
          Mogify
        </Link>

        <div className="hidden items-center gap-2 md:flex">
          {publicLinks.map((link) =>
            link.href.startsWith("/") ? (
              <Link key={link.label} to={link.href} className="rounded-full px-4 py-2 text-sm font-medium text-slate-600 transition hover:bg-slate-100 hover:text-slate-900">
                {link.label}
              </Link>
            ) : (
              <a key={link.label} href={link.href} className="rounded-full px-4 py-2 text-sm font-medium text-slate-600 transition hover:bg-slate-100 hover:text-slate-900">
                {link.label}
              </a>
            ),
          )}

          <motion.div whileHover={buttonHover} whileTap={{ scale: 0.98 }}>
            <Link to="/analysis" className="ml-2 inline-flex items-center gap-2 rounded-full bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-slate-900/15 transition hover:bg-slate-800">
              Start analysis
              <ArrowRight className="h-4 w-4" />
            </Link>
          </motion.div>
        </div>

        <button type="button" className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 md:hidden" onClick={() => setOpen((current) => !current)} aria-label="Toggle navigation">
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {open ? (
        <div className="border-t border-slate-200/70 bg-white/95 px-4 py-4 backdrop-blur-2xl md:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-2">
            {publicLinks.map((link) =>
              link.href.startsWith("/") ? (
                <Link key={link.label} to={link.href} onClick={() => setOpen(false)} className="rounded-2xl px-4 py-3 text-sm font-medium text-slate-600 transition hover:bg-slate-100 hover:text-slate-900">
                  {link.label}
                </Link>
              ) : (
                <a key={link.label} href={link.href} onClick={() => setOpen(false)} className="rounded-2xl px-4 py-3 text-sm font-medium text-slate-600 transition hover:bg-slate-100 hover:text-slate-900">
                  {link.label}
                </a>
              ),
            )}
            <Link to="/analysis" onClick={() => setOpen(false)} className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-slate-900 px-5 py-3 text-sm font-semibold text-white">
              Start analysis
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      ) : null}
    </header>
  );
}

export default Navbar;