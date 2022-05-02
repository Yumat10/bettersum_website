import {
  ChangeEvent,
  CSSProperties,
  Dispatch,
  SetStateAction,
  useEffect,
  useRef,
  useState,
} from "react";
import styles from "./BoxedAutoResizeTextarea.module.css";
import fontStyles from "styles/fontStyles.module.css";

interface TextareaProps<T extends string | number> {
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

// TODO: Add CSS to text area as used in the contact form

export const BoxedAutoResizeTextarea = <T extends string | number>({
  id,
  disabled,
  label,
  value,
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
    <div>
      <div className={styles["container"]} style={textAreaStyle}>
        <textarea
          id={id}
          ref={textAreaRef}
          disabled={disabled}
          value={value}
          onChange={onChangeHandler}
          onBlur={onBlur}
          rows={1}
          className={styles["input"]}
          style={{
            borderBottomColor:
              touched && errors
                ? "var(--error-color)"
                : "var(--bettersum-blue)",
            borderBottomWidth: touched && errors ? "6px" : "",
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
