import type { ReactNode } from "react";

interface SidebarProps {
  children: ReactNode;
}

function Sidebar({ children }: SidebarProps) {
  return (
    <aside className="app-sidebar">
      {children}
    </aside>
  );
}

export default Sidebar;