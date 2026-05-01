"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function NotificationQueue() {
  const [notifications, setNotifications] = useState([
    {
      id: "1",
      title: "Security Protocol Update",
      priority: "Priority High",
      content: "System **Node-Delta** has completed its encryption handshake. Your session integrity is now protected under **RSA-4096** standards.",
      listItems: [
        "Firewall layers updated to v9.1",
        "Intrusion detection active"
      ]
    },
    {
      id: "2",
      title: "System Maintenance",
      priority: "Priority Normal",
      content: "Scheduled downtime will occur tonight at 02:00 UTC.",
      listItems: []
    }
  ]);

  const dismiss = () => {
    setNotifications((prev) => prev.slice(1));
  };

  if (notifications.length === 0) return null;

  const current = notifications[0];

  return (
    <div className="fixed bottom-8 right-8 z-[100] w-[380px] h-[320px] pointer-events-none">
      <AnimatePresence>
        {notifications.length > 0 && (
          <motion.div
            key={current.id}
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, x: 100, scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="absolute inset-0 bg-[#13131b]/80 backdrop-blur-xl rounded-xl p-6 glow-indigo flex flex-col pointer-events-auto border border-indigo-500/20"
          >
            {/* Card Header */}
            <div className="flex justify-between items-start mb-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary glow-indigo">
                  <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>auto_awesome</span>
                </div>
                <div>
                  <h4 className="text-white font-header-md text-sm leading-tight tracking-tight">{current.title}</h4>
                  <span className="text-[10px] font-label-caps text-primary-fixed-dim uppercase tracking-widest">{current.priority}</span>
                </div>
              </div>
              <button onClick={dismiss} className="text-slate-500 hover:text-white transition-colors">
                <span className="material-symbols-outlined text-lg">close</span>
              </button>
            </div>

            {/* Notification Content */}
            <div className="flex-1 overflow-y-auto pr-2 custom-scrollbar">
              <div className="text-sm text-slate-300 leading-relaxed space-y-3 font-body-main">
                <p dangerouslySetInnerHTML={{ __html: current.content.replace(/\*\*(.*?)\*\*/g, '<strong class="text-white">$1</strong>') }}></p>
                {current.listItems.length > 0 && (
                  <ul className="list-disc pl-4 space-y-1 text-xs opacity-80 text-slate-400">
                    {current.listItems.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                )}
              </div>
            </div>

            {/* Card Footer */}
            <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between">
              <div className="flex flex-col gap-1.5">
                <span className="font-label-caps text-[10px] text-slate-500 uppercase font-semibold">
                  {notifications.length > 1 ? `1 of ${notifications.length} updates` : "1 update"}
                </span>
              </div>
              <button onClick={dismiss} className="px-5 py-2 bg-indigo-500 hover:bg-indigo-400 text-white text-xs font-bold rounded-lg transition-all active:scale-95 shadow-[0_4px_14px_0_rgba(99,102,241,0.39)]">
                Mark as Read
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* Background stack effect */}
      {notifications.length > 1 && (
        <div className="absolute inset-x-2 bottom-1 h-[260px] bg-[#13131b]/50 backdrop-blur-sm border border-white/5 rounded-xl translate-y-2 scale-95 -z-20 transition-all duration-500"></div>
      )}
      {notifications.length > 2 && (
        <div className="absolute inset-x-4 bottom-2 h-[260px] bg-[#13131b]/30 backdrop-blur-sm border border-white/5 rounded-xl translate-y-4 scale-90 -z-30 transition-all duration-500"></div>
      )}
    </div>
  );
}
