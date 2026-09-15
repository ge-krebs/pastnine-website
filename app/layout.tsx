import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import Banner from "@/components/Banner";
import Footer from "@/components/Footer";
import Nav from "@/components/Nav";
import text from "@/content/text.json";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(text.site.url),
  title: {
    default: text.site.defaultTitle,
    template: text.site.titleTemplate,
  },
  description: text.site.description,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en-NZ"
      className={`${inter.variable} ${spaceGrotesk.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Banner />
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
