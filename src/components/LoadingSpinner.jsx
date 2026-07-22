import { motion } from "framer-motion";

import { fadeIn, scaleIn } from "../utils/motion";

export default function LoadingSpinner({ label = "Analyzing your image" }) {
  return (
    <motion.div
      className="flex flex-col items-center justify-center gap-4 rounded-[28px] border border-slate-200/70 bg-white/80 px-8 py-12 text-center shadow-[0_24px_80px_rgba(15,23,42,0.08)] backdrop-blur-xl"
      variants={scaleIn}
      initial="hidden"
      animate="visible"
      transition={{ duration: 0.35 }}
    >
      <motion.div
        className="relative h-16 w-16"
        variants={fadeIn}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.45 }}
      >
        <div className="absolute inset-0 rounded-full border-4 border-slate-200" />
        <motion.div
          className="absolute inset-0 rounded-full border-4 border-indigo-600 border-t-transparent"
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
        />
      </motion.div>

      <div>
        <h3 className="text-lg font-semibold text-slate-900">{label}</h3>
        <p className="mt-1 text-sm text-slate-500">Reading facial signals and building a structured coaching plan.</p>
      </div>
    </motion.div>
  );
}
