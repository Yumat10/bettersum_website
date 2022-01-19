import Link from "next/link";
import { useRouter } from "next/router";
import { Fragment } from "react";
import { Route } from "../../../../types/Route";
import styles from "./PageLinks.module.css";

export const PageLinks = (): JSX.Element => {
  const router = useRouter();

  const strategyPath: string = "/services?type=strategey";
  const designPath: string = "/services?type=design";
  const developmentPath: string = "/services?type=development";
  const teamPath: string = "/team";

  const routes: Route[] = [
    { name: "saas development", path: developmentPath },
    { name: "workshops", path: strategyPath },
    { name: "brand strategy", path: strategyPath },
    { name: "ux strategy", path: strategyPath },
    { name: "strategy stewardship", path: strategyPath },
    { name: "ux audits", path: designPath },
    { name: "design systems", path: designPath },
    { name: "branding", path: designPath },
    { name: "idea to mvp", path: developmentPath },
    { name: "technical audit", path: developmentPath },
    { name: "agile team", path: teamPath },
    { name: "futurists", path: teamPath },
  ];

  return (
    <div className={styles.container}>
      {routes.map(({ name, path }) => (
        <Fragment key={name}>
          <p className={styles.plus}> +</p>
          <Link href={path}>
            <a referrerPolicy="strict-origin-when-cross-origin">{name}</a>
          </Link>
        </Fragment>
      ))}
    </div>
  );
};
