import type { Metadata } from "next";
import Image from "next/image";
import AboutCta from "@/components/AboutCta";
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
        <section className="relative w-full overflow-hidden bg-white px-6 pb-24 pt-36 sm:px-10 md:pt-32">
          <Image
            src="/img/wave-light.png"
            alt=""
            aria-hidden
            fill
            sizes="100vw"
            className="absolute inset-0 z-0 object-cover opacity-20"
          />

          <div className="relative z-10 mx-auto flex max-w-5xl flex-col gap-16 lg:gap-20">
            <div className="flex flex-col items-center gap-10 md:flex-row md:items-center md:gap-16 lg:gap-20">
              <div className="flex w-full flex-col items-center gap-6 text-center md:w-1/2 md:items-start md:text-left">
                <h1 className="max-w-lg font-heading text-5xl font-bold leading-tight text-ink sm:text-6xl">
                  {about.heading}
                </h1>
                <div className="flex max-w-lg flex-col gap-4">
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

              <div className="w-full max-w-xs shrink-0 sm:max-w-sm md:w-2/5">
                <div className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl">
                  <Image
                    src={about.photo}
                    alt={about.photoAlt}
                    fill
                    priority
                    sizes="(min-width: 640px) 24rem, 80vw"
                    className="object-cover object-[50%_20%]"
                  />
                </div>
              </div>
            </div>

            <AboutCta />
          </div>
        </section>
      </main>
    </>
  );
}
