import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import { Analytics } from "@vercel/analytics/next";

export const metadata: Metadata = {
  metadataBase: new URL("https://lucasanderson.dev"),
  title: {
    default: "Lucas Anderson — Software Engineer",
    template: "%s — Lucas Anderson",
  },
  description:
    "Lucas Anderson is a new-grad software engineer building full-stack apps with React, Next.js, TypeScript, Node, PostgreSQL, and React Native.",
  openGraph: {
    type: "website",
    url: "/",
    title: "Lucas Anderson — Software Engineer",
    description:
      "New-grad full-stack engineer focused on React, Next.js, TypeScript, Node, PostgreSQL, and product-focused systems work.",
    siteName: "Lucas Anderson",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Lucas Anderson Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Lucas Anderson — Software Engineer",
    description:
      "New-grad full-stack engineer focused on React, Next.js, TypeScript, Node, PostgreSQL, and React Native.",
  },
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <body className="antialiased">
        {/* Skip link for accessibility */}
        <a href="#content" className="skip-link">
          Skip to content
        </a>
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
