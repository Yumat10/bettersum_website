import { Formik } from "formik";
import { UnderlineInputField } from "../inputFields/UnderlineInputField";
import * as yup from "yup";
import styles from "./SubscribeToNewsletterForm.module.css";

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
        onSubmit={(values, actions) => {
          console.log(values);
          // actions.resetForm()
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
              Sign Up
            </button>
          </>
        )}
      </Formik>
    </div>
  );
};
