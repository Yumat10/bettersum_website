import { Variants, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import { BetterSumColors } from "types/BetterSumColors";

import fontStyles from "../../../styles/fontStyles.module.css";
import styles from "./UnderlineArrowLink.module.css";

const containerVariants: Variants = {
  hover: {
    scale: 1.05,
  },
};

const arrowVariants: Variants = {
  hover: {
    x: "15px",
  },
};

type UnderlineArrowLinkProps = {
  color: BetterSumColors;
  text: string;
  link: string;
};

export const UnderlineArrowLink: FC<UnderlineArrowLinkProps> = ({
  color,
  text,
  link,
}) => {
  return (
    <Link href={link} passHref>
      <motion.a
        variants={containerVariants}
        whileHover="hover"
        className={styles["container"]}
      >
        <p
          className={`${fontStyles["category-copy"]} ${styles["text"]}`}
          style={{
            borderColor: color,
          }}
        >
          Partner with us to scale your DTC ecommerce business
        </p>
        <motion.span
          variants={arrowVariants}
          className={styles["arrow-container"]}
        >
          <Image
            src={
              color === BetterSumColors.Beige
                ? "/arrows/rightArrowBeige.svg"
                : "/arrows/rightArrowBlack.svg"
            }
            alt=""
            objectFit="contain"
            height={30}
            width={35}
            priority
          />
        </motion.span>
      </motion.a>
    </Link>
  );
};
