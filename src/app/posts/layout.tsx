export default function MdxLayout({ children }: { children: React.ReactNode }) {
  // Create any shared layout or styles here
  return (
    <main className='prose prose-slate max-w-none dark:prose-invert'>
      <div className='flex flex-col gap-6 md:grid md:grid-cols-[auto_640px_auto] lg:grid-cols-[192px_640px_192px]'>
        <nav>navigation</nav>
        <div>{children}</div>
      </div>
    </main>
  );
}
