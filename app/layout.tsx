import type { Metadata, Viewport } from "next";
import "./globals.css";

const SITE_URL = "https://franklin-g-wagbara.netlify.app";
const TITLE =
  "Franklin Wagbara — Senior Software Engineer & Gemini 2.5 Pro Contributor";
const DESCRIPTION =
  "Senior Software Engineer with 9+ years building high-performance backends in Node.js, TypeScript and .NET for banking, fintech and SaaS. Contributor to Gemini 2.5 Pro training. Available for remote senior roles globally.";
const OG_IMAGE = `${SITE_URL}/og-image.png`;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: SITE_URL },
  manifest: "/manifest.json",
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    type: "website",
    url: SITE_URL,
    title: TITLE,
    description:
      "9+ years across Node.js, TypeScript and .NET. Gemini 2.5 Pro training contributor. Available for remote senior roles.",
    images: [{ url: OG_IMAGE, width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@wagbaraf",
    title: "Franklin Wagbara — Senior Software Engineer",
    description:
      "9+ years across Node.js, TypeScript and .NET. Gemini 2.5 Pro training contributor.",
    images: [OG_IMAGE],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0d0c0b",
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Franklin Wagbara",
  url: SITE_URL,
  image: `${SITE_URL}/profile.jpg`,
  jobTitle: "Senior Software Engineer",
  description: DESCRIPTION,
  sameAs: [
    "https://www.linkedin.com/in/franklin-wagbara-047a1a45/",
    "https://github.com/franklinwagbara",
    "https://x.com/wagbaraf",
  ],
  knowsAbout: [
    "Node.js",
    "TypeScript",
    ".NET",
    "C#",
    "ASP.NET Core",
    "React",
    "Next.js",
    "Microservices",
    "Event-Driven Architecture",
    "PostgreSQL",
    "Large Language Models",
    "Banking Systems",
    "Fintech",
  ],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Lagos",
    addressCountry: "NG",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        {/* Exact font set from the redesign's index.css @import — Next strips
            remote @import rules from CSS, so it is loaded as a <link> here. */}
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300;0,9..144,400;0,9..144,500;0,9..144,600;1,9..144,300;1,9..144,400&family=Inter:wght@300;400;500;600&family=JetBrains+Mono:wght@400;500&display=swap"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
      </head>
      <body>
        <noscript>
          <h1>Franklin Wagbara — Senior Software Engineer</h1>
          <p>{DESCRIPTION}</p>
          <p>Contact: wagbarafranklin1@gmail.com</p>
          <p>Please enable JavaScript for the full experience.</p>
        </noscript>
        <div id="root">{children}</div>
      </body>
    </html>
  );
}
