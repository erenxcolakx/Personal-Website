import type { Metadata } from "next";
import { Projects } from "../components/Projects";

export const metadata: Metadata = {
  title: "Projects - Eren Çolak",
  description:
    "Discover featured projects including Hiversion, HitnessLab, DeepSport, and other innovative web applications.",
  openGraph: {
    title: "Projects - Eren Çolak",
    description:
      "Discover featured projects including Hiversion, HitnessLab, DeepSport, and other innovative web applications.",
  },
};

export default function ProjectsPage() {
  return (
    <>
      <h1 className="sr-only">Projects — Eren Çolak</h1>
      <Projects />
    </>
  );
}
