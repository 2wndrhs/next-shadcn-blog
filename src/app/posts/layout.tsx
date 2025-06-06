import GiscusComments from '@/components/posts/GiscusComments';
import ScrollProgressBar from '@/components/posts/ScrollProgressBar';
import TableOfContents from '@/components/posts/TableOfContents';

export default function MdxLayout({ children }: { children: React.ReactNode }) {
  // Create any shared layout or styles here
  return (
    <>
      <ScrollProgressBar />
      <TableOfContents />
      <main className='prose prose-zinc dark:prose-invert max-w-none md:col-start-2'>
        {children}
        <GiscusComments />
      </main>
    </>
  );
}
