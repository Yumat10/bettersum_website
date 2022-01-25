import { BetterSumColors } from "../../../types/BetterSumColors";
import styles from "./Subheading.module.css";
import fontStyles from "../../../styles/fontStyles.module.css";

type Props = {
  title: string;
  sectionNumber?: number;
  color: BetterSumColors;
  topOffset?: string;
  leftOffset?: string;
};

export const Subheading = ({
  title,
  sectionNumber,
  color,
  topOffset = "0px",
  leftOffset = "-100px",
}: Props): JSX.Element => {
  return (
    <div
      className={styles["container"]}
      style={{ top: topOffset, left: leftOffset }}
    >
      <p className={fontStyles["flair-copy"]} style={{ color }}>
        {sectionNumber && `${sectionNumber} — `}
        {title}
      </p>
    </div>
  );
};
