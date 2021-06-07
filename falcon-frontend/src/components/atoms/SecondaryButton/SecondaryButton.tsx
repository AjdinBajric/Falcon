import { FC } from "react";
import "./secondaryButton.scss";

interface ISecondaryButton {
  text: string;
  onClick: () => void;
}

const SecondaryButton: FC<ISecondaryButton> = ({
  text,
  onClick,
}: ISecondaryButton) => {
  return (
    <>
      <button className="secondaryButton" onClick={onClick}>
        {text}
      </button>
    </>
  );
};

export default SecondaryButton;
