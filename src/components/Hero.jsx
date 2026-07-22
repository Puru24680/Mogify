import { motion } from "framer-motion";
import { ArrowRight, ScanFace, ShieldCheck, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

import { buttonHover, fadeUp, scaleIn, staggerContainer, staggerItem } from "../utils/motion";
import { heroMetrics } from "../utils/content";

function Hero() {
  return (
    <section className="relative overflow-hidden pt-10 sm:pt-16 lg:pt-20">
      <div className="absolute inset-0 -z-10 grid-overlay opacity-30" />
      <div className="absolute left-1/2 top-0 -z-10 h-[28rem] w-[28rem] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,_rgba(79,70,229,0.2),_transparent_68%)] blur-3xl" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-14 lg:grid-cols-[1.02fr_0.98fr] lg:items-center">
          <motion.div variants={fadeUp} initial="hidden" animate="visible" transition={{ duration: 0.6 }}>
            <div className="inline-flex items-center gap-2 rounded-full border border-slate-200/80 bg-white/80 px-4 py-2 text-sm font-medium text-slate-600 shadow-sm backdrop-blur-xl">
              <Sparkles className="h-4 w-4 text-indigo-500" />
              AI powered appearance coaching
            </div>

            <h1 className="mt-6 max-w-3xl text-5xl font-semibold tracking-tight text-slate-900 sm:text-6xl lg:text-7xl text-balance">
              Become the best version of yourself.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600 sm:text-xl">
              Mogify is a professional AI appearance coach that transforms a single image into polished analysis, grooming direction, hairstyle guidance, skincare planning, and measurable progress tracking.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <motion.div whileHover={buttonHover} whileTap={{ scale: 0.98 }}>
                <Link to="/analysis" className="inline-flex items-center justify-center gap-2 rounded-full bg-slate-900 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-slate-900/15 transition hover:bg-slate-800">
                  Start analysis
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </motion.div>

              <motion.a href="#features" className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-200 bg-white px-6 py-3.5 text-sm font-semibold text-slate-700 transition hover:border-slate-300 hover:text-slate-900" whileHover={buttonHover} whileTap={{ scale: 0.98 }}>
                Explore features
              </motion.a>
            </div>

            <motion.div className="mt-10 grid max-w-2xl grid-cols-1 gap-3 sm:grid-cols-3" variants={staggerContainer} initial="hidden" animate="visible">
              {heroMetrics.map((metric) => (
                <motion.div key={metric.label} variants={staggerItem} className="glass-card rounded-[24px] px-5 py-4">
                  <p className="text-sm text-slate-500">{metric.label}</p>
                  <p className="mt-2 text-2xl font-semibold tracking-tight text-slate-900">{metric.value}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div className="relative" variants={scaleIn} initial="hidden" animate="visible" transition={{ duration: 0.6 }}>
            <div className="absolute -left-8 top-10 h-32 w-32 rounded-full bg-indigo-500/15 blur-3xl" />
            <div className="absolute -right-6 bottom-12 h-40 w-40 rounded-full bg-violet-500/15 blur-3xl" />

            <div className="glass-card relative overflow-hidden rounded-[36px] p-5 sm:p-6">
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-indigo-500 via-violet-500 to-fuchsia-500" />

              <div className="rounded-[28px] border border-white/70 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 p-6 text-white shadow-2xl shadow-slate-950/20 sm:p-8">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.28em] text-white/55">Live preview</p>
                    <h2 className="mt-3 text-2xl font-semibold tracking-tight">Professional AI appearance report</h2>
                  </div>
                  <div className="rounded-2xl bg-white/10 p-3 backdrop-blur">
                    <ShieldCheck className="h-6 w-6 text-emerald-300" />
                  </div>
                </div>

                <div className="mt-8 grid gap-4 sm:grid-cols-[0.95fr_1.05fr]">
                  <div className="rounded-[28px] bg-white/6 p-4 ring-1 ring-white/10">
                    <div className="aspect-[4/5] rounded-[22px] bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.16),_rgba(255,255,255,0.04)_55%),linear-gradient(180deg,rgba(15,23,42,0.2),rgba(15,23,42,0.65))] p-4">
                      <div className="flex h-full flex-col justify-between rounded-[18px] border border-white/10 p-4 backdrop-blur-sm">
                        <div className="flex items-center justify-between text-xs text-white/65">
                          <span>Analysis portrait</span>
                          <span>1280 × 1600</span>
                        </div>
                        <div>
                          <p className="text-sm text-white/65">Mogify score</p>
                          <p className="mt-2 text-5xl font-semibold tracking-tight">92</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="grid gap-4">
                    <div className="rounded-[24px] border border-white/10 bg-white/6 p-5 backdrop-blur-sm">
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-white/65">Facial symmetry</span>
                        <span className="text-lg font-semibold">96%</span>
                      </div>
                      <div className="mt-3 h-2 rounded-full bg-white/10">
                        <div className="h-2 w-[96%] rounded-full bg-gradient-to-r from-indigo-400 to-violet-400" />
                      </div>
                    </div>

                    <div className="rounded-[24px] border border-white/10 bg-white/6 p-5 backdrop-blur-sm">
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-white/65">Grooming potential</span>
                        <span className="text-lg font-semibold">94%</span>
                      </div>
                      <div className="mt-3 h-2 rounded-full bg-white/10">
                        <div className="h-2 w-[94%] rounded-full bg-gradient-to-r from-emerald-400 to-cyan-400" />
                      </div>
                    </div>

                    <div className="rounded-[24px] border border-white/10 bg-white/6 p-5 backdrop-blur-sm">
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-white/65">Hair direction</span>
                        <span className="text-lg font-semibold">91%</span>
                      </div>
                      <div className="mt-3 h-2 rounded-full bg-white/10">
                        <div className="h-2 w-[91%] rounded-full bg-gradient-to-r from-amber-400 to-orange-400" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-6 -left-6 hidden rounded-[22px] border border-white/70 bg-white/90 px-4 py-3 shadow-lg shadow-slate-900/10 backdrop-blur-xl md:block">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">Result</p>
              <div className="mt-2 flex items-center gap-2">
                <ScanFace className="h-5 w-5 text-indigo-600" />
                <span className="text-sm font-semibold text-slate-900">Elite coaching stack</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Hero;