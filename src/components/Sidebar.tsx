import React from "react";
import Link from "next/link";

export default function Sidebar() {
  return (
    <aside className="h-screen w-64 border-r fixed left-0 top-0 border-white/10 bg-black/80 backdrop-blur-xl flex flex-col py-6 px-4 z-50 tracking-tight text-sm">
      <div className="flex items-center gap-3 px-4 mb-10">
        <div className="w-8 h-8 rounded bg-primary-container flex items-center justify-center">
          <span className="material-symbols-outlined text-on-primary-container" style={{ fontVariationSettings: "'FILL' 1" }}>dataset</span>
        </div>
        <div>
          <h1 className="text-xl font-bold tracking-tighter text-indigo-500 uppercase">Cordia</h1>
          <p className="text-[10px] text-slate-500 tracking-widest uppercase">V3.4 Admin Console</p>
        </div>
      </div>
      <nav className="flex-1 space-y-1">
        <Link href="/dashboard/admin" className="flex items-center gap-3 px-4 py-3 rounded-lg text-white border-r-2 border-indigo-500 bg-white/5 font-medium transition-colors">
          <span className="material-symbols-outlined">dashboard</span>
          <span>Dashboard</span>
        </Link>
        <Link href="/changelog" className="flex items-center gap-3 px-4 py-3 rounded-lg text-slate-500 font-normal hover:bg-white/10 hover:text-white transition-colors">
          <span className="material-symbols-outlined">rss_feed</span>
          <span>Changelog</span>
        </Link>
        <Link href="#" className="flex items-center gap-3 px-4 py-3 rounded-lg text-slate-500 font-normal hover:bg-white/10 hover:text-white transition-colors">
          <span className="material-symbols-outlined">group</span>
          <span>Users</span>
        </Link>
        <Link href="#" className="flex items-center gap-3 px-4 py-3 rounded-lg text-slate-500 font-normal hover:bg-white/10 hover:text-white transition-colors">
          <span className="material-symbols-outlined">settings</span>
          <span>Settings</span>
        </Link>
      </nav>
      <button className="mt-auto mx-4 bg-indigo-500 text-white py-3 rounded-lg font-semibold flex items-center justify-center gap-2 scale-95 active:scale-90 transition-transform duration-200 shadow-[0_0_15px_rgba(99,102,241,0.4)]">
        <span className="material-symbols-outlined">add</span>
        <span>New Bot</span>
      </button>
    </aside>
  );
}
