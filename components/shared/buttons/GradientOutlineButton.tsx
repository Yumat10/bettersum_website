import { motion, Variants } from "framer-motion";
import { FunctionComponent, MouseEventHandler } from "react";
import styles from "./GradientOutlineButton.module.css";

const containerVariants: Variants = {
  hover: {
    scale: 1.2,
  },
};

const gradientOneVariants: Variants = {
  hover: {
    x: -5,
    y: -5,
  },
};

const gradientTwoVariants: Variants = {
  hover: {
    x: 5,
    y: 5,
  },
};

type Props = {
  text: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
};

export const GradientOutlineButton = ({
  text,
  onClick,
}: Props): JSX.Element => {
  return (
    <motion.div variants={containerVariants} whileHover="hover">
      <button onClick={onClick} className={styles["container"]}>
        <motion.div
          variants={gradientOneVariants}
          className={styles["gradient-one"]}
        />
        <motion.div
          variants={gradientTwoVariants}
          className={styles["gradient-two"]}
        />
        <div className={styles["button"]}>{text}</div>
      </button>
    </motion.div>
  );
};
