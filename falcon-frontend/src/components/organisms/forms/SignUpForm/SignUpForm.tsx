import { FC } from "react";
import TextField from "../../../atoms/InputFields/TextField";
import PrimaryButton from "../../../atoms/PrimaryButton/PrimaryButton";
import "./signupform.scss";

const SignUpForm: FC = () => {
  const emailValidator = (text: string): string | undefined => {
    if (text.indexOf("@") == -1) {
      return "Please enter a valid email";
    }
  };

  return (
    <div className="form">
      <div className="fields">
        <div className="title">
          <p className="signWord">SIGN</p>
          <p className="upWord">UP</p>
        </div>
        <TextField label="Full Name" />
        <TextField label="Email" />
        <TextField label="Password" type="password" />
        <TextField label="Confirm password" type="password" />

        <div className="button">
          <PrimaryButton text="Sign Up" />
        </div>
      </div>
      <div>
        <img
          src="images/signupFormImage.jpg"
          alt="falconImage"
          className="image"
        />
      </div>
    </div>
  );
};

export default SignUpForm;
