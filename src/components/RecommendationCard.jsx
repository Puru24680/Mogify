import { motion } from "framer-motion";
import { CheckCircle2, Sparkles } from "lucide-react";

import { scaleIn } from "../utils/motion";

export default function RecommendationCard({ title, description, items = [], icon: Icon = Sparkles, tone = "indigo" }) {
  const toneStyles = {
    indigo: "text-indigo-600 bg-indigo-50",
    violet: "text-violet-600 bg-violet-50",
    emerald: "text-emerald-600 bg-emerald-50",
    amber: "text-amber-600 bg-amber-50",
  };

  return (
    <motion.article
      className="surface-card rounded-[24px] p-6"
      variants={scaleIn}
      initial="hidden"
      animate="visible"
      transition={{ duration: 0.35 }}
      whileHover={{ y: -4 }}
    >
      <div className={`inline-flex h-12 w-12 items-center justify-center rounded-2xl ${toneStyles[tone] ?? toneStyles.indigo}`}>
        <Icon className="h-5 w-5" />
      </div>

      <h3 className="mt-5 text-xl font-semibold tracking-tight text-slate-900">{title}</h3>
      <p className="mt-3 text-sm leading-6 text-slate-600">{description}</p>

      <ul className="mt-5 space-y-3">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-3 text-sm leading-6 text-slate-700">
            <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-500" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </motion.article>
  );
}