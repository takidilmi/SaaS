import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    return [
        {
            url: 'https://saa-s-lilac.vercel.app/',
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 1
        },
        {
            url: 'https://saa-s-lilac.vercel.app/dashboard',
            // lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 1
        },
        {
            url: 'https://saa-s-lilac.vercel.app/users',
            // lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 1
        },
        {
            url: 'https://saa-s-lilac.vercel.app/orders',
            // lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 1
        }
    ]
}