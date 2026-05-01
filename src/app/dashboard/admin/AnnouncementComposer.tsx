import React, { useState } from "react";

export default function AnnouncementComposer() {
  const [isPublishing, setIsPublishing] = useState(false);
  const [title, setTitle] = useState("System Maintenance: V3.4 Update");
  const [content, setContent] = useState("");

  const handlePublish = async () => {
    setIsPublishing(true);
    try {
      const res = await fetch('/api/admin/news', {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ 
          title, 
          content: content || "System maintenance tonight at 02:00 UTC.",
          category: 'maintenance',
          importance: 'high'
        })
      });
      const data = await res.json();
      if (data.success) {
        alert("Announcement published successfully!");
      }
    } catch (err) {
      console.error("Publish failed:", err);
    }
    setIsPublishing(false);
  };

  return (
    <div className="flex flex-col gap-6 h-full pb-8">
      {/* Header Section */}
      <div className="flex justify-between items-end mb-2">
        <div>
          <h2 className="font-headline-lg text-[32px] font-semibold text-on-surface">Announcement Composer</h2>
          <p className="font-body-main text-body-main text-on-surface-variant mt-1 opacity-70">Draft and schedule global system communications.</p>
        </div>
        <div className="flex gap-3">
          <div className="flex flex-col items-end">
            <span className="font-label-caps text-[12px] text-slate-500 uppercase mb-1">Status</span>
            <div className="flex items-center gap-2 px-3 py-1 glass-panel rounded-full border border-indigo-500/30">
              <div className="w-2 h-2 rounded-full bg-secondary shadow-[0_0_8px_rgba(78,222,163,0.6)]"></div>
              <span className="font-data-mono text-[10px] text-secondary uppercase">Draft Mode</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bento Layout Editor */}
      <div className="flex-1 grid grid-cols-12 gap-6 min-h-0">
        {/* Left Panel: Markdown Editor */}
        <div className="col-span-7 flex flex-col gap-4 min-h-0">
          <div className="glass-panel flex-1 rounded-xl p-6 flex flex-col gap-4 overflow-hidden border border-white/10 bg-white/5">
            <div className="flex justify-between items-center border-b border-white/5 pb-4">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-indigo-400">edit_note</span>
                <span className="font-label-caps text-[12px] uppercase tracking-widest text-on-surface font-semibold">Markdown Content</span>
              </div>
              <div className="flex gap-2">
                <button className="p-1 text-slate-500 hover:text-white transition-colors"><span className="material-symbols-outlined text-sm">format_bold</span></button>
                <button className="p-1 text-slate-500 hover:text-white transition-colors"><span className="material-symbols-outlined text-sm">format_italic</span></button>
                <button className="p-1 text-slate-500 hover:text-white transition-colors"><span className="material-symbols-outlined text-sm">link</span></button>
                <button className="p-1 text-slate-500 hover:text-white transition-colors"><span className="material-symbols-outlined text-sm">code</span></button>
              </div>
            </div>
            <textarea 
              className="flex-1 font-data-mono text-sm leading-relaxed text-slate-300 outline-none overflow-y-auto whitespace-pre-wrap bg-transparent border-none resize-none"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="# System Maintenance: V3.4 Update..."
            />
          </div>
          
          {/* Controls Bento Row */}
          <div className="grid grid-cols-2 gap-4 h-40">
            <div className="glass-panel rounded-xl p-5 flex flex-col justify-between border border-white/10 bg-white/5">
              <span className="font-label-caps text-[12px] font-semibold uppercase text-slate-500">Publish Date</span>
              <div className="relative group mt-2">
                <input readOnly className="w-full bg-white/5 border border-white/10 rounded-lg py-3 px-4 font-data-mono text-on-surface focus:border-indigo-500/50 outline-none transition-all cursor-pointer" type="text" value="Oct 24, 2023 - 14:00" />
                <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-indigo-400">calendar_today</span>
              </div>
              <p className="text-[10px] text-slate-600 mt-2">Automatic broadcast to all selected regions.</p>
            </div>
            <div className="glass-panel rounded-xl p-5 flex flex-col justify-between border border-white/10 bg-white/5">
              <span className="font-label-caps text-[12px] font-semibold uppercase text-slate-500">Target Audience</span>
              <div className="flex flex-wrap gap-2 mt-2">
                <div className="px-3 py-1.5 bg-indigo-500/10 border border-indigo-500/40 rounded flex items-center gap-2 group cursor-pointer hover:bg-indigo-500/20 transition-all">
                  <span className="font-data-mono text-[11px] text-indigo-300">All Users</span>
                  <span className="material-symbols-outlined text-[14px] text-indigo-500">check_circle</span>
                </div>
                <div className="px-3 py-1.5 bg-white/5 border border-white/10 rounded flex items-center gap-2 group cursor-pointer hover:border-indigo-500/40 transition-all">
                  <span className="font-data-mono text-[11px] text-slate-400">Bot Owners</span>
                  <span className="material-symbols-outlined text-[14px] text-slate-600 group-hover:text-indigo-500">add_circle</span>
                </div>
                <div className="px-3 py-1.5 bg-white/5 border border-white/10 rounded flex items-center gap-2 group cursor-pointer hover:border-indigo-500/40 transition-all">
                  <span className="font-data-mono text-[11px] text-slate-400">Enterprise</span>
                  <span className="material-symbols-outlined text-[14px] text-slate-600 group-hover:text-indigo-500">add_circle</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Panel: Live Preview */}
        <div className="col-span-5 flex flex-col gap-4 min-h-0">
          <div className="glass-panel flex-1 rounded-xl p-0 flex flex-col overflow-hidden border border-white/10 bg-white/5">
            <div className="bg-white/5 px-6 py-3 border-b border-white/5 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-secondary text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>visibility</span>
                <span className="font-label-caps text-[12px] uppercase tracking-widest text-on-surface font-semibold">Live Preview</span>
              </div>
              <div className="flex gap-1">
                <span className="w-2 h-2 rounded-full bg-white/10"></span>
                <span className="w-2 h-2 rounded-full bg-white/10"></span>
                <span className="w-2 h-2 rounded-full bg-white/10"></span>
              </div>
            </div>
            {/* The live preview uses carbon fibre texture and a glowing preview card */}
            <div className="flex-1 bg-surface-dim relative p-8 flex flex-col items-center justify-center">
              {/* Preview Card Container */}
              <div className="w-full max-w-sm glass-panel rounded-2xl p-6 relative overflow-hidden glow-indigo border border-white/10 bg-black/40">
                {/* Background gradient for preview feel */}
                <div className="absolute -top-24 -right-24 w-48 h-48 bg-indigo-600/10 blur-[80px] rounded-full"></div>
                {/* Header */}
                <div className="flex items-center justify-between mb-4 relative z-10">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-indigo-600/20 border border-indigo-500/30 flex items-center justify-center">
                      <span className="material-symbols-outlined text-indigo-400">priority_high</span>
                    </div>
                    <div>
                      <h4 className="font-header-md text-sm font-bold text-white leading-tight">System Maintenance</h4>
                      <p className="text-[10px] text-indigo-400 font-data-mono">V3.4 Update</p>
                    </div>
                  </div>
                  <span className="text-[10px] text-slate-500 font-data-mono">Just now</span>
                </div>
                {/* Content */}
                <div className="space-y-3 relative z-10">
                  <p className="text-sm text-slate-300 leading-relaxed">
                    Our engineering team will be performing a <span className="text-secondary font-medium">scheduled maintenance</span> window tonight at 02:00 UTC. Latency may occur.
                  </p>
                  <div className="bg-white/5 border border-white/10 rounded-lg p-3">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="material-symbols-outlined text-[14px] text-indigo-400">info</span>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Key Changes</span>
                    </div>
                    <ul className="text-xs text-slate-400 space-y-1.5 ml-1">
                      <li className="flex items-start gap-2"><span className="w-1 h-1 rounded-full bg-indigo-500 mt-1.5"></span>Improved Sync Engine</li>
                      <li className="flex items-start gap-2"><span className="w-1 h-1 rounded-full bg-indigo-500 mt-1.5"></span>Advanced Security Layers</li>
                    </ul>
                  </div>
                </div>
                {/* CTA in Preview */}
                <div className="mt-6 pt-4 border-t border-white/5 flex gap-3 relative z-10">
                  <button className="flex-1 py-2 bg-indigo-600/20 border border-indigo-500/30 rounded-lg text-xs font-bold text-indigo-300 hover:bg-indigo-600/30 transition-all">View Logs</button>
                  <button className="flex-1 py-2 glass-panel border border-white/10 rounded-lg text-xs font-bold text-white hover:bg-white/10 transition-all">Acknowledge</button>
                </div>
              </div>
              
              {/* Mock Mobile/App Indicator */}
              <div className="mt-8 px-4 py-2 rounded-full glass-panel border border-white/10 flex items-center gap-4">
                <span className="material-symbols-outlined text-slate-600 text-sm">smartphone</span>
                <span className="text-[10px] text-slate-500 font-label-caps font-semibold uppercase tracking-widest">Mobile Client View</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Action Bar */}
      <div className="mt-auto h-20 glass-panel rounded-xl flex items-center justify-between px-8 border border-white/10 bg-white/5">
        <div className="flex items-center gap-8">
          <div className="flex flex-col">
            <span className="text-[10px] text-slate-500 font-label-caps uppercase tracking-widest mb-1 font-semibold">Estimated Reach</span>
            <span className="font-data-mono text-lg text-white">12,482 Users</span>
          </div>
          <div className="h-8 w-px bg-white/10"></div>
          <div className="flex flex-col">
            <span className="text-[10px] text-slate-500 font-label-caps uppercase tracking-widest mb-1 font-semibold">Security Clearance</span>
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-sm text-secondary">verified_user</span>
              <span className="text-xs font-medium text-slate-300">Level 4 Admin Required</span>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <button className="px-6 py-3 text-xs font-bold uppercase tracking-widest text-slate-400 hover:text-white transition-colors">Discard Draft</button>
          <button 
            disabled={isPublishing}
            onClick={handlePublish}
            className={`relative group p-[1px] rounded-lg overflow-hidden transition-all hover:scale-105 active:scale-95 duration-200 ${isPublishing ? 'opacity-50 cursor-not-allowed' : ''}`}
          >
            {/* Gradient Border Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 via-secondary to-indigo-500 animate-gradient-x"></div>
            {/* Button Body */}
            <div className="relative bg-surface-container-lowest px-8 py-3 rounded-[7px] flex items-center gap-3">
              <span className="material-symbols-outlined text-indigo-400">{isPublishing ? 'sync' : 'send'}</span>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-white">{isPublishing ? 'Publishing...' : 'Publish Announcement'}</span>
              {/* Inner Glow */}
              <div className="absolute inset-0 bg-indigo-500/5 blur-sm rounded-lg group-hover:bg-indigo-500/10"></div>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}
