import { FunctionComponent, MouseEventHandler } from "react";
import styles from "./GradientOutlineButton.module.css";

type Props = {
  text: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
};

export const GradientOutlineButton = ({
  text,
  onClick,
}: Props): JSX.Element => {
  return (
    <button onClick={onClick} className={styles["container"]}>
      <div className={styles["gradient-one"]} />
      <div className={styles["gradient-two"]} />
      <div className={styles["button"]}>{text}</div>
    </button>
  );
};
