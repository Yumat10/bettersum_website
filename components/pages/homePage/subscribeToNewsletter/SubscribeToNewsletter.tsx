import { Formik } from "formik";
import { useState } from "react";
import { UnderlineInputField } from "../../../shared/inputFields/UnderlineInputField";
import * as yup from "yup";
import styles from "./SubscribeToNewsletter.module.css";

const SubscribeInfoSchema = yup.object({
  email: yup.string().required().email(),
});

type SubscribeInfo = yup.InferType<typeof SubscribeInfoSchema>;

const initialValues: SubscribeInfo = {
  email: "",
};

export const SubscribeToNewsletter = (): JSX.Element => {
  return (
    <div>
      <h2>Subscribe to our newsletter.</h2>
      <div>
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
              <button disabled={!props.isValid} type="submit">
                Sign Up
              </button>
            </>
          )}
        </Formik>
      </div>
    </div>
  );
};
