import { FC } from "react";
import "./primaryButton.scss";

interface IPrimaryButton {
  text: string;
  onClick: () => void;
}
const PrimaryButton: FC<IPrimaryButton> = ({
  text,
  onClick,
}: IPrimaryButton) => {
  return (
    <>
      <button className="primaryButton" onClick={onClick}>
        {text}
      </button>
    </>
  );
};

export default PrimaryButton;
