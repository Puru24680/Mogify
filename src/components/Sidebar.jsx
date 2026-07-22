import { motion } from "framer-motion";
import { LogOut, X } from "lucide-react";
import { NavLink, useNavigate } from "react-router-dom";

import { workspaceLinks } from "../utils/content";
import { buttonHover, scaleIn } from "../utils/motion";

export default function Sidebar({ mobileOpen = false, onClose }) {
  const navigate = useNavigate();

  const handleSignOut = () => {
    if (typeof window !== "undefined") {
      window.localStorage.removeItem("mogify-auth");
    }
    navigate("/login");
  };

  const containerClass = mobileOpen
    ? "translate-x-0"
    : "-translate-x-full lg:translate-x-0";

  return (
    <motion.aside
      className={`fixed inset-y-0 left-0 z-50 w-72 border-r border-slate-200/70 bg-white/90 px-5 py-6 shadow-[0_24px_80px_rgba(15,23,42,0.12)] backdrop-blur-xl transition-transform duration-300 lg:translate-x-0 ${containerClass}`}
      variants={scaleIn}
      initial="hidden"
      animate="visible"
      transition={{ duration: 0.35 }}
    >
      <div className="flex items-center justify-between">
        <NavLink to="/dashboard" className="text-xl font-semibold tracking-tight text-slate-900">
          Mogify
        </NavLink>
        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 lg:hidden"
          onClick={onClose}
          aria-label="Close navigation"
        >
          <X className="h-4 w-4" />
        </button>
      </div>

      <div className="mt-10 space-y-2">
        {workspaceLinks.map((link) => {
          const Icon = link.icon;

          return (
            <NavLink
              key={link.label}
              to={link.href}
              onClick={onClose}
              className={({ isActive }) =>
                `flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-medium transition ${isActive ? "bg-slate-900 text-white shadow-lg shadow-slate-900/15" : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"}`
              }
            >
              <Icon className="h-4 w-4" />
              {link.label}
            </NavLink>
          );
        })}
      </div>

      <div className="mt-10 rounded-[24px] border border-slate-200/80 bg-gradient-to-br from-indigo-50 to-white p-5">
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-indigo-600">Status</p>
        <h3 className="mt-3 text-lg font-semibold text-slate-900">Premium plan</h3>
        <p className="mt-2 text-sm leading-6 text-slate-600">
          Unlock faster analysis loops, a richer history timeline, and polished progress review.
        </p>
      </div>

      <div className="mt-8">
        <motion.button
          type="button"
          className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-300 hover:text-slate-900"
          whileHover={buttonHover}
          whileTap={{ scale: 0.98 }}
          onClick={handleSignOut}
        >
          <LogOut className="h-4 w-4" />
          Sign out
        </motion.button>
      </div>
    </motion.aside>
  );
}
