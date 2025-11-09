import type { Metadata, Viewport } from "next";
import { Tektur } from "next/font/google";
/* @ts-ignore - Next.js provides CSS type declarations via next-env.d.ts */
import "./globals.css"; // Side-effect import for global styles
import { ThemeProvider } from "@/components/theme-provider"
import { SpeedInsights } from "@vercel/speed-insights/next"
import "./globals.css";

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

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
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
          <SpeedInsights />
        </ThemeProvider>
      </body>
    </html>
  );
}
