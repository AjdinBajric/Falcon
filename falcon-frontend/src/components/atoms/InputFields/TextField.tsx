import { FC } from "react";
import "./textField.scss";

interface ITextField {
  value?: string;
  onChange: (value: string) => void;
  name?: string;
  placeholder?: string;
  autoFocus?: boolean;
  type?: "email" | "password" | "text";
}

const TextField: FC<ITextField> = ({ onChange, ...rest }: ITextField) => {
  return (
    <>
      <input
        className="inputField"
        onChange={({ target: { value } }) => onChange(value)}
        {...rest}
      />
    </>
  );
};

export default TextField;
