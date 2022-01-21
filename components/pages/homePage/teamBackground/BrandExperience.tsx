import Image from "next/image";
import styles from "./BrandExperience.module.css";

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
      path: "/wahoo.svg",
      width: 115,
      height: 45,
    },
  ];

  return (
    <div>
      <h3>Some of the brands we have collaborated with</h3>
      <div style={{ background: "black" }}>
        {icons.map(({ name, path, width, height }) => (
          <Image
            key={path}
            alt={name}
            src={path}
            width={width}
            height={height}
          />
        ))}
      </div>
    </div>
  );
};
