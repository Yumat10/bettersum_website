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
}

export const UnderlineInputField = <T extends string | number>({
  type = "text",
  id,
  disabled,
  label,
  value,
  setValue,
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
      />
    </div>
  );
};
