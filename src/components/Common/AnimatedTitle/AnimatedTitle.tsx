// FIXME:
/* eslint-disable react/no-array-index-key */
import { useAnimation, motion } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import type { FC } from "react";

type Props = {
  text: string;
};

/** @package */
export const AnimatedTitle: FC<Props> = ({ text }) => {
  const controls = useAnimation();

  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
    if (!inView) {
      controls.start("hidden");
    }
  }, [controls, inView]);

  const container = {
    visible: {
      transition: {
        delayChildren: 0.25,
        staggerChildren: 0.1,
        ease: "circOut",
      },
    },
  };

  const letter = {
    hidden: { opacity: 0, scaleX: 0, x: "2.25em" },
    visible: {
      opacity: 1,
      scaleX: 1,
      x: "0em",
      transition: {
        delayChildren: 0.25,
        staggerChildren: 0.05,
        ease: [0.01, 0.5, 0.5, 0.9],
      },
    },
  };

  return (
    <motion.h3
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={container}
    >
      {text.split("").map((character, index) => (
        <motion.span
          key={`${character}-${index}`}
          variants={letter}
          className="inline-block text-3xl font-bold"
        >
          {character}
        </motion.span>
      ))}
    </motion.h3>
  );
};
