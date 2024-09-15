import { Post, PostMetaData } from '@/types/post.type';
import dayjs from 'dayjs';
import { readdir, readFile } from 'fs/promises';
import path from 'path';
import readingTime from 'reading-time';

const BASE_PATH = '/src/app/(posts)/blog';
const POSTS_PATH = path.join(process.cwd(), BASE_PATH);
const METADATA_DELIMITER = '---';

export const postsPerPage = 3;

export const getPosts = async (): Promise<Post[]> => {
  // retrieve slugs from post routes
  const slugs = (await readdir(POSTS_PATH, { withFileTypes: true })).filter(
    (dirent) => dirent.isDirectory(),
  );

  const posts = await Promise.all(
    slugs.map(async ({ name }) => {
      const filePath = `${POSTS_PATH}/${name}/page.mdx`;
      const fileContents = await readFile(filePath, 'utf8');
      // split the file content by `---`
      const [_, content] = fileContents.split(METADATA_DELIMITER);
      const readingMinutes = Math.ceil(readingTime(content).minutes);

      // retrieve metadata from MDX files
      const { metadata } = (await import(
        `@/app/(posts)/blog/${name}/page.mdx`
      )) as { metadata: PostMetaData };

      const publishDate = dayjs(metadata.publishDate)
        .locale('ko')
        .format('YYYY년 MM월 DD일');

      return { ...metadata, slug: name, readingMinutes, publishDate };
    }),
  );

  // sort posts from newest to oldest
  posts.sort((a, b) => dayjs(b.publishDate).diff(dayjs(a.publishDate)));

  return posts;
};
