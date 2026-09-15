"use client";

import { motion, useInView, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import text from "@/content/text.json";

const { why } = text.pages.home;

const TYPE_DURATION_MS = 1400;
const BULLET_START_DELAY_MS = TYPE_DURATION_MS + 250;
const BULLET_STAGGER_MS = 140;

function CheckIcon() {
  return (
    <span
      aria-hidden
      className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-ink"
    >
      <svg
        viewBox="0 0 16 16"
        className="h-3 w-3"
        fill="none"
        stroke="white"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M3 8.5l3 3 7-7" />
      </svg>
    </span>
  );
}

export default function Why() {
  const sectionRef = useRef<HTMLElement>(null);
  const inView = useInView(sectionRef, { once: true, amount: 0.1 });
  const prefersReducedMotion = useReducedMotion();
  const reducedMotion = !!prefersReducedMotion;

  const [charCount, setCharCount] = useState(0);
  const [doneTyping, setDoneTyping] = useState(false);

  const isVisible = inView || reducedMotion;
  const typingDone = doneTyping || reducedMotion;

  useEffect(() => {
    if (!isVisible || reducedMotion) return;
    const total = why.heading.length;
    const stepMs = Math.max(20, TYPE_DURATION_MS / total);
    let count = 0;
    const interval = setInterval(() => {
      count += 1;
      setCharCount(count);
      if (count >= total) {
        clearInterval(interval);
        setDoneTyping(true);
      }
    }, stepMs);
    return () => clearInterval(interval);
  }, [isVisible, reducedMotion]);

  const paragraphDelay = (TYPE_DURATION_MS + 100) / 1000;

  return (
    <section
      ref={sectionRef}
      aria-label="Why work with a developer"
      className="w-full bg-white px-6 py-24 sm:px-10 sm:py-32"
    >
      <div className="mx-auto flex max-w-2xl flex-col items-center text-center">
        <h2 className="max-w-2xl font-heading text-3xl font-medium leading-tight text-ink sm:text-4xl">
          {reducedMotion ? why.heading : why.heading.slice(0, charCount)}
          {!reducedMotion && !typingDone && (
            <span
              aria-hidden
              className="ml-1 inline-block h-[0.8em] w-[2px] translate-y-[0.15em] animate-pulse bg-ink"
            />
          )}
        </h2>

        <motion.p
          className="mt-5 max-w-md text-pretty text-base leading-relaxed text-ink-secondary sm:text-lg"
          initial={reducedMotion ? false : { opacity: 0, y: 8 }}
          whileInView={reducedMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: paragraphDelay }}
        >
          {why.intro}
        </motion.p>

        <ul className="mt-10 flex w-full max-w-xl flex-col gap-5 text-left sm:mt-12">
          {why.bullets.map((bullet, index) => (
            <motion.li
              key={bullet}
              className="flex items-start gap-3"
              initial={reducedMotion ? false : { opacity: 0, y: 12 }}
              whileInView={reducedMotion ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{
                duration: 0.5,
                ease: "easeOut",
                delay: (BULLET_START_DELAY_MS + index * BULLET_STAGGER_MS) / 1000,
              }}
            >
              <CheckIcon />
              <span className="pt-0.5 text-base leading-relaxed text-ink-secondary sm:text-lg">
                {bullet}
              </span>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
