import { Link } from "react-router-dom";
import { ArrowRight, ScanFace } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center px-4 py-12">
      <div className="glass-card w-full max-w-xl rounded-[32px] p-8 text-center sm:p-10">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-slate-900 text-white">
          <ScanFace className="h-7 w-7" />
        </div>
        <p className="mt-6 text-sm font-semibold uppercase tracking-[0.24em] text-indigo-600">404</p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight text-slate-900">This page does not exist.</h1>
        <p className="mt-4 text-base leading-7 text-slate-600">
          The page you were looking for is unavailable. Return to Mogify and continue your coaching flow.
        </p>
        <Link
          to="/"
          className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-slate-900 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-slate-800"
        >
          Back home
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </div>
  );
}
