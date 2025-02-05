import { AppSidebar } from "@/components/app-shell/app-sidebar";
import { Header } from "@/components/app-shell/header";
import { SidebarInset } from "@/components/ui/sidebar";

export function AppShell({ children }: React.PropsWithChildren) {
  return (
    <>
      <AppSidebar />
      <SidebarInset>
        <Header />
        {children}
      </SidebarInset>
    </>
  );
}
