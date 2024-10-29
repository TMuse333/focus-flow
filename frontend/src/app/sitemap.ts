import type { MetadataRoute } from 'next'

const currentDate = new Date();

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://www.focusflowsoftware.com/',
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: 'https://www.focusflowsoftware.com/best-web-design-halifax',
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://www.focusflowsoftware.com/lets-work',
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://www.focusflowsoftware.com/online-food-ordering-system',
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://www.focusflowsoftware.com/long-term-success',
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://www.focusflowsoftware.com/process',
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://www.focusflowsoftware.com/studio/image-text-box',
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://www.focusflowsoftware.com/artist',
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
  ];
}

