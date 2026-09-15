import Image from "next/image";
import text from "@/content/text.json";

const { hero } = text.pages.home;
const { logo } = text.site;

export default function Hero() {
  return (
    <section
      id="hero"
      aria-label="Introduction"
      className="hero-img relative flex min-h-[100svh] w-full flex-col items-center justify-center gap-8 overflow-hidden bg-ink px-6 pb-16 pt-28 sm:gap-10 sm:px-10"
    >
      <Image
        src={hero.backgroundImage}
        alt={hero.backgroundImageAlt}
        fill
        priority
        sizes="100vw"
        className="object-cover object-[30%_60%]"
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/35 to-ink/40"
      />

      <div className="relative flex items-center justify-center">
        <Image
          src={logo.whiteMark}
          alt={hero.logoAlt}
          width={logo.markWidth}
          height={logo.markHeight}
          priority
          className="h-auto w-40 sm:w-48 md:w-56"
        />
      </div>

      <div className="relative flex flex-col items-center gap-5 text-center sm:gap-6">
        <h1 className="max-w-3xl text-balance font-heading text-[clamp(1.75rem,4.5vw+0.75rem,3.75rem)] font-medium leading-[1.05] text-paper-on-dark">
          {hero.heading}
        </h1>
        <p className="max-w-md text-pretty text-[clamp(0.95rem,1vw+0.6rem,1.125rem)] leading-relaxed text-secondary-on-dark sm:max-w-lg">
          {hero.body}
        </p>
      </div>
    </section>
  );
}
