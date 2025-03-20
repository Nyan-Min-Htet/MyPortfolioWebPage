// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const RevealOnScroll = ({ children, className }) => {
  const { ref, inView } = useInView({
    triggerOnce: false, // Keeps animating every scroll
    threshold: 0.2, // Animation starts when 20% of element is visible
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }} // Starts hidden and lower
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }} // Resets when out of view
      transition={{
        duration: 0.8, // Smooth timing
        ease: "easeOut", // Natural movement
        type: "spring", // Bouncy, smooth feel
        stiffness: 70, // Controls bounce intensity
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default RevealOnScroll;
