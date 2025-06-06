'use client';

import { motion } from 'motion/react';
import { ComponentPropsWithRef } from 'react';

export default function MotionMain({
  children,
  ref,
  ...props
}: ComponentPropsWithRef<typeof motion.main>) {
  return (
    <motion.main ref={ref} {...props}>
      {children}
    </motion.main>
  );
}
