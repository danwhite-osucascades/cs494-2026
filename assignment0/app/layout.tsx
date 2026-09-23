import type { Metadata } from "next";
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
