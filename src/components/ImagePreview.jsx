import { motion } from "framer-motion";
import { FileImage, RefreshCw } from "lucide-react";

import { buttonHover, scaleIn } from "../utils/motion";
import { formatFileSize } from "../utils/helpers";

export default function ImagePreview({ file, previewUrl, onRemove }) {
  return (
    <motion.div
      className="glass-card overflow-hidden rounded-[28px] border border-slate-200/70"
      variants={scaleIn}
      initial="hidden"
      animate="visible"
      transition={{ duration: 0.35 }}
    >
      <div className="relative aspect-[4/5] w-full bg-slate-950">
        {previewUrl ? (
          <img src={previewUrl} alt={file?.name ?? "Uploaded preview"} className="h-full w-full object-cover" />
        ) : (
          <div className="flex h-full flex-col items-center justify-center gap-3 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 px-6 text-center text-white">
            <FileImage className="h-14 w-14 text-white/70" />
            <p className="text-sm text-white/70">Your selected image preview will appear here.</p>
          </div>
        )}

        <div className="absolute inset-x-4 top-4 flex items-center justify-between rounded-full bg-black/35 px-4 py-2 text-xs font-medium text-white backdrop-blur-xl">
          <span className="truncate">{file?.name ?? "No image selected"}</span>
          <span>{file ? formatFileSize(file.size) : "0 KB"}</span>
        </div>
      </div>

      <div className="flex items-center justify-between gap-4 p-5">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">Preview</p>
          <p className="mt-1 text-sm text-slate-600">Crop-friendly framing helps the analysis stay consistent.</p>
        </div>

        <motion.button
          type="button"
          className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-slate-300 hover:text-slate-900"
          whileHover={buttonHover}
          whileTap={{ scale: 0.98 }}
          onClick={onRemove}
        >
          <RefreshCw className="h-4 w-4" />
          Reset
        </motion.button>
      </div>
    </motion.div>
  );
}
