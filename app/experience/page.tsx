import type { Metadata } from "next";
import { Experience } from "../components/Experience";

export const metadata: Metadata = {
  title: "Experience - Eren Çolak",
  description:
    "Professional experience and career journey in software development, internships, and educational background.",
  openGraph: {
    title: "Experience - Eren Çolak",
    description:
      "Professional experience and career journey in software development, internships, and educational background.",
  },
};

export default function ExperiencePage() {
  return (
    <>
      <h1 className="sr-only">Experience & Education — Eren Çolak</h1>
      <Experience />
    </>
  );
}
