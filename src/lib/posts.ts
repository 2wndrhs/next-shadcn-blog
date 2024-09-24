import { Post, PostMetaData } from '@/types/post.type';
import dayjs from 'dayjs';
import { readdir } from 'fs/promises';
import path from 'path';

const BASE_PATH = '/src/app/posts/(blog)';
const POSTS_PATH = path.join(process.cwd(), BASE_PATH);

const readPosts = async (): Promise<Post[]> => {
  // retrieve slugs from post routes
  const slugs = (await readdir(POSTS_PATH, { withFileTypes: true })).filter(
    (dirent) => dirent.isDirectory(),
  );

  const posts = await Promise.all(
    slugs.map(async ({ name: slug }) => {
      // retrieve metadata from MDX files
      const { metadata } = (await import(
        `@/app/posts/(blog)/${slug}/page.mdx`
      )) as { metadata: PostMetaData };

      return { ...metadata, slug: slug };
    }),
  );

  return posts;
};

export const getPosts = async (): Promise<Post[]> => {
  const posts = await readPosts();
  // sort posts from newest to oldest
  posts.sort((a, b) => dayjs(b.publishDate).diff(dayjs(a.publishDate)));
  return posts;
};

export const getPostsByYear = async (): Promise<[string, Post[]][]> => {
  const posts = await getPosts();
  const postsByYear = new Map<string, Post[]>();

  posts.forEach((post) => {
    const year = dayjs(post.publishDate).year().toString();
    if (!postsByYear.has(year)) {
      postsByYear.set(year, []);
    }

    postsByYear.get(year)!.push(post);
  });

  return Array.from(postsByYear.entries());
};
