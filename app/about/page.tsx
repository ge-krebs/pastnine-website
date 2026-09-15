import type { Metadata } from "next";
import Image from "next/image";
import text from "@/content/text.json";

const { about } = text.pages;

export const metadata: Metadata = {
  title: about.title,
  description: about.description,
  alternates: {
    canonical: about.path,
  },
  openGraph: {
    title: about.title,
    description: about.description,
    url: about.path,
    siteName: text.site.name,
    locale: "en_NZ",
    type: "profile",
  },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Gemma",
  jobTitle: "Creative Developer",
  description: about.description,
  image: `${text.site.url}${about.photo}`,
  worksFor: {
    "@type": "Organization",
    name: text.site.name,
    url: text.site.url,
  },
};

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />
      <main>
        <section className="flex min-h-[100svh] w-full flex-col items-center justify-center gap-12 bg-white px-6 pb-16 pt-36 sm:px-10 md:flex-row md:gap-16 md:pt-32 lg:gap-24">
          <div className="shrink-0">
            <div className="relative h-48 w-48 overflow-hidden rounded-full border-4 border-dim-on-dark sm:h-56 sm:w-56 md:h-64 md:w-64 lg:h-72 lg:w-72">
              <Image
                src={about.photo}
                alt={about.photoAlt}
                fill
                priority
                sizes="(min-width: 1024px) 18rem, (min-width: 768px) 16rem, (min-width: 640px) 14rem, 12rem"
                className="object-cover object-[50%_20%]"
              />
            </div>
          </div>

          <div className="flex max-w-lg flex-col items-center gap-6 text-center md:items-start md:text-left">
            <h1 className="font-heading text-5xl font-bold leading-tight text-ink sm:text-6xl">
              {about.heading}
            </h1>
            <div className="flex flex-col gap-4">
              {about.paragraphs.map((paragraph) => (
                <p
                  key={paragraph}
                  className="text-pretty text-base leading-relaxed text-ink-secondary sm:text-lg"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
