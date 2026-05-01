import React from "react";

export default function TopAppBar() {
  return (
    <header className="w-full h-16 border-b sticky top-0 border-white/5 bg-black/40 backdrop-blur-lg flex items-center justify-between px-8 z-40">
      <div className="flex items-center gap-4">
        <div className="relative">
          <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-500 text-sm">search</span>
          <input className="bg-white/5 border border-white/10 rounded-full pl-10 pr-4 py-1.5 text-xs text-on-surface focus:outline-none focus:border-indigo-400 w-64 transition-all" placeholder="Search systems..." type="text"/>
        </div>
      </div>
      <div className="flex items-center gap-6">
        <div className="flex items-center gap-4 border-r border-white/10 pr-6">
          <button className="text-slate-400 hover:text-indigo-300 opacity-80 hover:opacity-100 transition-opacity">
            <span className="material-symbols-outlined">notifications</span>
          </button>
          <button className="text-slate-400 hover:text-indigo-300 opacity-80 hover:opacity-100 transition-opacity">
            <span className="material-symbols-outlined">tune</span>
          </button>
        </div>
        <div className="flex items-center gap-3">
          <button className="text-[10px] tracking-widest uppercase text-indigo-400 border border-indigo-400/30 px-4 py-1.5 rounded hover:bg-indigo-400/10 transition-all">Deploy</button>
          <div className="w-8 h-8 rounded-full overflow-hidden border border-white/10">
            <img alt="Admin" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDQeR6tHqmIFMrpBk9kaLNWzAtRk0E7ZFhS7D6QX0z4bc6yA_BEafU-4Q5cmK0dEZNR-791x0NxSJVv0Eaoniwy-tEZEsuKbI87q3AiqImr54dcu0hLf4wW1CiwOAJPWmaTT91R6RWZvKKI__mczo_OgSxGY-StSYQQu5HbPtmg4C_H9SsCCITPFMgaIhEjHGxGPei3YhJkyUoCJ3wprBWIfgdj4JT678iL_LZl7m-_E57h4OqoXBtZAEmWqyPjBoG4KUGeAke8My_R"/>
          </div>
        </div>
      </div>
    </header>
  );
}
