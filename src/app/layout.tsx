import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import { Analytics } from "@vercel/analytics/next";
import { Inter } from "next/font/google";

export const metadata: Metadata = {
  metadataBase: new URL("https://lucasanderson.dev"),
  title: {
    default: "Lucas Anderson — Software Engineer",
    template: "%s — Lucas Anderson",
  },
  description: "BS CS ’26 • Building fast, scalable web apps",
  openGraph: {
    type: "website",
    url: "/",
    title: "Lucas Anderson — Software Engineer",
    description: "BS CS ’26 • Building fast, scalable web apps",
    siteName: "Lucas Anderson",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lucas Anderson — Software Engineer",
    description: "BS CS ’26 • Building fast, scalable web apps",
    creator: "@",
  },
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/favicon.svg",
  },
};

const inter = Inter({ subsets: ["latin"], display: "swap" });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        {/* Skip link for accessibility */}
        <a href="#content" className="skip-link">Skip to content</a>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <script
            type="application/ld+json"
            suppressHydrationWarning
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "Person",
                name: "Lucas Anderson",
                url: "https://lucasanderson.dev",
                jobTitle: "Software Engineer",
                sameAs: [
                  "https://github.com/ay-Lucas",
                  "https://linkedin.com/in/lucas-c-anderson",
                ],
              }),
            }}
          />
          {children}
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
