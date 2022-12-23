import { motion, useInView } from 'framer-motion';

interface AnimatedTitleProps {
    children: React.ReactNode
}


export const AnimateTitle = ({children}: AnimatedTitleProps) => {
  
  return (
    <motion.h1
      // style = {{transform: isInView ? "none" : "translateX(-200px)",
      // opacity: isInView ? 1 : 0,
      // transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"}}
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.75, ease: 'easeInOut' }}
      className = "text-5xl font-black text-center tracking-wide my-6"
    >
      {children}
    </motion.h1>
  );
}

export const AnimateSubtitle = ({children}: AnimatedTitleProps) => {
    return (
      <motion.h1
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.55, ease: "easeInOut", delay: 0.35 }}
        className = "text-lg text-center mb-12"
      >
        {children}
      </motion.h1>
    );
  }