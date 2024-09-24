import ScrollProgressBar from '@/components/ScrollProgressBar';

export default function MdxLayout({ children }: { children: React.ReactNode }) {
  // Create any shared layout or styles here
  return (
    <>
      <nav>navigation</nav>
      <main className='prose prose-slate max-w-none dark:prose-invert'>
        <ScrollProgressBar />
        {children}
      </main>
    </>
  );
}
