"use client";

import { useState } from "react";
import { Sidebar } from "@/components/ui/sidebar";
import { Header } from "@/components/ui/header";

export function AppShell({ children }: { children: React.ReactNode }) {
  const [currentRole, setCurrentRole] = useState("PETROPHYSICIST");
  const [currentUser] = useState({
    name: "Alexandre Dubois",
    email: "alexandre.dubois@petro-analytics.com",
    department: "Global Subsurface QA",
  });

  return (
    <div className="flex min-h-screen bg-wellqc-dark">
      <Sidebar currentRole={currentRole} />
      <div className="flex-1 flex flex-col min-w-0">
        <Header
          currentRole={currentRole}
          onRoleChange={setCurrentRole}
          currentUser={currentUser}
        />
        <main className="flex-1 p-6 overflow-y-auto bg-gradient-to-b from-wellqc-dark via-wellqc-dark to-[#080b11]">
          {children}
        </main>
      </div>
    </div>
  );
}
