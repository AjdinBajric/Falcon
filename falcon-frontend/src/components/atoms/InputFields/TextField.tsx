import { FC } from "react";
import "./textField.scss";

interface ITextField {
  label: string;
}

const TextField: FC<ITextField> = ({ label }: ITextField) => {
  return (
    <>
      <label className="label">{label}</label>
      <input className="inputField" />
    </>
  );
};

export default TextField;
