import { Dispatch, SetStateAction } from "react";
import styles from "./UnderlineInputField.module.css";

enum InputTypes {
  text = "text",
}

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
      <label htmlFor={id}>{label}</label>
      <input
        type={type}
        id={id}
        disabled={disabled}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onBlur={onBlur}
      />
      {touched && errors && <p>{errors}</p>}
    </div>
  );
};
