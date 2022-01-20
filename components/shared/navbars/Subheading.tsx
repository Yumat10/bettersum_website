import { BetterSumColors } from "../../../types/BetterSumColors";
import styles from "./Subheading.module.css";

type Props = {
  title: string;
  sectionNumber?: number;
  color: BetterSumColors;
};

export const Subheading = ({
  title,
  sectionNumber,
  color,
}: Props): JSX.Element => {
  return (
    <div>
      <p style={{ color }}>
        {sectionNumber && `${sectionNumber} — `}
        {title}
      </p>
    </div>
  );
};
