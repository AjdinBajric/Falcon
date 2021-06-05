import { FC } from "react";
import "./textField.scss";

interface ITextField {
  label: string;
  type?: string;
  validator?: (text: string) => string;
}

const TextField: FC<ITextField> = ({ label, type }: ITextField) => {
  return (
    <>
      <label className="label">{label}</label>
      <input className="inputField" type={type} />
      <p></p>
    </>
  );
};

export default TextField;
