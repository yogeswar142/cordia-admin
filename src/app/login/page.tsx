"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { loginAdmin } from "./actions";

export default function LoginPage() {
  const [terminalId, setTerminalId] = useState("");
  const [passkey, setPasskey] = useState("");
  const [maintainConnection, setMaintainConnection] = useState(false);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    try {
      const result = await loginAdmin(terminalId, passkey);
      if (result.success) {
        router.push("/dashboard/admin");
      } else {
        setError(result.error || "Authentication failed");
      }
    } catch (err) {
      setError("System connection error");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#050505] text-on-surface flex flex-col relative overflow-hidden font-body-main selection:bg-indigo-500/30">
      {/* Background Ambient Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-indigo-900/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[300px] bg-secondary/5 rounded-full blur-[100px] pointer-events-none"></div>

      {/* Top Navigation Bar */}
      <header className="w-full flex items-center justify-between px-8 py-6 z-10">
        <div className="text-white font-bold tracking-widest text-lg uppercase">
          CYPHER
        </div>
        <nav className="hidden md:flex items-center gap-12 font-label-caps text-[10px] tracking-widest uppercase text-slate-500 font-semibold">
          <Link href="#" className="hover:text-white transition-colors">Documentation</Link>
          <Link href="/changelog" className="hover:text-white transition-colors">Changelog</Link>
          <Link href="#" className="hover:text-white transition-colors">Showcase</Link>
        </nav>
        <div className="flex items-center gap-6 text-slate-500">
          <button className="hover:text-white transition-colors">
            <span className="material-symbols-outlined text-xl">language</span>
          </button>
          <button className="hover:text-white transition-colors">
            <span className="material-symbols-outlined text-xl">help_outline</span>
          </button>
        </div>
      </header>

      {/* Main Content (Centered) */}
      <main className="flex-1 flex flex-col items-center justify-center z-10 px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="w-full max-w-[440px] bg-[#111116] border border-white/5 rounded-xl p-10 shadow-2xl relative"
        >
          {/* Header */}
          <div className="text-center mb-10">
            <h1 className="text-white font-bold tracking-[0.2em] text-xl uppercase mb-2">Cordia</h1>
            <p className="text-slate-500 font-label-caps text-[10px] tracking-[0.2em] uppercase font-semibold">Secure Terminal Access</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-6">
            {error && (
              <div className="bg-red-500/10 border border-red-500/20 rounded-md p-3 text-red-400 text-xs text-center font-bold tracking-wider uppercase">
                {error}
              </div>
            )}
            {/* Terminal ID Input */}
            <div className="space-y-2">
              <label className="block text-slate-500 font-label-caps text-[10px] tracking-[0.15em] uppercase font-semibold">Terminal ID</label>
              <div className="relative">
                <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 text-lg">alternate_email</span>
                <input 
                  type="text" 
                  value={terminalId}
                  onChange={(e) => setTerminalId(e.target.value)}
                  placeholder="admin_user_01" 
                  className="w-full bg-[#1b1b23] border border-white/5 rounded-md py-3 pl-12 pr-4 text-sm text-white placeholder:text-slate-600 focus:outline-none focus:border-indigo-500/50 transition-colors"
                />
              </div>
            </div>

            {/* Passkey Input */}
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <label className="block text-slate-500 font-label-caps text-[10px] tracking-[0.15em] uppercase font-semibold">Passkey</label>
                <Link href="#" className="text-slate-600 font-label-caps text-[9px] tracking-[0.1em] uppercase hover:text-indigo-400 transition-colors">Forgot Credentials?</Link>
              </div>
              <div className="relative">
                <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 text-lg">lock</span>
                <input 
                  type="password" 
                  value={passkey}
                  onChange={(e) => setPasskey(e.target.value)}
                  placeholder="••••••••••••" 
                  className="w-full bg-[#1b1b23] border border-white/5 rounded-md py-3 pl-12 pr-4 text-sm text-white placeholder:text-slate-600 focus:outline-none focus:border-indigo-500/50 transition-colors tracking-widest"
                />
              </div>
            </div>

            {/* Maintain Connection Toggle */}
            <div className="flex items-center gap-3 pt-2">
              <button 
                type="button" 
                onClick={() => setMaintainConnection(!maintainConnection)}
                className={`relative inline-flex h-5 w-9 items-center rounded-full transition-colors ${maintainConnection ? 'bg-indigo-500' : 'bg-white/10'}`}
              >
                <span className={`inline-block h-3.5 w-3.5 transform rounded-full bg-white transition-transform ${maintainConnection ? 'translate-x-4.5' : 'translate-x-1'}`} />
              </button>
              <span className="text-slate-500 font-label-caps text-[9px] tracking-[0.15em] uppercase font-semibold">Maintain Connection</span>
            </div>

            {/* Login Button */}
            <button 
              type="submit" 
              disabled={isLoading}
              className={`w-full mt-8 py-3.5 rounded-md bg-gradient-to-r from-indigo-500 to-[#5b63f5] text-white font-bold text-[11px] tracking-[0.2em] uppercase shadow-[0_0_20px_rgba(99,102,241,0.3)] hover:shadow-[0_0_25px_rgba(99,102,241,0.5)] transition-all active:scale-[0.98] ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
            >
              {isLoading ? "Synchronizing..." : "Initialize Session"}
            </button>

            {/* Divider */}
            <div className="flex items-center justify-center gap-4 py-2">
              <div className="h-px bg-white/5 flex-1"></div>
              <span className="text-slate-600 font-label-caps text-[9px] tracking-widest uppercase">Or</span>
              <div className="h-px bg-white/5 flex-1"></div>
            </div>

            {/* Discord Login */}
            <button 
              type="button" 
              className="w-full py-3.5 rounded-md bg-[#1b1b23] border border-white/5 text-slate-300 font-bold text-[10px] tracking-[0.15em] uppercase flex items-center justify-center gap-3 hover:bg-white/5 hover:text-white transition-all active:scale-[0.98]"
            >
              <svg width="18" height="18" viewBox="0 0 127.14 96.36" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M107.7,8.07A105.15,105.15,0,0,0,81.47,0a72.06,72.06,0,0,0-3.36,6.83A97.68,97.68,0,0,0,49,6.83,72.37,72.37,0,0,0,45.64,0,105.89,105.89,0,0,0,19.39,8.09C2.79,32.65-1.71,56.6.54,80.21h0A105.73,105.73,0,0,0,32.71,96.36,77.7,77.7,0,0,0,39.6,85.25a68.42,68.42,0,0,1-10.85-5.18c.91-.66,1.8-1.34,2.66-2a75.57,75.57,0,0,0,64.32,0c.87.71,1.76,1.39,2.66,2a67.59,67.59,0,0,1-10.87,5.19,77,77,0,0,0,6.89,11.1A105.25,105.25,0,0,0,126.6,80.22h0C129.24,52.84,122.09,29.11,107.7,8.07ZM42.45,65.69C36.18,65.69,31,60,31,53s5-12.74,11.43-12.74S54,46,53.89,53,48.84,65.69,42.45,65.69Zm42.24,0C78.41,65.69,73.31,60,73.31,53s5-12.74,11.43-12.74S96.1,46,96,53,91,65.69,84.69,65.69Z" />
              </svg>
              Connect via Discord
            </button>
          </form>

          {/* System Status */}
          <div className="mt-8 flex justify-center">
            <div className="flex items-center gap-2 bg-black/40 border border-white/5 px-4 py-1.5 rounded-full">
              <div className="w-1.5 h-1.5 rounded-full bg-[#4edea3] shadow-[0_0_8px_#4edea3]"></div>
              <span className="text-[#4edea3] font-data-mono text-[9px] tracking-widest uppercase font-semibold">System Status: Nominal</span>
            </div>
          </div>
        </motion.div>
      </main>

      {/* Bottom Footer */}
      <footer className="w-full flex flex-col md:flex-row items-center justify-between px-8 py-6 z-10 gap-4">
        <div className="text-slate-600 font-label-caps text-[9px] tracking-[0.1em] uppercase">
          © 2024 CYPHER SYSTEMS. ENCRYPTED ACCESS ONLY.
        </div>
        <div className="flex items-center gap-8 text-slate-600 font-label-caps text-[9px] tracking-[0.1em] uppercase">
          <Link href="#" className="hover:text-slate-400 transition-colors">Security</Link>
          <Link href="#" className="hover:text-slate-400 transition-colors">API Status</Link>
          <Link href="#" className="hover:text-slate-400 transition-colors">Legal</Link>
        </div>
      </footer>
    </div>
  );
}
