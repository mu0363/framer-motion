import { motion } from "framer-motion";
import { useState } from "react";
import type { NextPage } from "next";

const Smooth: NextPage = () => {
  const [isLoading, setIsLoading] = useState(true);

  const itemMain = {
    hidden: { opacity: 0, y: 200 },
    show: {
      opacity: 1,
      transition: {
        ease: "easeInOut",
        duration: 1.6,
      },
    },
  };

  return (
    <div>
      <motion.img src="/image-05.jpg" alt="image" className="h-48" />
    </div>
  );
};

export default Smooth;
