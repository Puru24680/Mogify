import { motion } from "framer-motion";
import { CircleGauge, Sparkles } from "lucide-react";

import { scoreLabel } from "../utils/helpers";
import { scaleIn } from "../utils/motion";

export default function ScoreCard({ title = "Overall score", score = 0, description, accent = "indigo" }) {
  const accentStyles = {
    indigo: "from-indigo-600 to-violet-600",
    emerald: "from-emerald-500 to-cyan-500",
    amber: "from-amber-500 to-orange-500",
  };

  return (
    <motion.article
      className="surface-card relative overflow-hidden rounded-[28px] p-6"
      variants={scaleIn}
      initial="hidden"
      animate="visible"
      transition={{ duration: 0.35 }}
      whileHover={{ y: -5 }}
    >
      <div className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${accentStyles[accent] ?? accentStyles.indigo}`} />

      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-sm font-medium text-slate-500">{title}</p>
          <div className="mt-3 flex items-end gap-3">
            <span className="text-5xl font-semibold tracking-tight text-slate-900">{score}</span>
            <span className="pb-1 text-base font-semibold text-slate-500">/100</span>
          </div>
          <p className="mt-2 text-sm font-medium text-indigo-600">{scoreLabel(score)}</p>
        </div>

        <div className="rounded-[22px] bg-slate-900 p-4 text-white shadow-lg shadow-slate-900/15">
          <CircleGauge className="h-6 w-6" />
        </div>
      </div>

      {description ? <p className="mt-5 text-sm leading-6 text-slate-600">{description}</p> : null}

      <div className="mt-6 flex items-center gap-2 text-xs font-medium uppercase tracking-[0.25em] text-slate-400">
        <Sparkles className="h-4 w-4 text-indigo-500" />
        Premium appearance score
      </div>
    </motion.article>
  );
}