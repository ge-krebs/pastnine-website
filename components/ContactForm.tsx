"use client";

import type { FormEvent } from "react";
import text from "@/content/text.json";

const { form } = text.pages.contact;

const inputClasses =
  "w-full rounded-none border border-hairline bg-white px-4 py-3 text-base text-ink placeholder:text-ink-muted focus:border-ink focus:outline-none";

export default function ContactForm() {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    // No backend wired up yet — replace with a real submit handler
    // (e.g. an API route or email service) when this is ready to go live.
    event.preventDefault();
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      <div>
        <label htmlFor="name" className="text-sm font-medium text-ink">
          {form.nameLabel}
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          className={`mt-2 ${inputClasses}`}
        />
      </div>

      <div>
        <label htmlFor="email" className="text-sm font-medium text-ink">
          {form.emailLabel}
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className={`mt-2 ${inputClasses}`}
        />
      </div>

      <div>
        <label htmlFor="phone" className="text-sm font-medium text-ink">
          {form.phoneLabel}
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          className={`mt-2 ${inputClasses}`}
        />
      </div>

      <div>
        <label htmlFor="message" className="text-sm font-medium text-ink">
          {form.messageLabel}
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          className={`mt-2 resize-none ${inputClasses}`}
        />
      </div>

      <button
        type="submit"
        className="mt-2 w-full rounded-none border border-ink bg-ink px-6 py-3 text-sm font-medium text-white transition-colors duration-300 hover:bg-white hover:text-ink sm:w-auto"
      >
        {form.submitLabel}
      </button>
    </form>
  );
}
