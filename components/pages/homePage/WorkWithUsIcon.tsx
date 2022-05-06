import { motion, Variants } from "framer-motion";
import Image from "next/image";
import { FC, useEffect, useState } from "react";

import styles from "./WorkWithUsIcon.module.css";

const IconVariants: Variants = {
  hover: { scale: 1.1 },
};

export const WorkWithUsIcon: FC = () => {
  const [scrollPosition, setScrollPosition] = useState<number>(0);

  const monitorScroll = (): void => {
    setScrollPosition(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", monitorScroll);
    return () => window.removeEventListener("scroll", monitorScroll);
  }, []);

  const IconTextVariants = (): Variants => {
    return {
      initial: {
        rotate: "0deg",
      },
      scroll: {
        scale: 1.05,
        rotate: `${scrollPosition / 5}deg`,
        transition: {
          ease: "linear",
          duration: 0,
        },
      },
    };
  };

  return (
    <div className={styles["container"]}>
      <motion.div whileHover="hover" className={styles["inner-container"]}>
        <motion.img
          variants={IconTextVariants()}
          initial="initial"
          animate="scroll"
          src="/@SymbolTextBlue.svg"
          alt=""
          className={styles["icon-text"]}
        />
        <motion.img
          variants={IconVariants}
          src="/@SymbolBlue.svg"
          alt="Work With Us"
          className={styles["icon"]}
        />
      </motion.div>
    </div>
  );
};
