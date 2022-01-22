import { SubscribeToNewsletterForm } from "../../../shared/forms/SubscribeToNewsletterForm";
import styles from "./SubscribeToNewsletter.module.css";
import fontStyles from "styles/fontStyles.module.css";

export const SubscribeToNewsletter = (): JSX.Element => {
  return (
    <div className={styles["container"]}>
      <div className={styles["inner-container"]}>
        <h2 className={`${fontStyles["title-header"]} ${styles["title"]}`}>
          Subscribe to our newsletter.
        </h2>
        <div className={styles["input-container"]}>
          <SubscribeToNewsletterForm />
        </div>
      </div>
    </div>
  );
};
