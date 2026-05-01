import React, { useState, useEffect } from "react";

export default function ModerationHub() {
  const [rateLimits, setRateLimits] = useState<Record<string, number>>({});

  useEffect(() => {
    const fetchLimits = async () => {
      try {
        const res = await fetch('/api/admin/pulse');
        const data = await res.json();
        if (data.success) {
          setRateLimits(data.data.rateLimits.heatmap || {});
        }
      } catch (err) {}
    };
    fetchLimits();
    const interval = setInterval(fetchLimits, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="space-y-6">
      {/* Rate Limit Heatmap */}
      <div className="glass-card rounded-xl overflow-hidden">
        <div className="p-6 border-b border-white/5 flex justify-between items-center bg-white/2">
          <div>
            <h4 className="font-header-md text-[20px] font-medium text-white tracking-[0.02em]">Rate-Limit Heatmap (429s)</h4>
            <p className="text-xs text-slate-500 mt-1 uppercase font-label-caps">Real-time violations detected in the last 5 minutes</p>
          </div>
          <div className="flex gap-2">
            <button className="px-4 py-2 bg-indigo-500/10 border border-indigo-500/30 rounded font-label-caps text-[10px] uppercase text-indigo-400 hover:bg-indigo-500/20 transition-colors">Whitelist All</button>
          </div>
        </div>
        <div className="p-6">
          {Object.keys(rateLimits).length === 0 ? (
            <div className="py-12 flex flex-col items-center justify-center border border-dashed border-white/10 rounded-xl">
              <span className="material-symbols-outlined text-slate-600 mb-2">check_circle</span>
              <span className="opacity-30 text-sm font-bold uppercase tracking-widest">No rate limit violations detected</span>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {Object.entries(rateLimits).map(([botId, count]) => (
                <div key={botId} className="p-4 bg-white/5 border border-white/10 rounded-lg flex justify-between items-center">
                  <div>
                    <p className="text-xs text-slate-500 font-data-mono uppercase mb-1">{botId}</p>
                    <p className="text-lg font-bold text-error">{count} <span className="text-[10px] text-slate-500 uppercase font-label-caps">blocks</span></p>
                  </div>
                  <div className="p-2 rounded bg-error/10 text-error">
                    <span className="material-symbols-outlined text-sm">block</span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="glass-card rounded-xl overflow-hidden">
        <div className="p-6 border-b border-white/5 flex justify-between items-center bg-white/2">
          <h4 className="font-header-md text-[20px] font-medium text-white tracking-[0.02em]">Security &amp; Content Review</h4>
        <div className="flex gap-2">
          <button className="px-4 py-2 bg-white/5 border border-white/10 rounded font-label-caps text-[10px] uppercase hover:bg-white/10 transition-colors">Export Logs</button>
          <button className="px-4 py-2 bg-indigo-500/10 border border-indigo-500/30 rounded font-label-caps text-[10px] uppercase text-indigo-400 hover:bg-indigo-500/20 transition-colors">Refresh Queue</button>
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-left">
          <thead>
            <tr className="bg-white/2 text-slate-500 font-label-caps text-[10px] uppercase tracking-widest">
              <th className="px-6 py-4 font-medium">User</th>
              <th className="px-6 py-4 font-medium">Associated Bot</th>
              <th className="px-6 py-4 font-medium">Status</th>
              <th className="px-6 py-4 font-medium text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/5">
            <tr className="group hover:bg-white/[0.02] transition-colors">
              <td className="px-6 py-5">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center text-[10px] font-bold border border-white/10">JD</div>
                  <div>
                    <div className="text-sm font-medium text-white">Julian Draxler</div>
                    <div className="text-[10px] text-slate-500 font-data-mono">UID: 992-AX</div>
                  </div>
                </div>
              </td>
              <td className="px-6 py-5">
                <div className="text-sm text-slate-300">Nova-7 Neural Link</div>
                <div className="text-[10px] text-slate-500 uppercase">Class: Assistant</div>
              </td>
              <td className="px-6 py-5">
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-error-container/30 text-error text-[10px] font-bold uppercase tracking-tighter border border-error/20 status-breathing-red">
                  <span className="w-1.5 h-1.5 rounded-full bg-error animate-pulse"></span>
                  Flagged
                </span>
              </td>
              <td className="px-6 py-5 text-right">
                <div className="flex justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button className="p-2 rounded bg-white/5 text-slate-400 hover:text-white transition-colors" title="View Profile"><span className="material-symbols-outlined text-lg">visibility</span></button>
                  <button className="p-2 rounded bg-white/5 text-slate-400 hover:text-error transition-colors" title="Flag"><span className="material-symbols-outlined text-lg">flag</span></button>
                  <button className="p-2 rounded bg-white/5 text-slate-400 hover:text-error transition-colors" title="Delete"><span className="material-symbols-outlined text-lg">delete</span></button>
                </div>
              </td>
            </tr>
            <tr className="group hover:bg-white/[0.02] transition-colors">
              <td className="px-6 py-5">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center text-[10px] font-bold border border-white/10">SL</div>
                  <div>
                    <div className="text-sm font-medium text-white">Sarah Lund</div>
                    <div className="text-[10px] text-slate-500 font-data-mono">UID: 405-BL</div>
                  </div>
                </div>
              </td>
              <td className="px-6 py-5">
                <div className="text-sm text-slate-300">Echo Protocol</div>
                <div className="text-[10px] text-slate-500 uppercase">Class: Security</div>
              </td>
              <td className="px-6 py-5">
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 text-amber-400 text-[10px] font-bold uppercase tracking-tighter border border-amber-400/20 status-breathing-amber">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
                  Pending
                </span>
              </td>
              <td className="px-6 py-5 text-right">
                <div className="flex justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button className="p-2 rounded bg-white/5 text-slate-400 hover:text-white transition-colors"><span className="material-symbols-outlined text-lg">visibility</span></button>
                  <button className="p-2 rounded bg-white/5 text-slate-400 hover:text-error transition-colors"><span className="material-symbols-outlined text-lg">flag</span></button>
                  <button className="p-2 rounded bg-white/5 text-slate-400 hover:text-error transition-colors"><span className="material-symbols-outlined text-lg">delete</span></button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
);
}
