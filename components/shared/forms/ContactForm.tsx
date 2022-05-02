import { Formik } from "formik";
import { useState } from "react";
import * as yup from "yup";
import styles from "./ContactForm.module.css";
import fontStyles from "styles/fontStyles.module.css";
import Image from "next/image";
import { BoxedAutoResizeTextarea } from "../inputFields/BoxedAutoResizeTextarea";
import axios from "axios";
import { SendEmailData } from "types/SendEmailData";
import { motion, Variants } from "framer-motion";
import { UnderlinedInputField } from "../inputFields/UnderlinedInputField";

const arrowVariants: Variants = {
  hover: {
    x: "90%",
    transition: {
      type: "tween",
      duration: 1,
    },
  },
};

const ContactInfoSchema = yup.object({
  name: yup.string().required(),
  lastName: yup.string().required(),
  company: yup.string().required(),
  email: yup.string().required().email(),
  message: yup.string().required(),
});

type ContactInfo = yup.InferType<typeof ContactInfoSchema>;

const initialValues: ContactInfo = {
  name: "",
  lastName: "",
  company: "",
  email: "",
  message: "",
};

type ContactEmailFields = {
  emailAddress: string;
  name: string;
  lastName: string;
  company: string;
  message: string;
};

export const ContactForm = (): JSX.Element => {
  const [loading, setLoading] = useState<boolean>(false);
  // temporary state of success
  const [emailSuccessful, setEmailSuccessful] = useState<boolean>(false);

  const sendContactTeamEmail = async (
    contactEmailFields: ContactEmailFields
  ) => {
    const sendEmailProps: SendEmailData = {
      emailAddress: contactEmailFields.emailAddress,
      template: "contactTeam",
      templateData: { ...contactEmailFields },
    };
    await axios.post("/api/email/sendEmail", sendEmailProps);
  };

  const ContactFormik = (
    <Formik
      initialValues={initialValues}
      onSubmit={async (values, actions) => {
        setLoading(true);
        try {
          await sendContactTeamEmail({
            ...values,
            emailAddress: values.email,
            message: values.message.replaceAll("\n", "<br>"),
          });
          setEmailSuccessful(true);
          setInterval(() => setEmailSuccessful(false), 5000);
          actions.resetForm();
        } catch (error) {
          console.log(error);
        }
        setLoading(false);
      }}
      validationSchema={ContactInfoSchema}
    >
      {(props) => (
        <div className={styles["form-container"]}>
          <UnderlinedInputField
            id="name"
            label="My name is:"
            placeholder="Your Full Name"
            value={props.values.name}
            setValue={props.handleChange("name")}
            disabled={loading}
            errors={props.errors.name}
            touched={props.touched.name}
            onBlur={props.handleBlur}
          />
          <UnderlinedInputField
            id="email"
            label="Reply to me at:"
            placeholder="Your Email Address"
            value={props.values.email}
            setValue={props.handleChange("email")}
            disabled={loading}
            errors={props.errors.email}
            onBlur={props.handleBlur("email")}
            touched={props.touched.email}
          />
          <span className={styles["message-input"]}>
            <BoxedAutoResizeTextarea
              id="message"
              label="Message"
              value={props.values.message}
              setValue={props.handleChange("message")}
              disabled={loading}
              errors={props.errors.message}
              onBlur={props.handleBlur("message")}
              touched={props.touched.message}
            />
          </span>
          <motion.button
            initial="initial"
            whileHover="hover"
            disabled={!props.isValid || loading}
            type="submit"
            onClick={() => props.handleSubmit()}
            className={styles["submit-button"]}
          >
            <p className={fontStyles["body-copy"]}>
              {loading
                ? "Sending..."
                : emailSuccessful
                ? "Submitted! 🎉"
                : "Submit"}
            </p>
            <motion.div
              variants={arrowVariants}
              className={styles["arrow-container"]}
              style={{
                display: emailSuccessful ? "none" : "block",
              }}
            >
              <Image
                src={"/arrows/rightArrowBeige.svg"}
                alt="Submit"
                height={24}
                width={24}
              />
            </motion.div>
          </motion.button>
        </div>
      )}
    </Formik>
  );

  return (
    <div className={styles["container"]}>
      <div className={styles["inner-container"]}>
        <div className={styles["text-container"]}>
          <h2 className={fontStyles["title-header"]}>Work With Us</h2>
          <a
            href="mailto:team@bettersum.com"
            className={`${fontStyles["flair-copy"]} ${styles["email-link"]}`}
          >
            <u>team@bettersum.com</u>
          </a>
        </div>
        {ContactFormik}
      </div>
    </div>
  );
};
