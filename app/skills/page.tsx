import type { Metadata } from "next";
import { Skills } from "../components/Skills";

export const metadata: Metadata = {
  title: "Skills - Eren Çolak",
  description:
    "Explore the comprehensive toolkit of technologies and skills including React, Next.js, Python, Java, Docker, and more.",
  openGraph: {
    title: "Skills - Eren Çolak",
    description:
      "Explore the comprehensive toolkit of technologies and skills including React, Next.js, Python, Java, Docker, and more.",
  },
};

export default function SkillsPage() {
  return (
    <>
      <h1 className="sr-only">Skills — Eren Çolak</h1>
      <Skills />
    </>
  );
}
