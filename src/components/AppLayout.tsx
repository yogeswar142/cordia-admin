import React from "react";
import Sidebar from "./Sidebar";
import TopAppBar from "./TopAppBar";

import NotificationQueue from "./NotificationQueue";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen bg-background text-on-surface">
      <Sidebar />
      <main className="ml-64 flex-1 flex flex-col min-h-screen relative">
        <TopAppBar />
        {children}
        <NotificationQueue />
      </main>
    </div>
  );
}
