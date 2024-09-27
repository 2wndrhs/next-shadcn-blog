import { getPostsByYear } from '@/lib/posts';
import dayjs from 'dayjs';
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Blog',
};

export default async function Page() {
  const posts = await getPostsByYear();

  return (
    <main className='col-start-2'>
      <h2 className='mb-16 font-geistSans font-semibold'>Blog</h2>
      <div className='group'>
        {posts.map(([year, postList], index) => {
          return (
            <div
              key={year}
              className={`relative border-t border-border/40 motion-safe:animate-enter`}
              style={{
                animationDelay: `${index * 100}ms`,
              }}
            >
              <h3 className='absolute top-3 text-sm text-foreground/40'>
                {year}
              </h3>
              {postList.map((post) => {
                return (
                  <Link
                    href={`/posts/${post.slug}`}
                    key={post.slug}
                    className='group/item flex transition-opacity group-hover:opacity-40 hover:!opacity-100'
                  >
                    <div className='ml-[20%] flex flex-1 justify-between border-t border-border/40 py-3 group-first-of-type/item:border-t-0'>
                      <span>{post.title}</span>
                      <span className='px-2 text-sm text-foreground/40'>
                        {dayjs(post.publishDate).format('MM. DD.')}
                      </span>
                    </div>
                  </Link>
                );
              })}
            </div>
          );
        })}
      </div>
    </main>
  );
}
