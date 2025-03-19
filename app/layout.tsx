import type { Metadata } from "next";
import { Tektur } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider"

const tektur = Tektur({
  weight: "400",
  variable: "--font-tektur",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kian Jearard Naquines",
  description: "Kian Naquines Portfolio",
  icons: {
    icon: "/anime_me.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
    <body className={`${tektur.variable} antialiased bg-background text-foreground font-[family-name:var(--font-tektur)]`}>
      <ThemeProvider
        attribute="class"
        defaultTheme="dark"
        enableSystem
        disableTransitionOnChange
      >
        {children}
      </ThemeProvider>
    </body>
  </html>
  );
}
