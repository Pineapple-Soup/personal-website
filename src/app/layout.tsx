import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import "@/app/globals.css";

export const metadata: Metadata = {
  title: "PineappleSoup",
  description: "Adithya Iyer's personal website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="class"> 
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
