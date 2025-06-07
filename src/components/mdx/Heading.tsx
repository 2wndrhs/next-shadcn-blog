'use client';

import { Hash } from 'lucide-react';
import { HTMLMotionProps, motion } from 'motion/react';

const iconVariants = {
  initial: {
    opacity: 0,
    x: '0.5rem',
  },
  hover: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.3,
      ease: 'easeOut',
    },
  },
};

export default function Heading({
  as,
  children,
  ...props
}: HTMLMotionProps<'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'> & {
  as: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
}) {
  const MotionComponent = motion[as];
  return (
    <MotionComponent
      initial='initial'
      whileHover='hover'
      className='relative scroll-mt-20'
      {...props}
    >
      <motion.a
        href={`#${props.id}`}
        className='absolute top-1/2 -left-6 flex size-6 -translate-y-1/2 items-center justify-center'
        variants={iconVariants}
      >
        <Hash className='size-4' />
      </motion.a>
      {children as React.ReactNode}
    </MotionComponent>
  );
}
