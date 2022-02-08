import Image from "next/image";
import styles from "./BrandExperience.module.css";
import fontStyles from "styles/fontStyles.module.css";
import { motion, Variants } from "framer-motion";
import Link from "next/link";

const foundersTextVariants: Variants = {
  hover: {
    color: "var(--bettersum-blue)",
  },
};

type Icon = {
  name: string;
  path: string;
  width: number;
  height: number;
};

export const BrandExperience = (): JSX.Element => {
  const icons: Icon[] = [
    {
      name: "Lilly",
      path: "/brandExperienceLogos/lilly.svg",
      width: 65,
      height: 35,
    },
    {
      name: "Honeywell",
      path: "/brandExperienceLogos/honeywell.svg",
      width: 115,
      height: 22,
    },
    {
      name: "Chamberlain Group",
      path: "/brandExperienceLogos/chamberlainGroup.svg",
      width: 140,
      height: 30,
    },
    {
      name: "NothHighland",
      path: "/brandExperienceLogos/northHighland.svg",
      width: 140,
      height: 75,
    },
    {
      name: "Wahoo",
      path: "/brandExperienceLogos/wahoo.svg",
      width: 115,
      height: 45,
    },
  ];

  return (
    <div className={styles["container"]}>
      <h3 className={fontStyles["category-header"]}>
        Some of the brands{" "}
        <Link passHref href="/team">
          <motion.a
            variants={foundersTextVariants}
            whileHover="hover"
            className={styles["founders-text"]}
          >
            our founders
          </motion.a>
        </Link>{" "}
        have collaborated with
      </h3>
      <div className={styles["icons-container"]}>
        {icons.map(({ name, path, width, height }) => (
          <div key={path} className={styles["icons"]}>
            <Image alt={name} src={path} width={width} height={height} />
          </div>
        ))}
      </div>
    </div>
  );
};
