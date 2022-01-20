import { Route } from "../../../types/Route";
import styles from "./FooterLinksColumn.module.css";

export const FooterLinksColumn = ({
  header,
  linksArray,
}: {
  header: string;
  linksArray: Route[];
}): JSX.Element => {
  return (
    <div>
      <h3>{header}</h3>
      {linksArray.map(({ name, path }) => (
        <a
          key={path}
          href={path}
          referrerPolicy="strict-origin-when-cross-origin"
        >
          {name}
        </a>
      ))}
    </div>
  );
};
