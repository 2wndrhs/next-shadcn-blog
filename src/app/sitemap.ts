import { getPosts } from '@/lib/posts';
import type { MetadataRoute } from 'next';

const defaultSitemap: MetadataRoute.Sitemap = [
  {
    url: 'https://joonggon.me',
    lastModified: new Date(),
    changeFrequency: 'daily',
    priority: 1,
  },
  {
    url: 'https://joonggon.me/blog',
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.8,
  },
];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = await getPosts();

  const sitemapFromPosts: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `https://joonggon.me/posts/${post.slug}`,
    lastModified: post.publishDate,
    changeFrequency: 'daily',
    priority: 0.5,
  }));

  return [...defaultSitemap, ...sitemapFromPosts];
}
