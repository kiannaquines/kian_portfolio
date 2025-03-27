import type { Metadata } from "next";
import { Tektur } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider"
import { SpeedInsights } from "@vercel/speed-insights/next"

const tektur = Tektur({
  weight: "400",
  variable: "--font-tektur",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://example.com'),
  title: { default: 'Kian Jearard Naquines', template: '%s | My Site' },
  description: 'Welcome to My Site',
  icons: {
    icon: "/anime_me.png",
  },
  alternates: {
    canonical: 'https://example.com',
  },
  openGraph: {
    title: 'Kian Jearard Naquines Portfolio',
    description: 'Welcome to Kian Jearard Naquines Portfolio',
    url: 'https://example.com',
    siteName: 'Kian Jearard Naquines Portfolio',
  },
}

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
        <SpeedInsights />
      </ThemeProvider>
    </body>
  </html>
  );
}
