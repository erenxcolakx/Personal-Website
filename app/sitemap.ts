import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://erencolak.com";
  const date = new Date();
  return [
    { url: base, lastModified: date, changeFrequency: "monthly", priority: 1 },
    {
      url: `${base}/about`,
      lastModified: date,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${base}/skills`,
      lastModified: date,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${base}/projects`,
      lastModified: date,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${base}/experience`,
      lastModified: date,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${base}/contact`,
      lastModified: date,
      changeFrequency: "yearly",
      priority: 0.6,
    },
  ];
}
