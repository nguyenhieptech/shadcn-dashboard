import { ThemeProvider } from "@/components/providers/theme-provider";
import { TailwindIndicator } from "@/components/tailwind-indicator";
import { SidebarProvider } from "@/components/ui/sidebar";

export function AppProvider({ children }: React.PropsWithChildren) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <SidebarProvider>
        {children}
        <TailwindIndicator />
      </SidebarProvider>
    </ThemeProvider>
  );
}
