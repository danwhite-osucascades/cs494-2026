import type { Metadata } from "next";

// globals is styling for the entire website regardless of entry point
import "./globals.css";

export const metadata: Metadata = {
  title: "Assignment0",
  description: "Dan is cool",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
