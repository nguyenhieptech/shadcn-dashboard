import { AppShell } from "@/components/app-shell/app-shell";

export default function DashboardLayout({ children }: React.PropsWithChildren) {
  return <AppShell>{children}</AppShell>;
}
