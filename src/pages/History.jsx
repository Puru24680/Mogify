import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Clock3, Filter, Search } from "lucide-react";

import HistoryCard from "../components/HistoryCard";
import WorkspaceLayout from "../components/WorkspaceLayout";
import useLocalStorage from "../hooks/useLocalStorage";
import { dashboardRecentSeeds, profileDefaults } from "../utils/content";
import { fadeUp, staggerContainer, staggerItem, viewportOnce } from "../utils/motion";

export default function History() {
  const [history] = useLocalStorage("mogify-history", dashboardRecentSeeds);
  const [user] = useLocalStorage("mogify-user", profileDefaults);
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState(history[0] ?? null);

  const filteredHistory = useMemo(
    () => history.filter((record) => record.fileName.toLowerCase().includes(query.toLowerCase())),
    [history, query],
  );

  return (
    <WorkspaceLayout
      title="History"
      description="A clean timeline of previous analyses and progress checkpoints."
      user={user}
    >
      <div className="grid gap-6 xl:grid-cols-[1.1fr_0.9fr]">
        <div>
          <motion.div
            className="surface-card rounded-[28px] p-6"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.55 }}
          >
            <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-indigo-600">Analysis history</p>
                <h2 className="mt-3 text-2xl font-semibold tracking-tight text-slate-900">Track your appearance coaching timeline</h2>
              </div>

              <div className="flex gap-3">
                <div className="flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-3 text-sm text-slate-400">
                  <Search className="h-4 w-4" />
                  <input
                    type="text"
                    value={query}
                    onChange={(event) => setQuery(event.target.value)}
                    placeholder="Search files"
                    className="w-36 border-0 bg-transparent outline-none placeholder:text-slate-400"
                  />
                </div>
                <button type="button" className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-700">
                  <Filter className="h-4 w-4" />
                  Filter
                </button>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="mt-6 grid gap-5"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            viewport={viewportOnce}
          >
            {filteredHistory.map((record) => (
              <motion.div key={record.id ?? record.fileName} variants={staggerItem}>
                <HistoryCard record={record} onOpen={setSelected} />
              </motion.div>
            ))}
          </motion.div>
        </div>

        <motion.aside
          className="surface-card rounded-[28px] p-6"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.55 }}
        >
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">
            <Clock3 className="h-4 w-4" />
            Selected record
          </div>

          {selected ? (
            <div className="mt-5 space-y-5">
              <div>
                <h3 className="text-2xl font-semibold tracking-tight text-slate-900">{selected.fileName}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{selected.summary}</p>
              </div>

              <div className="rounded-[24px] bg-slate-50 p-5">
                <p className="text-sm font-medium text-slate-500">Overall score</p>
                <p className="mt-2 text-5xl font-semibold tracking-tight text-slate-900">{selected.overallScore}</p>
              </div>

              <div className="grid gap-3 text-sm text-slate-600">
                <p>Created at: {new Intl.DateTimeFormat("en", { dateStyle: "medium", timeStyle: "short" }).format(new Date(selected.createdAt))}</p>
                <p>Source size: {(selected.fileSize / (1024 * 1024)).toFixed(1)} MB</p>
              </div>
            </div>
          ) : (
            <p className="mt-5 text-sm leading-6 text-slate-600">No record selected.</p>
          )}
        </motion.aside>
      </div>
    </WorkspaceLayout>
  );
}
