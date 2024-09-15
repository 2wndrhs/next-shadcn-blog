export default function MdxLayout({ children }: { children: React.ReactNode }) {
  // Create any shared layout or styles here
  return (
    <main className='prose prose-slate flex min-w-full justify-center dark:prose-invert'>
      <div className='max-w-screen-md'>{children}</div>
    </main>
  );
}
