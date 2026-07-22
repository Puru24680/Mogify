import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { BriefcaseBusiness, MapPin, Save, UserRound } from "lucide-react";

import WorkspaceLayout from "../components/WorkspaceLayout";
import useLocalStorage from "../hooks/useLocalStorage";
import { dashboardRecentSeeds, profileDefaults } from "../utils/content";
import { fadeUp, viewportOnce } from "../utils/motion";

export default function Profile() {
  const [profile, setProfile] = useLocalStorage("mogify-user", profileDefaults);
  const [history] = useLocalStorage("mogify-history", dashboardRecentSeeds);
  const [form, setForm] = useState(profile);

  const latestScore = history[0]?.overallScore ?? 88;
  const avgScore = useMemo(
    () => Math.round(history.reduce((sum, record) => sum + record.overallScore, 0) / Math.max(history.length, 1)),
    [history],
  );

  const handleSave = (event) => {
    event.preventDefault();
    setProfile(form);
  };

  return (
    <WorkspaceLayout title="Profile" description="Refine your identity, goals, and coaching preferences." user={profile}>
      <div className="grid gap-6 xl:grid-cols-[0.95fr_1.05fr]">
        <motion.section
          className="surface-card rounded-[28px] p-6"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.55 }}
        >
          <div className="flex items-center gap-3">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-900 text-white">
              <UserRound className="h-6 w-6" />
            </div>
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-indigo-600">Profile summary</p>
              <h2 className="mt-2 text-2xl font-semibold tracking-tight text-slate-900">{profile.name}</h2>
            </div>
          </div>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <div className="rounded-[22px] bg-slate-50 p-4">
              <p className="text-sm text-slate-500">Latest score</p>
              <p className="mt-2 text-4xl font-semibold text-slate-900">{latestScore}</p>
            </div>
            <div className="rounded-[22px] bg-slate-50 p-4">
              <p className="text-sm text-slate-500">Average score</p>
              <p className="mt-2 text-4xl font-semibold text-slate-900">{avgScore}</p>
            </div>
          </div>

          <div className="mt-6 space-y-4 text-sm text-slate-600">
            <div className="flex items-center gap-3">
              <MapPin className="h-4 w-4 text-indigo-500" />
              {profile.city}
            </div>
            <div className="flex items-center gap-3">
              <BriefcaseBusiness className="h-4 w-4 text-indigo-500" />
              {profile.plan} plan
            </div>
          </div>
        </motion.section>

        <motion.form
          className="surface-card rounded-[28px] p-6"
          onSubmit={handleSave}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.55 }}
        >
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-indigo-600">Edit profile</p>
          <h2 className="mt-3 text-2xl font-semibold tracking-tight text-slate-900">Personalize your coaching workspace</h2>

          <div className="mt-6 space-y-4">
            <input
              type="text"
              value={form.name}
              onChange={(event) => setForm((current) => ({ ...current, name: event.target.value }))}
              className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3.5 text-slate-900 outline-none focus:border-indigo-500"
              placeholder="Full name"
            />
            <input
              type="email"
              value={form.email}
              onChange={(event) => setForm((current) => ({ ...current, email: event.target.value }))}
              className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3.5 text-slate-900 outline-none focus:border-indigo-500"
              placeholder="Email"
            />
            <input
              type="text"
              value={form.city}
              onChange={(event) => setForm((current) => ({ ...current, city: event.target.value }))}
              className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3.5 text-slate-900 outline-none focus:border-indigo-500"
              placeholder="City"
            />
            <textarea
              rows="4"
              value={form.goal}
              onChange={(event) => setForm((current) => ({ ...current, goal: event.target.value }))}
              className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3.5 text-slate-900 outline-none focus:border-indigo-500"
              placeholder="Primary goal"
            />
            <select
              value={form.plan}
              onChange={(event) => setForm((current) => ({ ...current, plan: event.target.value }))}
              className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3.5 text-slate-900 outline-none focus:border-indigo-500"
            >
              <option>Starter</option>
              <option>Professional</option>
              <option>Elite</option>
            </select>
          </div>

          <motion.button
            type="submit"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-slate-900 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-slate-800"
            whileTap={{ scale: 0.98 }}
          >
            <Save className="h-4 w-4" />
            Save profile
          </motion.button>
        </motion.form>
      </div>
    </WorkspaceLayout>
  );
}
