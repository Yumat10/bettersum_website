import { Route } from "../../../types/Route";
import styles from "./FooterLinksColumn.module.css";
import fontStyles from "styles/fontStyles.module.css";
import { motion, Variants } from "framer-motion";

const routeVariants: Variants = {
  hover: {
    textDecoration: "underline",
  },
};

export const FooterLinksColumn = ({
  header,
  linksArray,
}: {
  header: string;
  linksArray: Route[];
}): JSX.Element => {
  return (
    <div className={styles["container"]}>
      <h3 className={fontStyles["category-copy"]}>{header}</h3>
      {linksArray.map(({ name, path }) => (
        <motion.a
          key={path}
          href={path}
          referrerPolicy="strict-origin-when-cross-origin"
          variants={routeVariants}
          whileHover="hover"
          className={fontStyles["flair-copy"]}
        >
          {name}
        </motion.a>
      ))}
    </div>
  );
};
