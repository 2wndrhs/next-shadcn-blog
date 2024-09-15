'use client';

import { useEffect, useState } from 'react';

export default function ScrollProgressBar() {
  const [scrollProgress, setScrollProgress] = useState(0);

  const onScroll = () => {
    // current scrolled position from the top of the page
    const currentScrollY = window.scrollY;

    // possible scroll height of the page
    const scrollHeight =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;

    // calculate the progress of the scroll
    const progress = (currentScrollY / scrollHeight) * 100;
    setScrollProgress(progress);
  };

  useEffect(() => {
    window.addEventListener('scroll', onScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  return (
    <div
      className='fixed left-0 right-0 top-0 z-50 h-1 bg-primary'
      style={{ width: `${scrollProgress}%` }}
      role='progressbar'
      aria-valuenow={scrollProgress}
      aria-valuemin={0}
      aria-valuemax={100}
    />
  );
}
