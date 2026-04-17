import { Helmet } from "react-helmet-async";

export default function SEO() {
  // TODO: Update to your custom domain once purchased (e.g. https://franklinwagbara.dev)
  const siteUrl = "https://franklin-g-wagbara.netlify.app";
  const title =
    "Franklin Wagbara — Senior Software Engineer & Gemini 2.5 Pro Contributor";
  const description =
    "Senior Software Engineer with 9+ years building enterprise .NET and React platforms for banking and fintech. Contributor to Gemini 2.5 Pro training. Available for remote senior roles globally.";
  const ogImage = `${siteUrl}/og-image.png`;

  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Franklin Wagbara",
    url: siteUrl,
    image: `${siteUrl}/profile.jpg`,
    jobTitle: "Senior Software Engineer",
    description: description,
    sameAs: [
      "https://www.linkedin.com/in/franklin-wagbara-047a1a45/",
      "https://github.com/franklinwagbara",
      "https://x.com/wagbaraf",
    ],
    knowsAbout: [
      ".NET",
      "C#",
      "ASP.NET Core",
      "React",
      "Next.js",
      "TypeScript",
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

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={siteUrl} />

      {/* Open Graph (LinkedIn, Facebook, Slack, WhatsApp previews) */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={siteUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />

      {/* Twitter / X */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {/* JSON-LD Person schema */}
      <script type="application/ld+json">
        {JSON.stringify(personSchema)}
      </script>
    </Helmet>
  );
}
