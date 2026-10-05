import type { Metadata } from "next";
import "./globals.css";

import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter'

export const metadata: Metadata = {
  title: "Assignment 2",
  description: "In-Class work for CS494",
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
