import Image from "next/image";
import { smoothScrollDown } from "@/util/functions/smoothScrollDown";
import styles from "./ReadMoreArrow.module.css";
import fontStyles from "@/styles/fontStyles.module.css";

export const ReadMoreArrow = (): JSX.Element => {
  return (
    <div
      className={styles["container"]}
      onClick={() =>
        smoothScrollDown({
          elementId: "services-offered",
          offset: -110,
        })
      }
    >
      <Image src="/arrows/downArrow.svg" alt="down" height={24} width={24} />
      <p className={`${fontStyles["flair-copy"]} ${styles["see-more-text"]}`}>
        See how it all adds up
      </p>
    </div>
  );
};
