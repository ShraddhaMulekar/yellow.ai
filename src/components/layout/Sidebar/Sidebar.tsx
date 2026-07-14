import type { ReactNode } from "react";

interface SidebarProps {
  children: ReactNode;
}

function Sidebar({ children }: SidebarProps) {
  return (
    <aside>
      {children}
    </aside>
  );
}

export default Sidebar;