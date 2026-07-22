import { useEffect, useMemo, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { ArrowRight, BadgeCheck, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

import { buttonHover, fadeUp, scaleIn } from "../utils/motion";
import useLocalStorage from "../hooks/useLocalStorage";
import { profileDefaults } from "../utils/content";

export default function Register() {
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname ?? "/dashboard";
  const [auth, setAuth] = useLocalStorage("mogify-auth", { isAuthenticated: false });
  const [profile, setProfile] = useLocalStorage("mogify-user", profileDefaults);
  const [form, setForm] = useState({ name: "", email: "", password: "" });

  useEffect(() => {
    if (auth?.isAuthenticated) {
      navigate(from, { replace: true });
    }
  }, [auth?.isAuthenticated, from, navigate]);

  const canSubmit = useMemo(() => form.name.trim() && form.email.trim() && form.password.trim(), [form]);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!canSubmit) {
      return;
    }

    const nextProfile = {
      ...profile,
      name: form.name.trim(),
      email: form.email.trim(),
    };

    setProfile(nextProfile);
    setAuth({ isAuthenticated: true, user: nextProfile });
    navigate(from, { replace: true });
  };

  return (
    <div className="min-h-screen px-4 py-6 sm:px-6 lg:px-8">
      <div className="mx-auto grid min-h-[calc(100vh-3rem)] max-w-7xl overflow-hidden rounded-[36px] border border-slate-200/70 bg-white/80 shadow-[0_24px_100px_rgba(15,23,42,0.1)] backdrop-blur-xl lg:grid-cols-[1.05fr_0.95fr]">
        <motion.div
          className="relative hidden overflow-hidden bg-[radial-gradient(circle_at_top_left,_rgba(79,70,229,0.18),_transparent_32%),linear-gradient(180deg,#0f172a_0%,#111827_100%)] p-10 text-white lg:flex lg:flex-col lg:justify-between"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.6 }}
        >
          <div className="absolute inset-0 opacity-30">
            <div className="absolute left-10 top-10 h-40 w-40 rounded-full bg-white/10 blur-3xl" />
            <div className="absolute bottom-8 right-6 h-44 w-44 rounded-full bg-violet-500/20 blur-3xl" />
          </div>

          <div className="relative">
            <Link to="/" className="text-2xl font-semibold tracking-tight">
              Mogify
            </Link>
            <p className="mt-5 max-w-md text-base leading-7 text-white/70">
              Join the premium AI appearance coach built for structured self-improvement, polished analysis, and intentional grooming decisions.
            </p>
          </div>

          <div className="relative space-y-6">
            <div className="rounded-[28px] border border-white/10 bg-white/6 p-6 backdrop-blur-xl">
              <div className="flex items-center gap-3 text-sm text-white/70">
                <BadgeCheck className="h-4 w-4 text-emerald-300" />
                Premium onboarding
              </div>
              <p className="mt-4 text-3xl font-semibold tracking-tight">Create your profile in under a minute.</p>
            </div>

            <div className="rounded-[28px] border border-white/10 bg-white/6 p-6 backdrop-blur-xl">
              <div className="flex items-center gap-3 text-sm text-white/70">
                <Sparkles className="h-4 w-4 text-violet-300" />
                Clean data flow
              </div>
              <p className="mt-4 text-base leading-7 text-white/75">
                Your account keeps the analysis history, profile summary, and coaching recommendations organized in one elegant workspace.
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="flex items-center justify-center px-5 py-10 sm:px-10"
          variants={scaleIn}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.5 }}
        >
          <form className="w-full max-w-md" onSubmit={handleSubmit}>
            <div className="mb-8">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-indigo-600">Register</p>
              <h1 className="mt-3 text-4xl font-semibold tracking-tight text-slate-900">Create your Mogify account</h1>
              <p className="mt-4 text-sm leading-6 text-slate-600">
                Set up your appearance coaching profile and start tracking your results from the first analysis.
              </p>
            </div>

            <div className="space-y-4">
              <input
                type="text"
                placeholder="Full name"
                className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3.5 text-slate-900 outline-none transition focus:border-indigo-500"
                value={form.name}
                onChange={(event) => setForm((current) => ({ ...current, name: event.target.value }))}
              />
              <input
                type="email"
                placeholder="Email address"
                className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3.5 text-slate-900 outline-none transition focus:border-indigo-500"
                value={form.email}
                onChange={(event) => setForm((current) => ({ ...current, email: event.target.value }))}
              />
              <input
                type="password"
                placeholder="Password"
                className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3.5 text-slate-900 outline-none transition focus:border-indigo-500"
                value={form.password}
                onChange={(event) => setForm((current) => ({ ...current, password: event.target.value }))}
              />
            </div>

            <motion.button
              type="submit"
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-slate-900 px-5 py-3.5 text-sm font-semibold text-white transition hover:bg-slate-800 disabled:cursor-not-allowed disabled:opacity-50"
              whileHover={buttonHover}
              whileTap={{ scale: 0.98 }}
              disabled={!canSubmit}
            >
              Create account
              <ArrowRight className="h-4 w-4" />
            </motion.button>

            <p className="mt-6 text-sm text-slate-600">
              Already have an account?{" "}
              <Link to="/login" className="font-semibold text-indigo-600 transition hover:text-indigo-700">
                Sign in
              </Link>
            </p>
          </form>
        </motion.div>
      </div>
    </div>
  );
}
