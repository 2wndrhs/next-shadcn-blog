'use client';

import { Check, Copy } from 'lucide-react';
import { ComponentPropsWithoutRef, useRef, useState } from 'react';

export default function Pre({
  children,
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
    <div className='relative'>
      <button
        disabled={isCopied}
        onClick={handleClickCopy}
        className='absolute top-4 right-4 size-6'
      >
        {isCopied ? <Check className='text-green-400' /> : <Copy />}
      </button>
      <pre ref={preRef} {...props}>
        {children}
      </pre>
    </div>
  );
}
