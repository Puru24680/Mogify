import { motion } from "framer-motion";
import { BadgeCheck, BrainCircuit, Upload } from "lucide-react";

import { fadeUp, staggerContainer, staggerItem, viewportOnce } from "../utils/motion";

const steps = [
  {
    icon: Upload,
    title: "Upload a clear image",
    desc: "Drop in a front-facing portrait so Mogify can evaluate the major visual signals cleanly.",
  },
  {
    icon: BrainCircuit,
    title: "Run the AI analysis",
    desc: "The model scores symmetry, jawline, eyes, hair, skin, and overall appearance potential.",
  },
  {
    icon: BadgeCheck,
    title: "Apply the coaching plan",
    desc: "Use the hairstyle, beard, fashion, and skincare suggestions to build a better routine.",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div className="mx-auto max-w-2xl text-center" variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewportOnce} transition={{ duration: 0.55 }}>
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-indigo-600">How it works</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-5xl text-balance">
            A simple flow designed for a premium coaching experience.
          </h2>
        </motion.div>

        <motion.div className="mt-14 grid gap-5 lg:grid-cols-3" variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewportOnce}>
          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <motion.div key={step.title} variants={staggerItem} className="surface-card rounded-[28px] p-6">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-50 to-violet-50 text-indigo-600 shadow-sm">
                  <Icon className="h-6 w-6" />
                </div>
                <p className="mt-5 text-sm font-semibold uppercase tracking-[0.22em] text-slate-400">0{index + 1}</p>
                <h3 className="mt-3 text-xl font-semibold tracking-tight text-slate-900">{step.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{step.desc}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}