import styles from "./UnderlinedInputField.module.css";
import fontStyles from "styles/fontStyles.module.css";

interface InputFieldProps<T extends string | number> {
  type?: "text" | "number";
  id: string;
  disabled: boolean;
  label: string;
  value: T;
  placeholder: string;
  setValue: (newValue: string) => void;
  errors?: string;
  // Formik element that triggers validation when blurred
  onBlur: (e: any) => void;
  // Formik element that determines if a user has visited a field
  touched: boolean | undefined;
}

export const UnderlinedInputField = <T extends string | number>({
  type = "text",
  id,
  disabled,
  label,
  value,
  placeholder,
  setValue,
  errors,
  onBlur,
  touched,
}: InputFieldProps<T>): JSX.Element => {
  return (
    <div className={styles["container"]}>
      <label
        htmlFor={id}
        className={`${fontStyles["category-copy"]} ${styles["label"]}`}
      >
        {label}
      </label>
      <input
        type={type}
        id={id}
        disabled={disabled}
        value={value}
        placeholder={placeholder}
        onChange={(e) => setValue(e.target.value)}
        onBlur={onBlur}
        className={`${fontStyles["category-copy"]} ${styles["input"]}`}
        style={{
          borderBottomColor: !touched
            ? "var(--bettersum-black)"
            : errors
            ? "var(--error-color)"
            : "var(--bettersum-blue)",
        }}
      />
      {touched && errors && (
        <p className={`${fontStyles["flair-copy"]} ${styles["errors"]}`}>
          {errors}
        </p>
      )}
    </div>
  );
};
