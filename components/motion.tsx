"use client";

import { motion, type MotionProps } from "framer-motion";

type FadeInProps = MotionProps & {
  children: React.ReactNode;
  className?: string;
  delay?: number;
};

export function FadeIn({ children, className, delay = 0, ...props }: FadeInProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1], delay }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export const MotionDiv = motion.div;
export const MotionA = motion.a;
