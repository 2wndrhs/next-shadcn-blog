import { readdir } from "fs/promises";
import { Category } from "./categories";

export interface Post {
  slug: string;
  title: string;
  publishDate: string;
  categories: Category[];
}

export const postsPerPage = 3;

export const getPosts = async (): Promise<Post[]> => {
  // retrieve slugs from post routes
  const slugs = (
    await readdir("./src/app/(posts)", { withFileTypes: true })
  ).filter((dirent) => dirent.isDirectory());
  console.log(slugs);

  // retrieve metadata from MDX files
  const posts = await Promise.all(
    slugs.map(async ({ name }) => {
      const { metadata } = await import(`./app/(posts)/${name}/page.mdx`);
      return { slug: name, ...metadata };
    })
  );

  // sort posts from newest to oldest
  posts.sort(
    (a, b) =>
      new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime()
  );

  return posts;
};

export const getPostsByCategory = async ({
  category,
}: {
  category: Category;
}): Promise<Post[]> => {
  const allPosts = await getPosts();

  // filter posts by specified category
  const posts = allPosts.filter((post) => post.categories.includes(category));

  return posts;
};

export const getPaginatedPosts = async ({
  page,
  limit,
}: {
  page: number;
  limit: number;
}): Promise<{ posts: Post[]; total: number }> => {
  const allPosts = await getPosts();

  // get a subset of posts based on page on limit
  const paginatedPosts = allPosts.slice((page - 1) * limit, page * limit);

  return {
    posts: paginatedPosts,
    total: allPosts.length,
  };
};

export const getPaginatedPostsByCategory = async ({
  page,
  limit,
  category,
}: {
  page: number;
  limit: number;
  category: Category;
}): Promise<{ posts: Post[]; total: number }> => {
  const allCategoryPosts = await getPostsByCategory({ category });

  // get a subset of posts based on page on limit
  const paginatedPosts = allCategoryPosts.slice(
    (page - 1) * limit,
    page * limit
  );

  return {
    posts: paginatedPosts,
    total: allCategoryPosts.length,
  };
};
