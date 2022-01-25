import { Dispatch, SetStateAction } from "react";
import styles from "./UnderlineInputField.module.css";
import fontStyles from "styles/fontStyles.module.css";

interface InputFieldProps<T extends string | number> {
  type?: "text" | "number";
  id: string;
  disabled: boolean;
  label: string;
  value: T;
  setValue: (newValue: string) => void;
  errors?: string;
  // Formik element that triggers validation when blurred
  onBlur: (e: any) => void;
  // Formik element that determines if a user has visited a field
  touched: boolean | undefined;
}

export const UnderlineInputField = <T extends string | number>({
  type = "text",
  id,
  disabled,
  label,
  value,
  setValue,
  errors,
  onBlur,
  touched,
}: InputFieldProps<T>): JSX.Element => {
  return (
    <div>
      <div className={styles["container"]}>
        <input
          type={type}
          id={id}
          disabled={disabled}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onBlur={onBlur}
          className={styles["input"]}
          style={{
            borderBottomColor:
              touched && errors
                ? "var(--error-color)"
                : "var(--bettersum-blue)",
            borderWidth: touched && errors ? "6px" : "",
          }}
        />
        <label
          htmlFor={id}
          className={`${fontStyles["flair-copy"]} ${styles["label"]}`}
        >
          {label}
        </label>
      </div>
      {touched && errors && (
        <p className={`${fontStyles["flair-copy"]} ${styles["errors"]}`}>
          {errors}
        </p>
      )}
    </div>
  );
};
