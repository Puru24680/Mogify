import { motion } from "framer-motion";
import { ArrowRight, ScanFace } from "lucide-react";
import { Link } from "react-router-dom";

import { buttonHover, fadeUp, viewportOnce } from "../utils/motion";

export default function CTA() {
  return (
    <section className="pb-24 sm:pb-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="glass-card relative overflow-hidden rounded-[32px] px-6 py-12 sm:px-10 sm:py-16"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          transition={{ duration: 0.55 }}
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(79,70,229,0.12),_transparent_28%),radial-gradient(circle_at_bottom_right,_rgba(124,58,237,0.12),_transparent_28%)]" />
          <div className="relative flex flex-col items-start gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-indigo-600">Get started</p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-5xl text-balance">
                Start building a sharper, more intentional presence today.
              </h2>
              <p className="mt-4 text-base leading-7 text-slate-600 sm:text-lg">
                Create your profile, upload a clear image, and turn Mogify into your personal coaching workflow for appearance, grooming, and progress tracking.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <motion.div whileHover={buttonHover} whileTap={{ scale: 0.98 }}>
                <Link
                  to="/register"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-slate-900 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-slate-900/15 transition hover:bg-slate-800"
                >
                  Create account
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </motion.div>

              <motion.div whileHover={buttonHover} whileTap={{ scale: 0.98 }}>
                <Link
                  to="/analysis"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-200 bg-white px-6 py-3.5 text-sm font-semibold text-slate-700 transition hover:border-slate-300 hover:text-slate-900"
                >
                  <ScanFace className="h-4 w-4 text-indigo-600" />
                  Try analysis
                </Link>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
