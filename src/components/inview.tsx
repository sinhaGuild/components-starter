import { useInView, motion } from "framer-motion";
import { useRef } from "react";

interface InViewSectionProps {
  children: React.ReactNode;
}

export function InViewSection({ children }: InViewSectionProps) {
  const ref = useRef(null);
  const isInView = useInView(ref);

  return (
    <section ref={ref}>
      <motion.span
        style={{
          transform: isInView ? "none" : "translateX(-200px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
        }}
      >
        {children}
      </motion.span>
    </section>
  );
}
