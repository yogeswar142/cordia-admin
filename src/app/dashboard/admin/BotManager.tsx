import React from "react";

export default function BotManager() {
  return (
    <div className="grid grid-cols-12 gap-6">
      <div className="col-span-12 md:col-span-6 lg:col-span-4 glass-card p-6 rounded-xl hover:border-indigo-500/30 transition-all neon-indigo-glow">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-indigo-500 to-primary-container p-0.5">
              <div className="w-full h-full bg-black rounded-lg flex items-center justify-center">
                <span className="material-symbols-outlined text-indigo-400">adb</span>
              </div>
            </div>
            <div>
              <h5 className="text-white font-medium">Aeon-Alpha</h5>
              <p className="text-[10px] text-slate-500 uppercase font-data-mono">v1.0.4-stable</p>
            </div>
          </div>
          <div className="flex flex-col items-end gap-2">
            <span className="material-symbols-outlined text-secondary text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
            <div className="flex gap-2">
              <button 
                title="Impersonate Owner"
                className="p-1.5 rounded bg-white/5 hover:bg-white/10 text-slate-400 hover:text-indigo-400 transition-colors"
                onClick={async () => {
                  const res = await fetch('https://api.cordialane.com/api/v1/admin/impersonate', {
                    method: 'POST',
                    headers: { 
                      'Content-Type': 'application/json',
                      'Authorization': 'Bearer cordia_local_dev_key'
                    },
                    body: JSON.stringify({ botId: 'Aeon-Alpha' })
                  });
                  const data = await res.json();
                  if (data.success) {
                    window.open(data.data.redirectUrl, '_blank');
                  }
                }}
              >
                <span className="material-symbols-outlined text-sm">visibility</span>
              </button>
              <button 
                title="Copy API Key"
                className="p-1.5 rounded bg-white/5 hover:bg-white/10 text-slate-400 hover:text-secondary transition-colors"
              >
                <span className="material-symbols-outlined text-sm">key</span>
              </button>
            </div>
          </div>
        </div>
        <div className="mb-6 h-12 flex items-end gap-1">
          {/* Telemetry Sparks */}
          <div className="w-full flex items-end gap-[2px]">
            <div className="w-1.5 h-[20%] bg-indigo-500/40 rounded-t-sm"></div>
            <div className="w-1.5 h-[40%] bg-indigo-500/40 rounded-t-sm"></div>
            <div className="w-1.5 h-[35%] bg-indigo-500/60 rounded-t-sm"></div>
            <div className="w-1.5 h-[60%] bg-indigo-500/70 rounded-t-sm"></div>
            <div className="w-1.5 h-[80%] bg-indigo-500 rounded-t-sm"></div>
            <div className="w-1.5 h-[55%] bg-indigo-500/80 rounded-t-sm"></div>
            <div className="w-1.5 h-[90%] bg-indigo-500 rounded-t-sm"></div>
            <div className="w-1.5 h-[70%] bg-indigo-500/70 rounded-t-sm"></div>
            <div className="w-1.5 h-[100%] bg-indigo-500 rounded-t-sm"></div>
            <div className="w-1.5 h-[85%] bg-indigo-500 rounded-t-sm"></div>
            <div className="w-1.5 h-[95%] bg-indigo-500 rounded-t-sm"></div>
            <div className="w-1.5 h-[45%] bg-indigo-500/50 rounded-t-sm"></div>
            <div className="w-1.5 h-[30%] bg-indigo-500/30 rounded-t-sm"></div>
            <div className="w-1.5 h-[65%] bg-indigo-500/70 rounded-t-sm"></div>
          </div>
        </div>
        <div className="flex justify-between items-center pt-4 border-t border-white/5">
          <div className="space-y-1">
            <p className="text-[10px] text-slate-500 uppercase font-label-caps">Telemetry</p>
            <p className="text-sm text-white font-medium">99.8% Uplink</p>
          </div>
          <div className="flex items-center gap-3">
            <label className="relative inline-flex items-center cursor-pointer">
              <input defaultChecked className="sr-only peer" type="checkbox" />
              <div className="w-9 h-5 bg-white/10 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-slate-400 after:border-slate-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-secondary peer-checked:after:bg-white"></div>
            </label>
            <span className="text-[10px] text-slate-400 uppercase font-bold">Active</span>
          </div>
        </div>
      </div>

      <div className="col-span-12 md:col-span-6 lg:col-span-4 glass-card p-6 rounded-xl hover:border-error/30 transition-all">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-lg bg-white/5 p-0.5 border border-white/10">
              <div className="w-full h-full bg-black rounded-lg flex items-center justify-center">
                <span className="material-symbols-outlined text-slate-500">memory</span>
              </div>
            </div>
            <div>
              <h5 className="text-white font-medium">Core-Omni</h5>
              <p className="text-[10px] text-slate-500 uppercase font-data-mono">v0.9.1-beta</p>
            </div>
          </div>
          <div className="flex flex-col items-end gap-2">
            <span className="material-symbols-outlined text-error text-sm">warning</span>
          </div>
        </div>
        <div className="mb-6 h-12 flex items-end gap-1 opacity-40 grayscale">
          <div className="w-full flex items-end gap-[2px]">
            <div className="w-1.5 h-[10%] bg-slate-500/40 rounded-t-sm"></div>
            <div className="w-1.5 h-[15%] bg-slate-500/40 rounded-t-sm"></div>
            <div className="w-1.5 h-[12%] bg-slate-500/60 rounded-t-sm"></div>
            <div className="w-1.5 h-[10%] bg-slate-500/70 rounded-t-sm"></div>
            <div className="w-1.5 h-[10%] bg-slate-500 rounded-t-sm"></div>
            <div className="w-1.5 h-[10%] bg-slate-500/80 rounded-t-sm"></div>
            <div className="w-1.5 h-[10%] bg-slate-500 rounded-t-sm"></div>
          </div>
        </div>
        <div className="flex justify-between items-center pt-4 border-t border-white/5">
          <div className="space-y-1">
            <p className="text-[10px] text-slate-500 uppercase font-label-caps">Status</p>
            <p className="text-sm text-error font-medium">Suspended</p>
          </div>
          <div className="flex items-center gap-3">
            <label className="relative inline-flex items-center cursor-pointer">
              <input className="sr-only peer" type="checkbox" />
              <div className="w-9 h-5 bg-white/10 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-slate-400 after:border-slate-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-secondary peer-checked:after:bg-white"></div>
            </label>
            <span className="text-[10px] text-slate-400 uppercase font-bold">Offline</span>
          </div>
        </div>
      </div>

      <div className="col-span-12 md:col-span-6 lg:col-span-4 glass-card p-6 rounded-xl hover:border-indigo-500/30 transition-all neon-indigo-glow">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-secondary to-indigo-500 p-0.5">
              <div className="w-full h-full bg-black rounded-lg flex items-center justify-center">
                <span className="material-symbols-outlined text-secondary">rocket_launch</span>
              </div>
            </div>
            <div>
              <h5 className="text-white font-medium">Zenith-Link</h5>
              <p className="text-[10px] text-slate-500 uppercase font-data-mono">v2.1.0-final</p>
            </div>
          </div>
          <div className="flex flex-col items-end gap-2">
            <span className="material-symbols-outlined text-secondary text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
            <div className="flex gap-2">
              <button 
                title="Impersonate Owner"
                className="p-1.5 rounded bg-white/5 hover:bg-white/10 text-slate-400 hover:text-indigo-400 transition-colors"
                onClick={async () => {
                  const res = await fetch('https://api.cordialane.com/api/v1/admin/impersonate', {
                    method: 'POST',
                    headers: { 
                      'Content-Type': 'application/json',
                      'Authorization': 'Bearer cordia_local_dev_key'
                    },
                    body: JSON.stringify({ botId: 'Aeon-Alpha' })
                  });
                  const data = await res.json();
                  if (data.success) {
                    window.open(data.data.redirectUrl, '_blank');
                  }
                }}
              >
                <span className="material-symbols-outlined text-sm">visibility</span>
              </button>
              <button 
                title="Copy API Key"
                className="p-1.5 rounded bg-white/5 hover:bg-white/10 text-slate-400 hover:text-secondary transition-colors"
              >
                <span className="material-symbols-outlined text-sm">key</span>
              </button>
            </div>
          </div>
        </div>
        <div className="mb-6 h-12 flex items-end gap-1">
          <div className="w-full flex items-end gap-[2px]">
            <div className="w-1.5 h-[60%] bg-secondary/40 rounded-t-sm"></div>
            <div className="w-1.5 h-[70%] bg-secondary/40 rounded-t-sm"></div>
            <div className="w-1.5 h-[85%] bg-secondary/60 rounded-t-sm"></div>
            <div className="w-1.5 h-[80%] bg-secondary/70 rounded-t-sm"></div>
            <div className="w-1.5 h-[90%] bg-secondary rounded-t-sm"></div>
            <div className="w-1.5 h-[95%] bg-secondary/80 rounded-t-sm"></div>
            <div className="w-1.5 h-[100%] bg-secondary rounded-t-sm"></div>
          </div>
        </div>
        <div className="flex justify-between items-center pt-4 border-t border-white/5">
          <div className="space-y-1">
            <p className="text-[10px] text-slate-500 uppercase font-label-caps">Optimization</p>
            <p className="text-sm text-white font-medium">Hyper-Mode</p>
          </div>
          <div className="flex items-center gap-3">
            <label className="relative inline-flex items-center cursor-pointer">
              <input defaultChecked className="sr-only peer" type="checkbox" />
              <div className="w-9 h-5 bg-white/10 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-slate-400 after:border-slate-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-secondary peer-checked:after:bg-white"></div>
            </label>
            <span className="text-[10px] text-slate-400 uppercase font-bold">Active</span>
          </div>
        </div>
      </div>
    </div>
  );
}
