import Image from "next/image";
import { smoothScrollDown } from "util/functions/smoothScrollDown";
import styles from "./ReadMoreArrow.module.css";
import fontStyles from "@/styles/fontStyles.module.css";
import { motion, Variants } from "framer-motion";
import { enterFromBottomVariants } from "animations/homePageAnimations";

const arrowVariants: Variants = {
  hover: {
    y: 5,
  },
};

export const ReadMoreArrow = (): JSX.Element => {
  return (
    <motion.div
      variants={enterFromBottomVariants}
      initial="hidden"
      animate="visible"
      whileHover="hover"
      className={styles["container"]}
      onClick={() =>
        smoothScrollDown({
          elementId: "home-page-services-section",
          offset: -110,
        })
      }
    >
      <motion.div variants={arrowVariants}>
        <Image
          src="/arrows/downArrowBeige.svg"
          alt="down"
          height={24}
          width={24}
        />
      </motion.div>
      <p className={`${fontStyles["flair-copy"]} ${styles["see-more-text"]}`}>
        See how it all adds up
      </p>
    </motion.div>
  );
};
