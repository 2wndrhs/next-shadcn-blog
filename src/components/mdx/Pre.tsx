'use client';

import { cn } from '@/lib/utils';
import { Check, Copy } from 'lucide-react';
import { ComponentPropsWithoutRef, useRef, useState } from 'react';

export default function Pre({
  children,
  className,
  ...props
}: ComponentPropsWithoutRef<'pre'>) {
  const [isCopied, setIsCopied] = useState(false);
  const preRef = useRef<HTMLPreElement>(null);

  const handleClickCopy = async () => {
    const code = preRef.current?.textContent;

    if (code) {
      await navigator.clipboard.writeText(code);
      setIsCopied(true);

      setTimeout(() => {
        setIsCopied(false);
      }, 3000);
    }
  };

  return (
    <div className='group relative'>
      <button
        type='button'
        disabled={isCopied}
        onClick={handleClickCopy}
        className='pointer-events-none absolute top-2 right-2 inline-flex size-8 cursor-pointer items-center justify-center rounded-md border border-white/20 bg-slate-950/90 text-slate-100 opacity-0 shadow-lg shadow-black/30 transition-all group-hover:pointer-events-auto group-hover:opacity-100 hover:bg-slate-800 disabled:cursor-default'
      >
        {isCopied ? (
          <Check className='size-4 text-green-400' />
        ) : (
          <Copy className='size-4' />
        )}
      </button>
      <pre
        ref={preRef}
        className={cn(className, '[font-variant-ligatures:none]')}
        {...props}
      >
        {children}
      </pre>
    </div>
  );
}
