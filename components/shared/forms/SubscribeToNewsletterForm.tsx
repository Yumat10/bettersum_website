import { Formik } from "formik";
import { UnderlineInputField } from "../inputFields/UnderlineInputField";
import * as yup from "yup";
import styles from "./SubscribeToNewsletterForm.module.css";
import fontStyles from "styles/fontStyles.module.css";
import axios, { AxiosError, AxiosResponse } from "axios";
import { motion, Variants } from "framer-motion";
import { useState } from "react";

const submitButtonVariants: Variants = {
  hover: {
    scale: 1.05,
  },
};

const SubscribeInfoSchema = yup.object({
  email: yup.string().required().email(),
});

type SubscribeInfo = yup.InferType<typeof SubscribeInfoSchema>;

const initialValues: SubscribeInfo = {
  email: "",
};

export const SubscribeToNewsletterForm = (): JSX.Element => {
  const [loading, setLoading] = useState<boolean>(false);
  // temporary state of success
  const [subscriptionSuccessful, setSubscriptionSuccessful] =
    useState<boolean>(false);

  return (
    <div className={styles["container"]}>
      <Formik
        initialValues={initialValues}
        onSubmit={async (values, actions) => {
          setLoading(true);
          try {
            await axios.post("/api/email/subscribeToGhost", {
              email: values.email,
            });
            setSubscriptionSuccessful(true);
            setInterval(() => setSubscriptionSuccessful(false), 5000);
            actions.resetForm();
          } catch (err) {
            console.log(err);

            if (axios.isAxiosError(err)) {
              actions.setErrors({
                email: err.response?.data?.error,
              });
            }
          }
          setLoading(false);
        }}
        validationSchema={SubscribeInfoSchema}
      >
        {(props) => (
          <>
            <div className={styles["input-container"]}>
              <UnderlineInputField
                id="email"
                disabled={false}
                label="Email"
                value={props.values.email}
                setValue={props.handleChange("email")}
                errors={props.errors.email}
                touched={props.touched.email}
                onBlur={props.handleBlur}
              />
            </div>
            <motion.button
              disabled={!props.isValid || loading}
              type="submit"
              variants={submitButtonVariants}
              whileHover="hover"
              onClick={() => props.handleSubmit()}
              className={styles["button"]}
            >
              <p className={fontStyles["body-copy"]}>
                {loading
                  ? "Subscribing..."
                  : subscriptionSuccessful
                  ? "Subscribed! 🎉"
                  : "Sign Up"}
              </p>
            </motion.button>
          </>
        )}
      </Formik>
    </div>
  );
};
