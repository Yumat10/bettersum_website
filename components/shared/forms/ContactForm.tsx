import { Formik } from "formik";
import { useState } from "react";
import * as yup from "yup";
import { UnderlineInputField } from "../inputFields/UnderlineInputField";
import styles from "./ContactForm.module.css";

// TODO: Delay validation, Add other contact fields, Add error message in input field

const ContactInfoSchema = yup.object({
  firstName: yup.string().required(),
  lastName: yup.string().required(),
  company: yup.string().required(),
  email: yup.string().required().email(),
  message: yup.string().required(),
});

type ContactInfo = yup.InferType<typeof ContactInfoSchema>;

const initialValues: ContactInfo = {
  firstName: "",
  lastName: "",
  company: "",
  email: "",
  message: "",
};

export const ContactForm = (): JSX.Element => {
  //   const [contactInfo, setContactInfo] = useState<ContactInfo>(initialValues);

  //   const contactInfoChangeHandler = (
  //     newValue: string,
  //     fieldName: "firstName" | "lastName" | "company" | "email" | "message"
  //   ) => {
  //     setContactInfo({ ...contactInfo, [fieldName]: newValue });
  //   };

  const ContactFormik = (
    <Formik
      initialValues={initialValues}
      onSubmit={(values, actions) => {
        console.log(values);
        // actions.resetForm()
      }}
      validationSchema={ContactInfoSchema}
    >
      {(props) => (
        <div>
          <UnderlineInputField
            id="firstName"
            label="First Name"
            value={props.values.firstName}
            setValue={props.handleChange("firstName")}
            disabled={false}
            errors={props.errors.firstName}
            touched={props.touched.firstName}
            onBlur={props.handleBlur}
          />
          <UnderlineInputField
            id="lastName"
            label="Last Name"
            value={props.values.lastName}
            setValue={props.handleChange("lastName")}
            disabled={false}
            errors={props.errors.lastName}
            onBlur={props.handleBlur}
            touched={props.touched.lastName}
          />
          <UnderlineInputField
            id="company"
            label="Company"
            value={props.values.company}
            setValue={props.handleChange("company")}
            disabled={false}
            errors={props.errors.company}
            onBlur={props.handleBlur("company")}
            touched={props.touched.company}
          />
          <UnderlineInputField
            id="email"
            label="Email"
            value={props.values.email}
            setValue={props.handleChange("email")}
            disabled={false}
            errors={props.errors.email}
            onBlur={props.handleBlur("email")}
            touched={props.touched.email}
          />

          <UnderlineInputField
            id="message"
            label="Message"
            value={props.values.message}
            setValue={props.handleChange("message")}
            disabled={false}
            errors={props.errors.message}
            onBlur={props.handleBlur("message")}
            touched={props.touched.message}
          />
          <button
            disabled={!props.isValid}
            type="submit"
            onClick={() => props.handleSubmit()}
          >
            Get In Touch
          </button>
        </div>
      )}
    </Formik>
  );

  return (
    <div>
      <div>
        <h2>
          We collaborate with ambitious brands and people. Let&#39;s build.
        </h2>
        <p>biz@bettersum.com</p>
      </div>
      <div>{ContactFormik}</div>
    </div>
  );
};
