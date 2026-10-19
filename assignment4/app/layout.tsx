import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter'

import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Assignment 4",
  description: "Dan is Cool!",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body>
        <AppRouterCacheProvider>
          {children}
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
