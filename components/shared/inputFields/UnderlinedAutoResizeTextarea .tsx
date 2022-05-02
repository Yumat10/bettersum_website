import {
  ChangeEvent,
  CSSProperties,
  Dispatch,
  SetStateAction,
  useEffect,
  useRef,
  useState,
} from "react";
import styles from "./UnderlinedAutoResizeTextarea.module.css";
import fontStyles from "styles/fontStyles.module.css";

interface TextareaProps<T extends string | number> {
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

// TODO: Add CSS to text area as used in the contact form

export const UnderlinedAutoResizeTextarea = <T extends string | number>({
  id,
  disabled,
  label,
  value,
  placeholder,
  setValue,
  errors,
  onBlur,
  touched,
}: TextareaProps<T>): JSX.Element => {
  const textAreaRef = useRef<HTMLTextAreaElement>(null);
  const [textAreaHeight, setTextAreaHeight] = useState<string>("auto");

  const textAreaStyle: CSSProperties = {
    height: textAreaHeight,
  };

  useEffect(() => {
    if (textAreaRef.current) {
      const newScrollHeight = `${textAreaRef.current.scrollHeight}px`;
      setTextAreaHeight(newScrollHeight);
    }
  }, [value]);

  const onChangeHandler = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTextAreaHeight("auto");
    setValue(event.target.value);
  };

  return (
    <div className={styles["container"]} style={textAreaStyle}>
      <label
        htmlFor={id}
        className={`${fontStyles["body-copy"]} ${styles["label"]}`}
      >
        {label}
      </label>

      <textarea
        id={id}
        ref={textAreaRef}
        disabled={disabled}
        placeholder={placeholder}
        value={value}
        onChange={onChangeHandler}
        onBlur={onBlur}
        rows={1}
        className={`${fontStyles["body-copy"]} ${styles["input"]}`}
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
