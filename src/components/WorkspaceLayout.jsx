import { useState } from "react";

import Sidebar from "./Sidebar";
import Topbar from "./Topbar";

export default function WorkspaceLayout({ title, description, user, actions, children }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="min-h-screen bg-transparent lg:pl-72">
      <Sidebar mobileOpen={mobileOpen} onClose={() => setMobileOpen(false)} />
      {mobileOpen ? (
        <button
          type="button"
          className="fixed inset-0 z-40 bg-slate-950/35 lg:hidden"
          onClick={() => setMobileOpen(false)}
          aria-label="Close navigation overlay"
        />
      ) : null}
      <div className="flex min-h-screen flex-col">
        <Topbar
          title={title}
          description={description}
          user={user}
          actions={actions}
          onMenuClick={() => setMobileOpen(true)}
        />
        <main className="flex-1 px-4 py-6 sm:px-6 lg:px-8 lg:py-8">{children}</main>
      </div>
    </div>
  );
}
