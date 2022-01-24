import { Route } from "../../../types/Route";
import styles from "./FooterLinksColumn.module.css";
import fontStyles from "styles/fontStyles.module.css";

export const FooterLinksColumn = ({
  header,
  linksArray,
}: {
  header: string;
  linksArray: Route[];
}): JSX.Element => {
  return (
    <div className={styles["container"]}>
      <h3 className={fontStyles["body-copy"]}>{header}</h3>
      {linksArray.map(({ name, path }) => (
        <a
          key={path}
          href={path}
          referrerPolicy="strict-origin-when-cross-origin"
          className={fontStyles["flair-copy"]}
        >
          {name}
        </a>
      ))}
    </div>
  );
};
