'use client';

import { useEffect, useState } from 'react';

interface TOCItem {
  id: string;
  text: string;
  level: number;
}

export default function TableOfContents() {
  const [toc, setToc] = useState<TOCItem[]>([]);
  const [activeId, setActiveId] = useState('');

  useEffect(() => {
    const headings = Array.from(document.querySelectorAll('h2, h3'));
    console.log(headings);
    const newToc = headings.map((heading) => ({
      id: heading.id,
      text: heading.textContent ?? '',
      level: parseInt(heading.tagName.charAt(1)),
    }));
    setToc(newToc);

    // Set up Intersection Observer
    const observers = new Map<string, IntersectionObserver>();

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveId(entry.target.id);
        }
      });
    };

    const observerOptions = {
      rootMargin: '0px 0px -80% 0px',
      threshold: 1.0,
    };

    headings.forEach((heading) => {
      const element = document.getElementById(heading.id);
      if (element) {
        const observer = new IntersectionObserver(
          observerCallback,
          observerOptions,
        );

        observer.observe(element);
        observers.set(heading.id, observer);
      }
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, []);

  return (
    <aside
      className='fixed hidden motion-safe:animate-enter lg:block'
      aria-label='Table of contents'
    >
      <ul className='flex flex-col gap-2 font-geistSans text-sm'>
        {toc.map(({ id, text, level }, index) => (
          <li key={id} className={`pl-${(level - 1) * 4}`}>
            <a
              href={`#${id}`}
              className={`block py-0.5 transition-colors duration-200 ease-in-out hover:text-foreground/80 ${
                activeId === id
                  ? 'font-medium text-foreground/80'
                  : 'text-foreground/40'
              }`}
            >
              {text}
            </a>
          </li>
        ))}
      </ul>
    </aside>
  );
}
