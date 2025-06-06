'use client';

import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Dot, Monitor, Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';

const THEME_ITEM = [
  { name: 'Light', value: 'light', icon: Sun },
  { name: 'Dark', value: 'dark', icon: Moon },
  { name: 'System', value: 'system', icon: Monitor },
];

export default function ThemeSwitch() {
  const { theme, setTheme } = useTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant='ghost' size='icon' className='h-8 w-8'>
          <Sun className='size-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90' />
          <Moon className='absolute size-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0' />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align='end'>
        {THEME_ITEM.map((item) => (
          <DropdownMenuItem
            key={item.value}
            onClick={() => setTheme(item.value)}
            className='flex cursor-pointer items-center gap-2'
          >
            <item.icon className='h-4 w-4' />
            <span>{item.name}</span>
            {theme === item.value && <Dot />}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
