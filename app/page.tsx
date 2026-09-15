import type { Metadata } from "next";
import Hero from "@/components/Hero";
import Why from "@/components/Why";
import text from "@/content/text.json";

const { home } = text.pages;

export const metadata: Metadata = {
  title: home.title,
  description: home.description,
  alternates: {
    canonical: home.path,
  },
  openGraph: {
    title: home.title,
    description: home.description,
    url: home.path,
    siteName: text.site.name,
    locale: "en_NZ",
    type: "website",
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: text.site.name,
  url: text.site.url,
  logo: `${text.site.url}${text.site.logo.navy}`,
  description: home.description,
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
      />
      <main>
        <Hero />
        <Why />
      </main>
    </>
  );
}
