import text from "@/content/text.json";

const { banner } = text;
const REPEAT_COUNT = 4;

function MarqueeGroup() {
  return (
    <div aria-hidden className="flex shrink-0 items-center">
      {Array.from({ length: REPEAT_COUNT }).map((_, i) => (
        <span
          key={i}
          className="mx-6 whitespace-nowrap text-sm font-medium tracking-wide text-ink"
        >
          {banner.text}
        </span>
      ))}
    </div>
  );
}

export default function Banner() {
  if (!banner.enabled) return null;

  return (
    <div
      role="region"
      aria-label={banner.text}
      className="fixed inset-x-0 top-0 z-[70] h-9 overflow-hidden bg-secondary-on-dark"
    >
      <div className="flex h-full w-max animate-marquee items-center motion-reduce:animate-none">
        <MarqueeGroup />
        <MarqueeGroup />
      </div>
    </div>
  );
}
