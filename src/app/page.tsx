import { Pagination } from "@/components/Pagination";
import { Posts } from "@/components/Posts";
import { getPaginatedPosts, postsPerPage } from "@/posts";

export default async function Home() {
  const { posts, total } = await getPaginatedPosts({
    page: 1,
    limit: postsPerPage,
  });

  return (
    <main>
      <h1>Next.js MDX Blog</h1>
      <Posts posts={posts} />
      <Pagination
        baseUrl="/page"
        page={1}
        perPage={postsPerPage}
        total={total}
      />
    </main>
  );
}
