import Image from "next/image";
import styles from "./BrandExperience.module.css";
import fontStyles from "styles/fontStyles.module.css";

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
        Some of the brands we have collaborated with
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
