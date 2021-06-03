import { FC } from "react";
import "./primaryButton.scss";

interface IPrimaryButton {
  text: string;
}
const PrimaryButton: FC<IPrimaryButton> = ({ text }: IPrimaryButton) => {
  return (
    <>
      <button className="primaryButton">{text}</button>
    </>
  );
};

export default PrimaryButton;
