import ScrollProgressBar from '@/components/ScrollProgressBar';
import TableOfContents from '@/components/TableOfContents';

export default function MdxLayout({ children }: { children: React.ReactNode }) {
  // Create any shared layout or styles here
  return (
    <>
      <TableOfContents />
      <main className='prose prose-slate max-w-none dark:prose-invert md:col-start-2'>
        <ScrollProgressBar />
        {children}
      </main>
    </>
  );
}
