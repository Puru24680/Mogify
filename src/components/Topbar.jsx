import { Menu, Search, Sparkles, UserRound } from "lucide-react";

import { initialsFromName } from "../utils/helpers";

export default function Topbar({ title, description, user, onMenuClick, actions }) {
  return (
    <header className="sticky top-0 z-30 border-b border-slate-200/70 bg-white/75 backdrop-blur-xl">
      <div className="flex items-center gap-4 px-4 py-4 sm:px-6 lg:px-8">
        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-slate-200 bg-white text-slate-700 shadow-sm lg:hidden"
          onClick={onMenuClick}
          aria-label="Open navigation"
        >
          <Menu className="h-5 w-5" />
        </button>

        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.24em] text-indigo-600">
            <Sparkles className="h-4 w-4" />
            Mogify workspace
          </div>
          <div className="mt-1 flex items-center justify-between gap-4">
            <div className="min-w-0">
              <h1 className="truncate text-xl font-semibold tracking-tight text-slate-900 sm:text-2xl">{title}</h1>
              {description ? <p className="mt-1 truncate text-sm text-slate-500">{description}</p> : null}
            </div>

            <div className="hidden items-center gap-3 lg:flex">
              <div className="flex h-11 w-[18rem] items-center gap-3 rounded-full border border-slate-200 bg-white px-4 text-sm text-slate-400 shadow-sm">
                <Search className="h-4 w-4 text-slate-400" />
                Search analyses, notes, or profile settings
              </div>
              {actions}
              <div className="flex items-center gap-3 rounded-full border border-slate-200 bg-white px-3 py-2 shadow-sm">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-900 text-xs font-semibold text-white">
                  {initialsFromName(user?.name ?? "User")}
                </div>
                <div className="hidden xl:block">
                  <p className="text-sm font-semibold text-slate-900">{user?.name ?? "Mogify User"}</p>
                  <p className="text-xs text-slate-500">{user?.plan ?? "Professional"}</p>
                </div>
                <UserRound className="h-4 w-4 text-slate-400" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
