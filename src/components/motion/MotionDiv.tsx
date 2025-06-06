'use client';

import { motion } from 'motion/react';
import { ComponentPropsWithRef } from 'react';

export default function MotionDiv({
  children,
  ref,
  ...props
}: ComponentPropsWithRef<typeof motion.div>) {
  return (
    <motion.div ref={ref} {...props}>
      {children}
    </motion.div>
  );
}
