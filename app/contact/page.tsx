import type { Metadata } from "next";
import Image from "next/image";
import ContactForm from "@/components/ContactForm";
import text from "@/content/text.json";

const { contact } = text.pages;

export const metadata: Metadata = {
  title: contact.title,
  description: contact.description,
  alternates: {
    canonical: contact.path,
  },
  openGraph: {
    title: contact.title,
    description: contact.description,
    url: contact.path,
    siteName: text.site.name,
    locale: "en_NZ",
    type: "website",
  },
};

export default function ContactPage() {
  return (
    <main>
      <section className="relative flex min-h-[50svh] w-full flex-col items-center justify-center overflow-hidden bg-ink px-6 pb-16 pt-32 text-center sm:px-10">
        <Image
          src={contact.backgroundImage}
          alt={contact.backgroundImageAlt}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div aria-hidden className="absolute inset-0 bg-ink/50" />

        <div className="relative flex flex-col items-center gap-4">
          <h1 className="font-heading text-5xl font-bold text-paper-on-dark sm:text-6xl">
            {contact.heading}
          </h1>
          <p className="max-w-md text-pretty text-base leading-relaxed text-secondary-on-dark sm:text-lg">
            {contact.tagline}
          </p>
        </div>
      </section>

      <section className="w-full bg-white px-6 py-16 sm:px-10 sm:py-24">
        <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-2 md:gap-8">
          <div className="border border-hairline p-8 sm:p-10">
            <h2 className="font-heading text-2xl font-medium text-ink">
              {contact.form.heading}
            </h2>
            <div className="mt-6">
              <ContactForm />
            </div>
          </div>

          <div className="flex flex-col justify-center gap-8 border border-hairline p-8 sm:p-10">
            <div>
              <h2 className="font-heading text-2xl font-medium text-ink">
                {contact.direct.heading}
              </h2>
              <p className="mt-2 text-base text-ink-secondary">
                {contact.direct.intro}
              </p>
            </div>

            <dl className="flex flex-col gap-6">
              <div>
                <dt className="text-sm font-medium text-ink-muted">
                  {contact.direct.phoneLabel}
                </dt>
                <dd className="mt-1 text-lg text-ink">
                  {contact.direct.phoneValue}
                </dd>
              </div>
              <div>
                <dt className="text-sm font-medium text-ink-muted">
                  {contact.direct.emailLabel}
                </dt>
                <dd className="mt-1 text-lg text-ink">
                  {contact.direct.emailValue}
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </section>
    </main>
  );
}
