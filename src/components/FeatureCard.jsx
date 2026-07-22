import { motion } from "framer-motion";

import { cardHover, scaleIn } from "../utils/motion";

export default function FeatureCard({ icon: Icon, title, description }) {
  return (
    <motion.article
      className="surface-card rounded-[26px] p-6"
      variants={scaleIn}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.18 }}
      transition={{ duration: 0.35 }}
      whileHover={cardHover}
    >
      <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-50 to-violet-50 text-indigo-600 shadow-sm">
        <Icon className="h-5 w-5" />
      </div>

      <h3 className="mt-5 text-xl font-semibold tracking-tight text-slate-900">{title}</h3>
      <p className="mt-3 text-sm leading-6 text-slate-600">{description}</p>
    </motion.article>
  );
}