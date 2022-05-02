import { FC } from "react";

import styles from "./MobileOnlyLineBreak.module.css";

export const MobileOnlyLineBreak: FC = (): JSX.Element => {
  return <br className={styles["mobile-br"]} />;
};
