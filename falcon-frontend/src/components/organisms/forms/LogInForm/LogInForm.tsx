import { FC, useState } from "react";
import TextField from "../../../atoms/InputFields/TextField";
import PrimaryButton from "../../../atoms/PrimaryButton/PrimaryButton";
import { usersAPI } from "../../../../api";
import "./loginForm.scss";

const LogInForm: FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  const isValidEmail = (value: string) => {
    return /^[\w\-.+]+@[a-zA-Z0-9.-]+.[a-zA-z0-9]{2,5}$/.test(value);
  };

  const resetFields = () => {
    setEmail("");
    setPassword("");
  };

  const loginUser = async () => {
    const response = await usersAPI.logIn(email, password);
    console.log(response);
  };
  const validateForm = () => {
    if (!isValidEmail(email)) {
      setErrors((prevValues) => ({
        ...prevValues,
        email: "Please enter a valid email!",
      }));
    } else {
      setErrors((prevValues) => ({
        ...prevValues,
        email: "",
      }));
    }
    console.log(email, password);
    if (loginUser()) {
      resetFields();
      alert("You have succefully logged in");
    }
  };
  return (
    <div className="LoginForm">
      <div className="LoginForm__fields">
        <div className="LoginForm__fields__title">
          <p className="LoginForm__fields__title__signWord">SIGN</p>
          <p className="LoginForm__fields__title__upWord">IN</p>
        </div>

        <label className="LoginForm__fields__label">Email</label>
        <TextField onChange={(value) => setEmail(value)} value={email} />
        <p className="LoginForm__fields__validatorText">{errors.email}</p>

        <label className="LoginForm__fields__label">Password</label>
        <TextField
          type="password"
          onChange={(value) => setPassword(value)}
          value={password}
        />
        <p className="LoginForm__fields__validatorText">{errors.password}</p>

        <div className="LoginForm__fields__button">
          <PrimaryButton text="Sign In" onClick={validateForm} />
        </div>
      </div>
    </div>
  );
};

export default LogInForm;
