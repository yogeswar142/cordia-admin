"use client";

import React, { useState, useEffect } from "react";
import ModerationHub from "./ModerationHub";
import BotManager from "./BotManager";
import AnnouncementComposer from "./AnnouncementComposer";
import { motion, AnimatePresence } from "framer-motion";

export default function AdminDashboardClient() {
  const [activeTab, setActiveTab] = useState<"moderation" | "bots" | "announcements">("moderation");
  const [pulse, setPulse] = useState<any>(null);
  const [insights, setInsights] = useState<any>(null);

  useEffect(() => {
    const fetchAdminData = async () => {
      try {
        const [pulseRes, insightsRes] = await Promise.all([
          fetch('/api/admin/pulse'),
          fetch('/api/admin/insights')
        ]);
        
        const pulseData = await pulseRes.json();
        const insightsData = await insightsRes.json();

        if (pulseData.success) setPulse(pulseData.data);
        if (insightsData.success) setInsights(insightsData.data);
      } catch (err) {
        console.error("Admin data fetch failed:", err);
      }
    };

    fetchAdminData();
    const interval = setInterval(fetchAdminData, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="p-8 space-y-8 overflow-y-auto h-[calc(100vh-64px)]">
      {insights?.anomalies?.length > 0 && (
        <motion.div 
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          className="bg-error/10 border border-error/20 rounded-xl p-4 flex items-center gap-4 text-error"
        >
          <span className="material-symbols-outlined">warning</span>
          <div className="flex-1">
            <p className="font-bold text-sm">ANOMALY DETECTED</p>
            <p className="text-xs opacity-80">{insights.anomalies.length} bots are reporting "Impossible Growth" patterns (e.g. &gt;5k events/hr).</p>
          </div>
          <button className="px-4 py-2 bg-error/20 rounded text-[10px] font-bold uppercase tracking-widest hover:bg-error/30 transition-colors">Review Anomalies</button>
        </motion.div>
      )}

      {/* Statistics Overview Header */}
      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-12 lg:col-span-4 glass-card p-6 rounded-xl relative overflow-hidden group">
          <div className="flex justify-between items-start mb-4">
            <div className="space-y-1">
              <span className="font-label-caps text-[12px] uppercase tracking-[0.1em] text-slate-500 font-semibold">Total Bots</span>
              <h3 className="font-headline-lg text-[32px] font-semibold text-white tracking-[0.02em] leading-[1.2]">12,842</h3>
            </div>
            <div className="p-2 rounded bg-indigo-500/10 text-indigo-400">
              <span className="material-symbols-outlined">smart_toy</span>
            </div>
          </div>
          <div className="flex items-center gap-2 text-secondary text-xs">
            <span className="material-symbols-outlined text-sm">trending_up</span>
            <span>+2.4% from yesterday</span>
          </div>
          <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-indigo-500/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
        </div>
        <div className="col-span-12 lg:col-span-4 glass-card p-6 rounded-xl relative overflow-hidden group">
          <div className="flex justify-between items-start mb-4">
            <div className="space-y-1">
              <span className="font-label-caps text-[12px] uppercase tracking-[0.1em] text-slate-500 font-semibold">Active Telemetry</span>
              <h3 className="font-headline-lg text-[32px] font-semibold text-white tracking-[0.02em] leading-[1.2]">{pulse?.eps?.current || 0} <span className="text-sm font-normal text-slate-400">EPS</span></h3>
            </div>
            <div className="p-2 rounded bg-secondary/10 text-secondary">
              <span className="material-symbols-outlined">{pulse?.database?.status === 'connected' ? 'pulse_alert' : 'error'}</span>
            </div>
          </div>
          <div className="flex items-center gap-2 text-secondary text-xs">
            <span className="material-symbols-outlined text-sm">bolt</span>
            <span>{pulse?.database?.latencyMs || 0}ms DB Latency</span>
          </div>
          <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-secondary/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
        </div>
        <div className="col-span-12 lg:col-span-4 glass-card p-6 rounded-xl relative overflow-hidden group">
          <div className="flex justify-between items-start mb-4">
            <div className="space-y-1">
              <span className="font-label-caps text-[12px] uppercase tracking-[0.1em] text-slate-500 font-semibold">Global Trend</span>
              <h3 className="font-headline-lg text-[24px] font-semibold text-white tracking-[0.02em] leading-[1.2]">/{insights?.topCommands?.[0]?.command || 'loading...'}</h3>
            </div>
            <div className="p-2 rounded bg-primary-container/10 text-primary-container">
              <span className="material-symbols-outlined">trending_up</span>
            </div>
          </div>
          <div className="flex items-center gap-2 text-primary-container text-xs">
            <span className="material-symbols-outlined text-sm">star</span>
            <span>{insights?.topCommands?.[0]?.count || 0} uses today</span>
          </div>
          <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary-container/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
        </div>
      </div>

      {/* Tabs Section */}
      <div className="space-y-6">
        <div className="flex gap-8 border-b border-white/5">
          <button 
            onClick={() => setActiveTab("moderation")}
            className={`pb-4 font-label-caps text-[12px] tracking-[0.1em] font-semibold uppercase transition-colors ${activeTab === "moderation" ? "border-b-2 border-indigo-400 text-indigo-400" : "border-b-2 border-transparent text-slate-500 hover:text-slate-300"}`}
          >
            Moderation Hub
          </button>
          <button 
            onClick={() => setActiveTab("bots")}
            className={`pb-4 font-label-caps text-[12px] tracking-[0.1em] font-semibold uppercase transition-colors ${activeTab === "bots" ? "border-b-2 border-indigo-400 text-indigo-400" : "border-b-2 border-transparent text-slate-500 hover:text-slate-300"}`}
          >
            Bot Manager
          </button>
          <button 
            onClick={() => setActiveTab("announcements")}
            className={`pb-4 font-label-caps text-[12px] tracking-[0.1em] font-semibold uppercase transition-colors ${activeTab === "announcements" ? "border-b-2 border-indigo-400 text-indigo-400" : "border-b-2 border-transparent text-slate-500 hover:text-slate-300"}`}
          >
            Announcement Composer
          </button>
        </div>

        {/* Tab Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
          >
            {activeTab === "moderation" && <ModerationHub />}
            {activeTab === "bots" && (
              <div className="space-y-6">
                <div className="glass-card p-6 rounded-xl border border-white/5 bg-white/2">
                  <div className="flex justify-between items-center mb-6">
                    <div>
                      <h4 className="font-header-md text-lg font-medium text-white">SDK Fleet Management</h4>
                      <p className="text-xs text-slate-500 mt-1">Configure the remote handshake for all connected bots.</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-[10px] font-bold text-slate-500 uppercase">Latest SDK</span>
                      <input 
                        type="text" 
                        defaultValue="1.2.2"
                        className="bg-black/40 border border-white/10 rounded px-3 py-1 text-xs font-mono text-indigo-400 w-24 outline-none focus:border-indigo-500"
                      />
                      <button className="bg-indigo-600 hover:bg-indigo-500 text-white px-4 py-1 rounded text-[10px] font-bold uppercase transition-colors">Update Fleet</button>
                    </div>
                  </div>
                </div>
                <BotManager />
              </div>
            )}
            {activeTab === "announcements" && <AnnouncementComposer />}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
