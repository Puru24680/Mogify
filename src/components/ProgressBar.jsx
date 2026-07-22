import { motion } from "framer-motion";

import { scaleIn } from "../utils/motion";

export default function ProgressBar({ label, value, tone = "indigo" }) {
  const progressTone = {
    indigo: "from-indigo-500 to-violet-500",
    emerald: "from-emerald-500 to-cyan-500",
    amber: "from-amber-500 to-orange-500",
    rose: "from-rose-500 to-fuchsia-500",
  };

  return (
    <motion.div variants={scaleIn} initial="hidden" animate="visible" transition={{ duration: 0.35 }} className="space-y-2">
      <div className="flex items-center justify-between gap-3 text-sm">
        <span className="font-medium text-slate-700">{label}</span>
        <span className="font-semibold text-slate-900">{value}%</span>
      </div>

      <div className="h-2 rounded-full bg-slate-200/90">
        <motion.div
          className={`h-2 rounded-full bg-gradient-to-r ${progressTone[tone] ?? progressTone.indigo}`}
          initial={{ width: 0 }}
          whileInView={{ width: `${value}%` }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        />
      </div>
    </motion.div>
  );
}