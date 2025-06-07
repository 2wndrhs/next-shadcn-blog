'use client';

import { motion } from 'motion/react';
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
    const newToc = headings.map((heading) => ({
      id: heading.id,
      text: heading.textContent ?? '',
      level: parseInt(heading.tagName.charAt(1)),
    }));
    setToc(newToc);

    // Set up Intersection Observer
    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      const visibleHeadings = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => a.boundingClientRect.y - b.boundingClientRect.y);

      if (visibleHeadings.length === 0) {
        const activeHeadingIndex = headings.findIndex(
          (heading) => heading.id === activeId,
        );

        if (activeHeadingIndex > 0) {
          const activeHeading = headings[activeHeadingIndex];
          const activeHeadingY = activeHeading.getBoundingClientRect().y;

          if (activeHeadingY > 150) {
            setActiveId(headings[activeHeadingIndex - 1].id);
          }
        }
      } else {
        setActiveId(visibleHeadings[0].target.id);
      }
    };

    const observerOptions = {
      rootMargin: '-56px 0px -80% 0px',
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions,
    );

    headings.forEach((heading) => {
      observer.observe(heading);
    });

    return () => {
      observer.disconnect();
    };
  }, [activeId]);

  return (
    <motion.nav
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      className='fixed hidden max-w-[192px] lg:block'
      aria-label='Table of contents'
    >
      <ul className='flex flex-col gap-2 text-sm'>
        {toc.map(({ id, text, level }) => (
          <li key={id} className={`pl-${(level - 1) * 4}`}>
            <a
              href={`#${id}`}
              className={`hover:text-foreground/80 block py-0.5 transition-colors duration-200 ease-in-out ${
                activeId === id
                  ? 'text-foreground/80 font-medium'
                  : 'text-foreground/40'
              }`}
            >
              {text}
            </a>
          </li>
        ))}
      </ul>
    </motion.nav>
  );
}
