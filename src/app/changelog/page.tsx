import React from "react";
import AppLayout from "@/components/AppLayout";

export default function ChangelogPage() {
  return (
    <AppLayout>
      <div className="p-12 min-h-[calc(100vh-64px)] overflow-y-auto">
        <div className="max-w-4xl mx-auto pb-12">
          <header className="mb-16">
            <h1 className="font-display-xl text-[48px] font-bold text-white mb-2 tracking-tight">System Changelog</h1>
            <p className="text-on-surface-variant font-body-main max-w-xl opacity-70">
              Tracking every iteration of the Cordia Engine. Real-time updates on protocol enhancements, security patches, and neural interface refinements.
            </p>
          </header>
          
          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-4 md:left-[160px] top-4 bottom-0 w-px bg-gradient-to-b from-primary/30 to-primary/5"></div>
            
            {/* Update Entry 1 */}
            <div className="relative grid grid-cols-1 md:grid-cols-[160px_1fr] gap-8 mb-20 group">
              <div className="relative pt-1 flex md:justify-end pr-8">
                <span className="font-data-mono text-[14px] text-primary-fixed-dim uppercase tracking-wider bg-primary-container/10 px-2 py-1 rounded border border-primary-container/20 self-start">Oct 24, 2023</span>
                <div className="absolute -right-[5px] top-[14px] w-2.5 h-2.5 rounded-full bg-primary shadow-[0_0_0_8px_rgba(192,193,255,0.1)] group-hover:scale-125 transition-transform"></div>
              </div>
              <div className="glass-card p-8 rounded-xl neon-indigo-glow border border-white/10">
                <div className="flex items-center gap-3 mb-4">
                  <span className="bg-secondary-container text-on-secondary-container text-[10px] px-2 py-0.5 rounded font-bold uppercase tracking-widest">Version 3.4.0</span>
                  <span className="text-slate-500 text-xs font-medium">Build ID: CR-4429</span>
                </div>
                <h2 className="font-headline-lg text-[32px] font-semibold text-white mb-6">Neural Path Optimization &amp; Multi-Region Sync</h2>
                <div className="space-y-6 text-on-surface-variant leading-relaxed">
                  <section>
                    <h3 className="font-label-caps text-[12px] font-semibold text-primary uppercase mb-3">Key Features</h3>
                    <ul className="space-y-3 list-none">
                      <li className="flex gap-3">
                        <span className="material-symbols-outlined text-secondary text-sm">check_circle</span>
                        <span>Implemented <strong className="text-white font-medium">Asynchronous Sync-Nodes</strong> for sub-50ms latency across global clusters.</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="material-symbols-outlined text-secondary text-sm">check_circle</span>
                        <span>Introduced <strong className="text-white font-medium">Bento Dashboard V2</strong> with custom widget dragging and real-time sparkline rendering.</span>
                      </li>
                    </ul>
                  </section>
                  <section>
                    <h3 className="font-label-caps text-[12px] font-semibold text-primary uppercase mb-3">Technical Refinements</h3>
                    <p className="text-sm opacity-80 mb-4">
                      We've completely re-engineered the backend message queue to handle 3x the previous throughput while reducing memory footprint by 14%.
                    </p>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-black/40 border border-white/5 p-4 rounded-lg">
                        <p className="text-[10px] text-slate-500 uppercase tracking-widest mb-1">Response Time</p>
                        <p className="font-data-mono text-xl text-secondary">-18.4%</p>
                      </div>
                      <div className="bg-black/40 border border-white/5 p-4 rounded-lg">
                        <p className="text-[10px] text-slate-500 uppercase tracking-widest mb-1">Queue Stability</p>
                        <p className="font-data-mono text-xl text-primary">99.999%</p>
                      </div>
                    </div>
                  </section>
                </div>
              </div>
            </div>

            {/* Update Entry 2 */}
            <div className="relative grid grid-cols-1 md:grid-cols-[160px_1fr] gap-8 mb-20 group">
              <div className="relative pt-1 flex md:justify-end pr-8">
                <span className="font-data-mono text-[14px] text-slate-400 uppercase tracking-wider bg-white/5 px-2 py-1 rounded border border-white/10 self-start">Sep 12, 2023</span>
                <div className="absolute -right-[5px] top-[14px] w-2.5 h-2.5 rounded-full bg-slate-600 transition-transform"></div>
              </div>
              <div className="glass-card p-8 rounded-xl border border-white/10 opacity-90 hover:opacity-100 transition-opacity">
                <div className="flex items-center gap-3 mb-4">
                  <span className="bg-surface-container-highest text-on-surface text-[10px] px-2 py-0.5 rounded font-bold uppercase tracking-widest">Version 3.3.8</span>
                </div>
                <h2 className="font-header-md text-[20px] font-medium text-white mb-4">Security Hardening &amp; OAuth Redundancy</h2>
                <div className="space-y-4 text-on-surface-variant">
                  <p className="text-sm leading-relaxed">
                    Critical updates to the authentication layer to support high-entropy hardware keys and improved session invalidation protocols.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-error-container/20 text-error border border-error/20 px-2 py-1 rounded-sm text-[10px] font-bold tracking-tighter uppercase italic">Security Critical</span>
                    <span className="bg-primary-container/20 text-primary border border-primary/20 px-2 py-1 rounded-sm text-[10px] font-bold tracking-tighter uppercase italic">Refinement</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Update Entry 3 */}
            <div className="relative grid grid-cols-1 md:grid-cols-[160px_1fr] gap-8 mb-20 group">
              <div className="relative pt-1 flex md:justify-end pr-8">
                <span className="font-data-mono text-[14px] text-slate-400 uppercase tracking-wider bg-white/5 px-2 py-1 rounded border border-white/10 self-start">Aug 29, 2023</span>
                <div className="absolute -right-[5px] top-[14px] w-2.5 h-2.5 rounded-full bg-slate-600 transition-transform"></div>
              </div>
              <div className="glass-card p-8 rounded-xl border border-white/10 opacity-90 hover:opacity-100 transition-opacity">
                <div className="flex items-center gap-3 mb-4">
                  <span className="bg-surface-container-highest text-on-surface text-[10px] px-2 py-0.5 rounded font-bold uppercase tracking-widest">Version 3.3.0</span>
                </div>
                <h2 className="font-header-md text-[20px] font-medium text-white mb-4">Initial Deployment of Cordia V3 Interface</h2>
                <div className="space-y-4">
                  <p className="text-sm text-on-surface-variant leading-relaxed">
                    Migration from legacy monolithic architecture to the new Cyber-Elegance design language and micro-service orchestration.
                  </p>
                </div>
              </div>
            </div>

          </div>

          {/* Load More */}
          <div className="flex justify-center mt-12">
            <button className="flex items-center gap-2 text-primary-fixed-dim font-label-caps text-[12px] tracking-[0.2em] font-semibold uppercase border border-primary/20 px-8 py-3 rounded-full hover:bg-primary/5 transition-all group">
              <span>Retrieve Archive</span>
              <span className="material-symbols-outlined text-sm group-hover:translate-y-1 transition-transform">keyboard_double_arrow_down</span>
            </button>
          </div>

        </div>
      </div>
    </AppLayout>
  );
}
