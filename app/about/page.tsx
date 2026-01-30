import type { Metadata } from "next";
import { About } from "../components/About";

export const metadata: Metadata = {
  title: "About - Eren Çolak",
  description:
    "Learn more about Eren Çolak, a passionate full-stack developer and software engineer from Istanbul, Turkey.",
  openGraph: {
    title: "About - Eren Çolak",
    description:
      "Learn more about Eren Çolak, a passionate full-stack developer and software engineer from Istanbul, Turkey.",
  },
};

export default function AboutPage() {
  return (
    <>
      <h1 className="sr-only">About — Eren Çolak</h1>
      <About />
    </>
  );
}
