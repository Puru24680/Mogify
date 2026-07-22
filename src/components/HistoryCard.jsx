import { motion } from "framer-motion";
import { Clock3, ExternalLink } from "lucide-react";

import { cardHover, scaleIn } from "../utils/motion";
import { formatDateTime, formatFileSize, scoreLabel } from "../utils/helpers";

export default function HistoryCard({ record, onOpen }) {
  return (
    <motion.article
      className="surface-card overflow-hidden rounded-[26px]"
      variants={scaleIn}
      initial="hidden"
      animate="visible"
      transition={{ duration: 0.35 }}
      whileHover={cardHover}
    >
      <div className="flex flex-col gap-4 p-5 sm:flex-row sm:items-start sm:justify-between">
        <div className="min-w-0">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">
            <Clock3 className="h-4 w-4" />
            {formatDateTime(record.createdAt)}
          </div>
          <h3 className="mt-3 truncate text-lg font-semibold text-slate-900">{record.fileName}</h3>
          <p className="mt-2 text-sm leading-6 text-slate-600">{record.summary}</p>
        </div>

        <div className="flex shrink-0 flex-col items-start gap-2 sm:items-end">
          <div className="rounded-full bg-slate-900 px-3 py-1 text-sm font-semibold text-white">{record.overallScore}/100</div>
          <div className="text-sm font-medium text-slate-500">{scoreLabel(record.overallScore)}</div>
          <div className="text-xs text-slate-400">{formatFileSize(record.fileSize ?? 0)}</div>
        </div>
      </div>

      <div className="border-t border-slate-200/70 px-5 py-4">
        <button
          type="button"
          className="inline-flex items-center gap-2 text-sm font-semibold text-indigo-600 transition hover:text-indigo-700"
          onClick={() => onOpen?.(record)}
        >
          Review analysis
          <ExternalLink className="h-4 w-4" />
        </button>
      </div>
    </motion.article>
  );
}
