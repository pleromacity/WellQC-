"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Sidebar } from "@/components/ui/sidebar";
import { Header } from "@/components/ui/header";

export function AppShell({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const [currentRole, setCurrentRole] = useState("PETROPHYSICIST");
  const [currentUser, setCurrentUser] = useState<{ name: string; email: string; department: string } | null>(null);

  useEffect(() => {
    fetch("/api/auth/me", { cache: "no-store" }).then(async (response) => {
      if (!response.ok) {
        router.replace("/login");
        return;
      }
      const { user } = await response.json();
      setCurrentRole(user.role || "PETROPHYSICIST");
      setCurrentUser({ name: user.name, email: user.email, department: user.department || "Subsurface Analytics" });
    }).catch(() => router.replace("/login"));
  }, [router]);

  const handleLogout = async () => {
    await fetch("/api/auth/logout", { method: "POST" });
    router.replace("/login");
    router.refresh();
  };

  if (!currentUser) return <div className="min-h-screen bg-wellqc-dark" />;

  return (
    <div className="flex min-h-screen bg-wellqc-dark">
      <Sidebar currentRole={currentRole} />
      <div className="flex-1 flex flex-col min-w-0">
        <Header
          currentRole={currentRole}
          onRoleChange={setCurrentRole}
          currentUser={currentUser}
          onLogout={handleLogout}
        />
        <main className="flex-1 p-6 overflow-y-auto bg-gradient-to-b from-wellqc-dark via-wellqc-dark to-[#080b11]">
          {children}
        </main>
      </div>
    </div>
  );
}
