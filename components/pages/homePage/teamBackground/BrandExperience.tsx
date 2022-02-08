import Image from "next/image";
import styles from "./BrandExperience.module.css";
import fontStyles from "styles/fontStyles.module.css";
import { motion, Variants } from "framer-motion";
import Link from "next/link";

const foundersTextVariants: Variants = {
  hover: {
    backgroundColor: "var(--bettersum-blue)",
  },
};

const founderPhotosVariants: Variants = {
  hover: {
    opacity: 1,
    scale: [0.95, 1],
    y: [10, 0],
    transition: {
      duration: 0.5,
    },
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

  const FounderPhotos = (): JSX.Element => {
    const photos: string[] = [
      "/teamPhotos/profileImage/richard.png",
      "/teamPhotos/profileImage/william.png",
      "/teamPhotos/profileImage/yuma.png",
    ];

    return (
      <motion.div
        variants={founderPhotosVariants}
        className={styles["founder-photos-container"]}
      >
        {photos.map((profileImageUrl) => (
          <Link key={profileImageUrl} passHref href="/team">
            <img
              src={profileImageUrl}
              alt=""
              className={styles["founder-photo"]}
            />
          </Link>
        ))}
      </motion.div>
    );
  };

  return (
    <div className={styles["container"]}>
      <h3 className={fontStyles["category-header"]}>
        Some of the brands{" "}
        <motion.div
          whileHover="hover"
          className={styles["founders-text-container"]}
        >
          {FounderPhotos()}
          <Link passHref href="/team">
            <motion.a variants={foundersTextVariants}>our founders</motion.a>
          </Link>
        </motion.div>{" "}
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
