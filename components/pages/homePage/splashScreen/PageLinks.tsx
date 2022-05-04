import Link from "next/link";
import { useRouter } from "next/router";
import { Fragment } from "react";
import { Route } from "../../../../types/Route";
import styles from "./PageLinks.module.css";
import fontStyles from "../../../../styles/fontStyles.module.css";
import { motion, Variants } from "framer-motion";
import { enterFromTopContainer } from "animations/homePageAnimations";

const pageLinkVariants: Variants = {
  hover: {
    color: "var(--bettersum-blue)",
    opacity: 1,
  },
};

export const PageLinks = (): JSX.Element => {
  const router = useRouter();

  const strategyPath: string = "/services?type=strategy";
  const designPath: string = "/services?type=design";
  const developmentPath: string = "/services?type=development";

  const routes: Route[] = [
    { name: "saas development", path: developmentPath },
    { name: "workshops", path: strategyPath },
    { name: "brand strategy", path: strategyPath },
    { name: "ux strategy", path: strategyPath },
    { name: "strategy stewardship", path: strategyPath },
    { name: "ux audits", path: designPath },
    { name: "ux design", path: designPath },
    { name: "design systems", path: designPath },
    { name: "branding", path: designPath },
    { name: "idea to mvp", path: developmentPath },
    { name: "technical audit", path: developmentPath },
  ];

  return (
    <motion.div
      variants={enterFromTopContainer}
      initial="hidden"
      animate="visible"
      className={styles.container}
    >
      {routes.map(({ name, path }) => (
        <Fragment key={name}>
          <Link href={path} passHref>
            <motion.a
              referrerPolicy="strict-origin-when-cross-origin"
              variants={pageLinkVariants}
              whileHover="hover"
              className={`${fontStyles["body-copy"]} ${styles["link"]}`}
            >
              {name}
            </motion.a>
          </Link>
          <p className={`${styles["plus"]} ${fontStyles["body-copy"]}`}> +</p>
          <div className={styles["break"]} />
        </Fragment>
      ))}
    </motion.div>
  );
};
