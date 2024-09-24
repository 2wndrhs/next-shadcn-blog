import { getPosts } from '@/lib/posts';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog',
};

export default async function Page() {
  const posts = await getPosts();
  console.log(posts);

  return (
    <section className=''>
      <h2 className='mb-16 font-geistSans'>Blog</h2>
      <div className='post-group'>
        {posts.map(({ title }) => (
          <div>{title}</div>
        ))}
      </div>
    </section>
  );
}
