import { useRouter } from "next/router";
import { useEffect } from "react";
import { LabProjectDetails } from "./TheLab";
import Image from "next/image";
import styles from "./LabProject.module.css";
import fontStyles from "styles/fontStyles.module.css";
import { motion, Variants } from "framer-motion";

const containerVariants: Variants = {
  hover: {
    backgroundColor: "var(--bettersum-blue)",
  },
};

const indexVariants: Variants = {
  hover: {
    x: -30,
  },
};

const arrowVariants: Variants = {
  hover: {
    x: 30,
  },
};

const textVariants: Variants = {
  hover: {
    color: "var(--bettersum-beige)",
  },
};

export const LabProject = ({
  index,
  name,
  description,
  link,
}: LabProjectDetails): JSX.Element => {
  return (
    <motion.a
      href={link}
      target="_blank"
      rel="noreferrer"
      referrerPolicy="strict-origin-when-cross-origin"
      variants={containerVariants}
      whileHover="hover"
      className={styles["container"]}
    >
      <motion.p
        variants={indexVariants}
        className={`${fontStyles["flair-copy"]} ${styles["number"]}`}
      >
        {index}
      </motion.p>
      <div className={styles["text-container"]}>
        <div className={styles["header"]}>
          <motion.h2
            variants={textVariants}
            className={`${fontStyles["category-header"]} ${styles["name-text"]}`}
          >
            {name}
          </motion.h2>
          <motion.div variants={arrowVariants}>
            <Image
              src="/arrows/rightArrowBlack.svg"
              alt="find out more"
              height={24}
              width={24}
            />
          </motion.div>
        </div>
        <motion.p
          variants={textVariants}
          className={`${fontStyles["body-copy"]} ${styles["description"]}`}
        >
          {description}
        </motion.p>
      </div>
    </motion.a>
  );
};
