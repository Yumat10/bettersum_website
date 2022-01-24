import { ServiceDetails } from "./ServicesOffered";
import Image from "next/image";
import styles from "./ServiceColumn.module.css";
import fontStyles from "@/styles/fontStyles.module.css";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { motion } from "framer-motion";

const containerVariants = {
  hover: {
    backgroundColor: "var(--bettersum-blue)",
  },
};

const bodyTextVariants = {
  hover: {
    color: "#FFF",
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
        {includePlus && (
          <div className={styles["plus"]}>
            <Image src="/plus.svg" alt="+" objectFit="cover" layout="fill" />
          </div>
        )}
      </div>
    </motion.div>
  );
};
