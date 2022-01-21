import { SubscribeToNewsletterForm } from "../../../shared/forms/SubscribeToNewsletterForm";
import styles from "./SubscribeToNewsletter.module.css";

export const SubscribeToNewsletter = (): JSX.Element => {
  return (
    <div>
      <h2>Subscribe to our newsletter.</h2>
      <div>
        <SubscribeToNewsletterForm />
      </div>
    </div>
  );
};
