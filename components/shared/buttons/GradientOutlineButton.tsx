import { FunctionComponent, MouseEventHandler } from "react";

type Props = {
  text: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
};

export const GradientOutlineButton = ({
  text,
  onClick,
}: Props): JSX.Element => {
  return (
    <div>
      <button onClick={onClick}>{text}</button>
    </div>
  );
};
