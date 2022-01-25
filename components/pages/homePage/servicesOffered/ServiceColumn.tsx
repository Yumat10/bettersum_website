import { ServiceDetails } from "./ServicesOffered";
import Image from "next/image";
import styles from "./ServiceColumn.module.css";
import fontStyles from "@/styles/fontStyles.module.css";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { motion, Variants } from "framer-motion";

const containerVariants: Variants = {
  hover: {
    backgroundColor: "var(--bettersum-blue)",
  },
};

const bodyTextVariants: Variants = {
  hover: {
    color: "#FFF",
  },
};

const seeAllServicesVariants: Variants = {
  hover: {
    visibility: "visible",
  },
};

const arrowVariants: Variants = {
  hover: {
    x: 30,
    transition: {
      delay: 0.1,
    },
  },
};

export const ServiceColumn = ({
  icon,
  title,
  description,
  includePlus,
  path,
}: ServiceDetails): JSX.Element => {
  const router = useRouter();

  useEffect(() => {
    router.prefetch(path);
  }, [router, path]);

  return (
    <motion.div
      className={`${styles["container"]} ${
        includePlus ? styles["divider"] : ""
      }`}
      variants={containerVariants}
      whileHover="hover"
      onClick={() => router.push(path)}
    >
      <div className={styles["inner-container"]}>
        <Image
          src={icon.url}
          alt={`${title} Icon`}
          height={icon.height}
          width={icon.width}
          className={styles["icon"]}
        />
        <motion.h2
          variants={bodyTextVariants}
          className={`${fontStyles["category-header"]} ${styles["category"]}`}
        >
          {title}
        </motion.h2>
        <motion.p
          variants={bodyTextVariants}
          className={`${fontStyles["body-copy"]} ${styles["descriptions"]}`}
        >
          {description}
        </motion.p>
        <motion.div
          variants={seeAllServicesVariants}
          className={styles["see-all-services-container"]}
        >
          <p className={fontStyles["body-copy"]}>All Services</p>
          <motion.div variants={arrowVariants}>
            <Image
              src="/arrows/rightArrowBeige.svg"
              alt=""
              height={24}
              width={24}
            />
          </motion.div>
        </motion.div>
        {includePlus && (
          <div className={styles["plus"]}>
            <Image src="/plus.svg" alt="+" objectFit="cover" layout="fill" />
          </div>
        )}
      </div>
    </motion.div>
  );
};
