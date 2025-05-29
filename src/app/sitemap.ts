import { MetadataRoute } from "next";


export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  return [
    {
      url: 'https://cerrajerocoruña.com',
      lastModified: new Date().toISOString(),
      changeFrequency: 'daily',
      priority: 1
    }
  ]
}