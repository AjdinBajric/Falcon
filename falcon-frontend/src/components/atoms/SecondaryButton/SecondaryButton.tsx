import { FC } from "react";
import "./secondaryButton.scss";

interface ISecondaryButton {
  text: string;
}

const SecondaryButton: FC<ISecondaryButton> = ({ text }: ISecondaryButton) => {
  return (
    <>
      <button className="secondaryButton">{text}</button>
    </>
  );
};

export default SecondaryButton;
