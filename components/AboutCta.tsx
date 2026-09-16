import Link from "next/link";
import text from "@/content/text.json";

const { about, contact } = text.pages;

export default function AboutCta() {
  return (
    <div className="flex flex-col items-center gap-3 border-t border-hairline pt-10 text-center">
      <h2 className="font-heading text-xl font-medium text-ink sm:text-2xl">
        {about.cta.heading}
      </h2>
      {/* <p className="max-w-sm text-pretty text-sm leading-relaxed text-ink-secondary sm:text-base">
        {about.cta.text}
      </p> */}

      <Link
        href={contact.path}
        className="group relative mt-1 inline-flex items-center overflow-hidden rounded-full border border-ink px-6 py-2 text-xs font-medium text-ink transition-colors duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent sm:text-sm"
      >
        <span
          aria-hidden
          className="absolute inset-0 origin-left scale-x-0 bg-gradient-to-r from-accent to-accent-muted transition-transform duration-300 ease-out group-hover:scale-x-100"
        />
        <span className="relative transition-colors duration-300 group-hover:text-white">
          {about.cta.buttonLabel}
        </span>
      </Link>
    </div>
  );
}
