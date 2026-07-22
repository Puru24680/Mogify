import { motion } from "framer-motion";
import { Upload } from "lucide-react";

import { scaleIn } from "../utils/motion";

export default function UploadCard({ title, description, children }) {
  return (
    <motion.section
      className="surface-card rounded-[28px] p-6"
      variants={scaleIn}
      initial="hidden"
      animate="visible"
      transition={{ duration: 0.35 }}
    >
      <div className="mb-5 flex items-center gap-3">
        <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-indigo-50 text-indigo-600">
          <Upload className="h-5 w-5" />
        </div>
        <div>
          <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
          {description ? <p className="text-sm text-slate-500">{description}</p> : null}
        </div>
      </div>

      {children}
    </motion.section>
  );
}
