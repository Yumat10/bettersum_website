import { AnimatePresence, motion, Variants } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

import fontStyles from "styles/fontStyles.module.css";
import styles from "./UnderlinedDropdown.module.css";

const optionsContainerVariants: Variants = {
  hidden: {
    height: "0px",
    padding: "0px",
  },
  visible: {
    height: "auto",
    padding: "18px 20px",
    transition: {
      duration: 0.25,
    },
  },
  exit: {
    height: "0px",
    padding: "0px",
    transition: {
      delay: 0.26,
    },
  },
};

const optionVariants: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      delay: 0.25,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.25,
    },
  },
};

interface InputFieldProps<T extends string | number> {
  type?: "text" | "number";
  id: string;
  disabled: boolean;
  label: string;
  // Dropdown Options
  options: string[];
  value: T;
  placeholder: string;
  setValue: (newValue: string) => void;
  errors?: string;
  // Formik element that triggers validation when blurred
  onBlur: (e: any) => void;
  // Formik element that determines if a user has visited a field
  touched: boolean | undefined;
  // Formik funtion to set touched to true
  setTouched: () => void;
}

export const UnderlinedDropdown = <T extends string | number>({
  type = "text",
  id,
  disabled,
  label,
  options,
  value,
  placeholder,
  setValue,
  errors,
  onBlur,
  touched,
  setTouched,
}: InputFieldProps<T>): JSX.Element => {
  const [showOptions, setShowOptions] = useState<boolean>(false);

  return (
    <div className={styles["container"]}>
      <label
        htmlFor={id}
        className={`${fontStyles["category-copy"]} ${styles["label"]}`}
      >
        {label}
      </label>
      <div
        onClick={() => {
          // If closing the options, set touched to be true
          if (showOptions) {
            setTouched();
          }
          if (!disabled) {
            setShowOptions(!showOptions);
          }
        }}
        className={`${fontStyles["category-copy"]} ${styles["input"]}`}
      >
        {value ? (
          <p className={styles["input-value"]}>{value}</p>
        ) : (
          <p className={styles["placeholder"]}>{placeholder}</p>
        )}
        <Image
          src="/arrows/downChevronBlack.svg"
          alt=""
          objectFit="contain"
          height={24}
          width={24}
        />
      </div>
      <div
        className={styles["underline"]}
        style={{
          borderBottomColor: !touched
            ? "var(--bettersum-black)"
            : errors
            ? "var(--error-color)"
            : "var(--bettersum-blue)",
          borderWidth: showOptions ? "4px" : "2px",
        }}
      >
        <AnimatePresence>
          {showOptions && (
            <motion.div
              variants={optionsContainerVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              key={id}
              className={styles["options-grid"]}
            >
              {options.map((option, index) => {
                return (
                  <motion.p
                    key={index}
                    variants={optionVariants}
                    onClick={() => {
                      setValue(option);
                      setShowOptions(false);
                    }}
                    className={`${fontStyles["category-copy"]} ${styles["option"]}`}
                  >
                    {option}
                  </motion.p>
                );
              })}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      {touched && errors && (
        <p className={`${fontStyles["flair-copy"]} ${styles["errors"]}`}>
          {errors}
        </p>
      )}
    </div>
  );
};
