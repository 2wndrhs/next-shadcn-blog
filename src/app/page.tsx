import { getPosts } from '@/lib/posts';

export default async function Home() {
  const posts = await getPosts();

  return (
    <main>
      <h1>Next.js MDX Blog</h1>
      {posts.map(({ slug, title, description, publishDate, tags }) => (
        <article key={slug}>
          <h2>
            <a href={`/${slug}`}>{title}</a>
          </h2>
          <p>{description}</p>
          <p>
            <strong>Published: {publishDate}</strong>
          </p>
          <p>
            <strong>Tags:</strong> {tags.join(', ')}
          </p>
        </article>
      ))}
    </main>
  );
}
