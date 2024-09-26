'use client';

import { Check, Copy } from 'lucide-react';
import { DetailedHTMLProps, HTMLAttributes, useRef, useState } from 'react';

export default function Pre({
  children,
  ...props
}: DetailedHTMLProps<HTMLAttributes<HTMLPreElement>, HTMLPreElement>) {
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
    <pre ref={preRef} {...props} className='relative'>
      <button
        disabled={isCopied}
        onClick={handleClickCopy}
        className='absolute right-4 size-6'
      >
        {isCopied ? <Check /> : <Copy />}
      </button>
      {children}
    </pre>
  );
}
