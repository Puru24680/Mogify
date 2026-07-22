import { motion } from "framer-motion";

import { scaleIn } from "../utils/motion";

export default function AnalysisCard({ title, score, description, tone = "indigo", icon }) {
  const toneClasses = {
    indigo: "from-indigo-500/15 to-indigo-500/5 text-indigo-600",
    violet: "from-violet-500/15 to-violet-500/5 text-violet-600",
    emerald: "from-emerald-500/15 to-emerald-500/5 text-emerald-600",
    amber: "from-amber-500/15 to-amber-500/5 text-amber-600",
  };

  return (
    <motion.article
      className="surface-card rounded-[24px] p-5 shadow-[0_18px_60px_rgba(15,23,42,0.06)]"
      variants={scaleIn}
      initial="hidden"
      animate="visible"
      transition={{ duration: 0.35 }}
      whileHover={{ y: -4 }}
    >
      <div className={`rounded-2xl bg-gradient-to-br p-4 ${toneClasses[tone] ?? toneClasses.indigo}`}>
        <div className="flex items-center justify-between gap-3">
          <div>
            <p className="text-sm font-medium text-slate-500">{title}</p>
            <p className="mt-1 text-3xl font-semibold tracking-tight text-slate-900">{score}</p>
          </div>
          {icon ? <div className="rounded-2xl bg-white/80 p-3 shadow-sm">{icon}</div> : null}
        </div>

        <p className="mt-4 text-sm leading-6 text-slate-600">{description}</p>
      </div>
    </motion.article>
  );
}
