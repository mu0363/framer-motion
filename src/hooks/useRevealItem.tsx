import { useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

export const useRevealItem = () => {
  const control = useAnimation();
  const [ref, inView] = useInView();

  const variants = {
    hidden: { opacity: 0, y: 0 },
    visible: {
      opacity: 1,
      y: -150,
      transition: {
        duration: 1,
        delay: 0.1,
        ease: "easeOut",
      },
    },
  };

  useEffect(() => {
    if (inView) {
      control.start("visible");
    }
  }, [control, inView]);

  return {
    variants,
    ref,
    control,
  };
};
