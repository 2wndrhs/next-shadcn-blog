'use client';

import ThemeSwitch from '@/components/layout/ThemeSwitch';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Code, Github } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const NAV_LIST = [
  { name: 'Blog', href: '/blog' },
  // { name: 'TIL', href: '/til' },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header
      className={`bg-background/95 supports-backdrop-filter:bg-background/60 sticky top-0 z-50 flex w-full items-center justify-center backdrop-blur`}
    >
      <div className='flex h-14 w-full max-w-screen-xl items-center justify-between px-8'>
        <nav className='flex items-center gap-6 font-sans'>
          <Link href='/' className='mr-4 flex items-center space-x-2'>
            <Code className='h-6 w-6' />
            <span className='font-bold'>{'JoongGon'}</span>
          </Link>
          {NAV_LIST.map((navItem) => (
            <Link
              href={navItem.href}
              key={navItem.name}
              className={cn(
                'hover:text-foreground/80 text-sm font-medium transition-colors',
                pathname.startsWith(navItem.href)
                  ? 'text-foreground'
                  : 'text-foreground/60',
              )}
            >
              {navItem.name}
            </Link>
          ))}
        </nav>
        <div className='flex items-center gap-3'>
          <ThemeSwitch />
          <Button asChild variant='ghost' size='icon' className='h-8 w-8'>
            <Link href='https://github.com/2wndrhs' target='_blank'>
              <Github className='size-[1.2rem]' />
            </Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
