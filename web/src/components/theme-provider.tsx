// https://ui.shadcn.com/docs/dark-mode/next#create-a-theme-provider
// TODO: https://github.com/shadcn-ui/ui/pull/6006/files

"use client";

import { type ThemeProviderProps } from "next-themes";
import dynamic from "next/dynamic";
import * as React from "react";

const NextThemesProvider = dynamic(
  () => import("next-themes").then((e) => e.ThemeProvider),
  {
    ssr: false,
  }
);

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}
