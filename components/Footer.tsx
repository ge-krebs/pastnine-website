import Image from "next/image";
import Link from "next/link";
import text from "@/content/text.json";

const { footer } = text;
const { logo, name } = text.site;

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="w-full bg-ink px-6 py-10 sm:px-10">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-6 text-center sm:flex-row sm:items-center sm:justify-between sm:text-left">
        <div className="flex flex-col items-center gap-3 sm:items-start">
          <Image
            src={logo.whiteMark}
            alt={name}
            width={logo.markWidth}
            height={logo.markHeight}
            className="h-5 w-auto"
          />
          <p className="max-w-xs text-sm text-secondary-on-dark">
            {footer.location}
          </p>
        </div>

        <Link
          href={footer.ctaHref}
          className="group relative inline-block text-sm font-medium text-white"
        >
          {footer.ctaText}
          <span className="absolute inset-x-0 -bottom-0.5 h-px origin-left scale-x-0 bg-current transition-transform duration-300 group-hover:scale-x-100" />
        </Link>
      </div>

      <div className="mx-auto mt-8 max-w-5xl border-t border-dim-on-dark/30 pt-6 text-center text-xs text-dim-on-dark sm:text-left">
        © {year} {footer.copyright}
      </div>
    </footer>
  );
}
