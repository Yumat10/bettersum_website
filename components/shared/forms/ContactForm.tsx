import { Formik } from "formik";
import { useState } from "react";
import * as yup from "yup";
import Image from "next/image";
import axios from "axios";
import { SendEmailData } from "types/SendEmailData";
import { motion, Variants } from "framer-motion";
import { UnderlinedInputField } from "../inputFields/UnderlinedInputField";
import { UnderlinedDropdown } from "../inputFields/UnderlinedDropdown";
import { UnderlinedAutoResizeTextarea } from "../inputFields/UnderlinedAutoResizeTextarea ";

import fontStyles from "styles/fontStyles.module.css";
import styles from "./ContactForm.module.css";
import { MobileOnlyLineBreak } from "../lineBreaks/MobileOnlyLineBreak";

const ServiceTypes: string[] = [
  "Strategy & Stewardship",
  "Custom Digital Experience",
  "Shopify Plus Ecommerce",
];
const BudgetOptions: string[] = ["$15k - $30k", "$30k - $100k", "$100k +"];

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
  email: yup.string().required().email(),
  service: yup.string().oneOf(ServiceTypes).required(),
  budget: yup.string().oneOf(BudgetOptions).required(),
  problem: yup.string().required(),
});

type ContactInfo = yup.InferType<typeof ContactInfoSchema>;

const initialValues: ContactInfo = {
  name: "",
  email: "",
  service: "",
  budget: "",
  problem: "",
};

type ContactEmailFields = {
  emailAddress: string;
  name: string;
  email: string;
  service: string;
  budget: string;
  problem: string;
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
            problem: values.problem.replaceAll("\n", "<br>"),
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
            label="Reply to Me at:"
            placeholder="Your Email Address"
            value={props.values.email}
            setValue={props.handleChange("email")}
            disabled={loading}
            errors={props.errors.email}
            onBlur={props.handleBlur("email")}
            touched={props.touched.email}
          />
          <UnderlinedDropdown
            id="service"
            label="Service Type:"
            placeholder="Select a Service"
            options={ServiceTypes}
            value={props.values.service}
            setValue={props.handleChange("service")}
            disabled={loading}
            errors={props.errors.service}
            onBlur={props.handleBlur("service")}
            touched={props.touched.service}
            setTouched={() =>
              props.setTouched({ ...props.touched, service: true })
            }
          />
          <UnderlinedDropdown
            id="budget"
            label="Estimated Budget:"
            placeholder="Select a Budget"
            options={BudgetOptions}
            value={props.values.budget}
            setValue={props.handleChange("budget")}
            disabled={loading}
            errors={props.errors.budget}
            onBlur={props.handleBlur("budget")}
            touched={props.touched.budget}
            setTouched={() =>
              props.setTouched({ ...props.touched, budget: true })
            }
          />
          <span className={styles["message-input"]}>
            <UnderlinedAutoResizeTextarea
              id="problem"
              label="What Problem Do You Want Solved?"
              placeholder="Describe the problem you want solved"
              value={props.values.problem}
              setValue={props.handleChange("problem")}
              disabled={loading}
              errors={props.errors.problem}
              onBlur={props.handleBlur("problem")}
              touched={props.touched.problem}
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
            <p className={fontStyles["category-copy"]}>
              {loading
                ? "Sending..."
                : emailSuccessful
                ? "Submitted! 🎉"
                : "Submit"}
            </p>
            <motion.div
              // variants={arrowVariants}
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
          <h2 className={fontStyles["title-header"]}>
            Work <MobileOnlyLineBreak />
            With Us
          </h2>
          <a
            href="mailto:team@bettersum.com"
            className={`${fontStyles["body-copy"]} ${styles["email-link"]}`}
          >
            <u>team@bettersum.com</u>
          </a>
        </div>
        {ContactFormik}
      </div>
    </div>
  );
};
