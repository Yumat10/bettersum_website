import { AnimatePresence, motion, Variants } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

import fontStyles from "../../../styles/fontStyles.module.css";
import styles from "./BasicAccordion.module.css";

const faqContainerVariants: Variants = {
  hover: {
    backgroundColor: "var(--bettersum-blue)",
    color: "var(--bettersum-beige)",
  },
};

const faqInnerContainerVariants: Variants = {
  hover: {
    scale: 0.98,
  },
};

const headerVariants: Variants = {
  closed: {
    color: "var(--rnnr-black)",
  },
  open: {
    color: "var(--rnnr-fire)",
  },
};

const iconButtonVariants: Variants = {
  initial: {
    rotate: "0deg",
  },
  rotate: {
    rotate: "135deg",
  },
};

const iconsWrapperVariants: Variants = {
  hover: {
    scale: 1.1,
  },
};

const descriptionVariants: Variants = {
  hidden: {
    opacity: 0,
    height: 0,
    margin: "0px 0px 0px 0px",
    transition: {
      height: {
        delay: 0.1,
      },
    },
  },
  visible: {
    opacity: 1,
    height: "auto",
    margin: "40px 0px 24px 0px",
  },
};

type BasicAccordionProps = {
  headerText: string;
  headerIcon?: {
    url: string;
    height: number;
    width: number;
  };
  descriptionText: string;
  defaultIsOpen?: boolean;
  includeBorderBottom?: boolean;
};

export const BasicAccordion = ({
  headerText,
  headerIcon,
  descriptionText,
  defaultIsOpen,
  includeBorderBottom,
}: BasicAccordionProps): JSX.Element => {
  const [isOpen, setIsOpen] = useState<boolean>(defaultIsOpen ? true : false);

  return (
    <motion.div
      variants={faqContainerVariants}
      whileHover={isOpen ? "" : "hover"}
      onClick={() => setIsOpen(!isOpen)}
      className={styles["container"]}
      style={{
        borderBottom: includeBorderBottom
          ? "2px solid var(--bettersum-black)"
          : "",
      }}
    >
      <motion.div variants={faqInnerContainerVariants}>
        <div className={styles["header-container"]}>
          <div className={styles["header-inner-container"]}>
            {headerIcon && (
              <Image
                src={headerIcon.url}
                alt=""
                objectFit="contain"
                height={headerIcon.height}
                width={headerIcon.width}
              />
            )}
            <motion.h3
              variants={headerVariants}
              initial="closed"
              animate={isOpen ? "open" : "closed"}
              className={`${fontStyles["category-copy"]} ${styles["header-text"]}`}
            >
              {headerText}
            </motion.h3>
          </div>
          <motion.div
            variants={iconsWrapperVariants}
            className={styles["icon-button"]}
          >
            <motion.div
              key="basic-accordion-plus"
              variants={iconButtonVariants}
              initial="initial"
              animate={isOpen ? "rotate" : "initial"}
            >
              <div className={styles["plus-icon-container"]}>
                <Image
                  src="/plus.svg"
                  alt="open"
                  objectFit="contain"
                  layout="fill"
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
        <AnimatePresence>
          {isOpen && (
            <motion.p
              variants={descriptionVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              className={`${fontStyles["body-copy"]} ${styles["description-text"]}`}
            >
              {descriptionText}
            </motion.p>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
};
