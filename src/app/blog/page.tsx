import MotionDiv from '@/components/motion/MotionDiv';
import { getPostsByYear } from '@/lib/posts';
import dayjs from 'dayjs';
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Blog',
  description: '웹 프론트엔드 개발과 관련된 글을 작성하고 있습니다.',
};

const listVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const itemVariants = {
  hidden: { y: 10, opacity: 0 },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
    },
  },
};

export default async function Page() {
  const posts = await getPostsByYear();

  return (
    <main className='col-start-2'>
      <h2 className='mb-16 font-sans font-semibold'>Blog</h2>
      <MotionDiv
        className='group'
        variants={listVariants}
        initial='hidden'
        animate='show'
      >
        {posts.map(([year, postList]) => {
          return (
            <MotionDiv
              key={year}
              className={`border-border/40 relative border-t`}
              variants={itemVariants}
            >
              <h3 className='text-foreground/40 absolute top-3 text-sm'>
                {year}
              </h3>
              {postList.map((post) => {
                return (
                  <Link
                    href={`/posts/${post.slug}`}
                    key={post.slug}
                    className='group/item flex transition-opacity group-hover:opacity-40 hover:opacity-100!'
                  >
                    <div className='border-border/40 ml-[20%] flex flex-1 justify-between border-t py-3 group-first-of-type/item:border-t-0'>
                      <span>{post.title}</span>
                      <span className='text-foreground/40 px-2 text-sm'>
                        {dayjs(post.publishDate).format('MM. DD.')}
                      </span>
                    </div>
                  </Link>
                );
              })}
            </MotionDiv>
          );
        })}
      </MotionDiv>
    </main>
  );
}
