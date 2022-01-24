import { Formik } from "formik";
import { UnderlineInputField } from "../inputFields/UnderlineInputField";
import * as yup from "yup";
import styles from "./SubscribeToNewsletterForm.module.css";
import fontStyles from "styles/fontStyles.module.css";
import axios, { AxiosError, AxiosResponse } from "axios";

const SubscribeInfoSchema = yup.object({
  email: yup.string().required().email(),
});

type SubscribeInfo = yup.InferType<typeof SubscribeInfoSchema>;

const initialValues: SubscribeInfo = {
  email: "",
};

export const SubscribeToNewsletterForm = (): JSX.Element => {
  return (
    <div className={styles["container"]}>
      <Formik
        initialValues={initialValues}
        onSubmit={async (values, actions) => {
          try {
            await axios.post("/api/email/subscribeToNewsletter", {
              email: values.email,
            });
            actions.resetForm();
          } catch (err) {
            console.log(err);

            if (axios.isAxiosError(err)) {
              actions.setErrors({
                email: err.response?.data?.error,
              });
            }
          }
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
            <button
              disabled={!props.isValid}
              type="submit"
              onClick={() => props.handleSubmit()}
              className={styles["button"]}
            >
              <p className={fontStyles["body-copy"]}>Sign Up</p>
            </button>
          </>
        )}
      </Formik>
    </div>
  );
};
