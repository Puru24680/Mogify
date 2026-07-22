import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, BarChart3, Sparkles, TrendingUp } from "lucide-react";

import AnalysisCard from "../components/AnalysisCard";
import HistoryCard from "../components/HistoryCard";
import ProgressBar from "../components/ProgressBar";
import WorkspaceLayout from "../components/WorkspaceLayout";
import useLocalStorage from "../hooks/useLocalStorage";
import { dashboardHighlights, dashboardRecentSeeds, profileDefaults, quickActions } from "../utils/content";
import { fadeUp, staggerContainer, staggerItem, viewportOnce } from "../utils/motion";

export default function Dashboard() {
  const [history] = useLocalStorage("mogify-history", dashboardRecentSeeds);
  const [user] = useLocalStorage("mogify-user", profileDefaults);

  const totalAnalyses = history.length;
  const averageScore = Math.round(history.reduce((sum, record) => sum + record.overallScore, 0) / Math.max(history.length, 1));
  const latestScore = history[0]?.overallScore ?? 88;

  return (
    <WorkspaceLayout
      title="Dashboard"
      description="A polished overview of your analyses, profile health, and progress metrics."
      user={user}
      actions={
        <div className="flex items-center gap-2">
          <Link to="/analysis" className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-800">
            New analysis
            <ArrowRight className="h-4 w-4" />
          </Link>
          <Link to="/history" className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2.5 text-sm font-semibold text-slate-700 transition hover:border-slate-300 hover:text-slate-900">
            History
          </Link>
        </div>
      }
    >
      <div className="grid gap-6 xl:grid-cols-[1.15fr_0.85fr]">
        <div className="space-y-6">
          <motion.div className="grid gap-4 md:grid-cols-3" variants={staggerContainer} initial="hidden" animate="visible" viewport={viewportOnce}>
            <motion.div variants={staggerItem}>
              <AnalysisCard title="Total analyses" score={totalAnalyses} description="Saved assessments tracked in your history." icon={<BarChart3 className="h-5 w-5 text-indigo-600" />} tone="indigo" />
            </motion.div>
            <motion.div variants={staggerItem}>
              <AnalysisCard title="Average score" score={averageScore} description="Averaged across your latest appearance evaluations." icon={<TrendingUp className="h-5 w-5 text-emerald-600" />} tone="emerald" />
            </motion.div>
            <motion.div variants={staggerItem}>
              <AnalysisCard title="Latest score" score={latestScore} description="The current benchmark from your most recent upload." icon={<Sparkles className="h-5 w-5 text-violet-600" />} tone="violet" />
            </motion.div>
          </motion.div>

          <motion.section className="surface-card rounded-[28px] p-6" variants={fadeUp} initial="hidden" animate="visible" transition={{ duration: 0.55 }}>
            <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-indigo-600">Progress graph</p>
                <h2 className="mt-3 text-2xl font-semibold tracking-tight text-slate-900">Performance trend placeholder</h2>
              </div>
              <p className="text-sm text-slate-500">A premium workspace should feel data-rich even before backend analytics ship.</p>
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-4">
              {[88, 91, 86, 94].map((value, index) => (
                <div key={value} className="rounded-[22px] bg-slate-50 p-4">
                  <div className="flex h-52 items-end rounded-[18px] bg-white p-3 shadow-inner shadow-slate-200/60">
                    <div className="w-full rounded-[16px] bg-gradient-to-t from-indigo-600 to-violet-400" style={{ height: `${value}%` }} />
                  </div>
                  <p className="mt-3 text-sm font-semibold text-slate-900">Week {index + 1}</p>
                  <p className="text-sm text-slate-500">{value}%</p>
                </div>
              ))}
            </div>
          </motion.section>

          <section>
            <div className="mb-5 flex items-center justify-between gap-4">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-indigo-600">Recent analyses</p>
                <h2 className="mt-3 text-2xl font-semibold tracking-tight text-slate-900">Latest saved coaching sessions</h2>
              </div>
              <Link to="/history" className="text-sm font-semibold text-indigo-600 transition hover:text-indigo-700">
                View all
              </Link>
            </div>

            <div className="grid gap-5">
              {history.slice(0, 3).map((record) => (
                <HistoryCard key={record.id ?? record.fileName} record={record} />
              ))}
            </div>
          </section>
        </div>

        <div className="space-y-6">
          <motion.section className="surface-card rounded-[28px] p-6" variants={fadeUp} initial="hidden" animate="visible" transition={{ duration: 0.55 }}>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-indigo-600">Profile summary</p>
            <div className="mt-5 flex items-center gap-4">
              <div className="flex h-16 w-16 items-center justify-center rounded-[24px] bg-slate-900 text-lg font-semibold text-white">{user.name?.split(" ").map((part) => part[0]).join("").slice(0, 2).toUpperCase()}</div>
              <div>
                <h2 className="text-2xl font-semibold tracking-tight text-slate-900">{user.name}</h2>
                <p className="text-sm text-slate-500">{user.plan} plan</p>
              </div>
            </div>

            <p className="mt-5 text-sm leading-7 text-slate-600">{user.goal}</p>

            <div className="mt-6 space-y-4">
              {dashboardHighlights.map((item) => (
                <div key={item.title} className="rounded-[22px] bg-slate-50 p-4">
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <p className="text-sm text-slate-500">{item.title}</p>
                      <p className="mt-2 text-2xl font-semibold tracking-tight text-slate-900">{item.value}</p>
                    </div>
                  </div>
                  <p className="mt-3 text-sm leading-6 text-slate-600">{item.description}</p>
                </div>
              ))}
            </div>
          </motion.section>

          <motion.section className="surface-card rounded-[28px] p-6" variants={fadeUp} initial="hidden" animate="visible" transition={{ duration: 0.55 }}>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-indigo-600">Quick actions</p>
            <div className="mt-5 space-y-3">
              {quickActions.map((action) => {
                const Icon = action.icon;

                return (
                  <button key={action.label} type="button" className="flex w-full items-center justify-between rounded-[20px] border border-slate-200 bg-white px-4 py-3 text-left text-sm font-medium text-slate-700 transition hover:border-slate-300 hover:text-slate-900">
                    <span className="flex items-center gap-3">
                      <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-slate-50 text-indigo-600">
                        <Icon className="h-4 w-4" />
                      </span>
                      {action.label}
                    </span>
                    <ArrowRight className="h-4 w-4 text-slate-400" />
                  </button>
                );
              })}
            </div>
          </motion.section>

          <motion.section className="surface-card rounded-[28px] p-6" variants={fadeUp} initial="hidden" animate="visible" transition={{ duration: 0.55 }}>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-indigo-600">Focus areas</p>
            <div className="mt-5 space-y-4">
              <ProgressBar label="Facial symmetry" value={96} />
              <ProgressBar label="Jawline" value={91} tone="emerald" />
              <ProgressBar label="Hair styling" value={88} tone="amber" />
              <ProgressBar label="Skin clarity" value={92} tone="rose" />
            </div>
          </motion.section>
        </div>
      </div>
    </WorkspaceLayout>
  );
}