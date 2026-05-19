'use client';

import ThemeSwitch from '@/components/layout/ThemeSwitch';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Code } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import type { ComponentPropsWithoutRef } from 'react';

const NAV_LIST = [
  { name: 'Blog', href: '/blog' },
  // { name: 'TIL', href: '/til' },
];

function GithubIcon(props: ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
      {...props}
    >
      <path d='M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4' />
      <path d='M9 18c-4.51 2-5-2-7-2' />
    </svg>
  );
}

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
              <GithubIcon className='size-[1.2rem]' />
            </Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
