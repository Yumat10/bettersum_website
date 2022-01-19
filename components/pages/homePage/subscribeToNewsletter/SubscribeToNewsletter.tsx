import { useState } from "react";
import { UnderlineInputField } from "../../../shared/inputFields/UnderlineInputField";
import styles from "./SubscribeToNewsletter.module.css";

export const SubscribeToNewsletter = (): JSX.Element => {
  const [email, setEmail] = useState<string>("");

  const handleSignUp = () => {
    console.log(email);
    setEmail("");
  };

  return (
    <div>
      <h2>Subscribe to our newsletter.</h2>
      <div>
        <UnderlineInputField
          id="subscribe-email-input"
          label="Email"
          disabled={false}
          value={email}
          setValue={setEmail}
        />
        <button onClick={handleSignUp}>Sign Up</button>
      </div>
    </div>
  );
};
