import type { Metadata } from "next";
import { Contact } from "../components/Contact";

export const metadata: Metadata = {
  title: "Contact - Eren Çolak",
  description:
    "Get in touch with Eren Çolak for collaboration opportunities, project inquiries, or professional connections.",
  openGraph: {
    title: "Contact - Eren Çolak",
    description:
      "Get in touch with Eren Çolak for collaboration opportunities, project inquiries, or professional connections.",
  },
};

export default function ContactPage() {
  return (
    <>
      <h1 className="sr-only">Contact — Eren Çolak</h1>
      <Contact />
    </>
  );
}
