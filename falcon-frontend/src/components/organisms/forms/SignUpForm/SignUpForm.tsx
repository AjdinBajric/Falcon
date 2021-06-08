import { FC, useState, useEffect } from "react";
import TextField from "../../../atoms/InputFields/TextField";
import PrimaryButton from "../../../atoms/PrimaryButton/PrimaryButton";
import { usersAPI } from "../../../../api";
import "./signupform.scss";

const SignUpForm: FC = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmationPassword, setConfirmationPassword] = useState("");
  const [allUsers, setAllUsers] = useState();

  const [errors, setErrors] = useState({
    email: "",
    password: "",
    confirmationPassword: "",
  });

  const isValidEmail = (value: string) => {
    return /^[\w\-.+]+@[a-zA-Z0-9.-]+.[a-zA-z0-9]{2,5}$/.test(value);
  };

  const getAllUsers = async () => {
    const response = await usersAPI.getAllUsers();
    setAllUsers(response);
  };
  useEffect(() => {
    getAllUsers();
  }, []);

  console.log("All users", allUsers);

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

    if (password !== confirmationPassword) {
      setErrors((prevValues) => ({
        ...prevValues,
        password: "Please enter the same passwords.",
        confirmationPassword: "Please enter the same passwords.",
      }));
    } else {
      setErrors((prevValues) => ({
        ...prevValues,
        password: "",
        confirmationPassword: "",
      }));
    }

    if (password.length < 6) {
      setErrors((prevValues) => ({
        ...prevValues,
        password: "Password must be longer that 5 characters!",
      }));
    } else {
      setErrors((prevValues) => ({
        ...prevValues,
        password: "",
      }));
    }
  };
  return (
    <div className="form">
      <div className="fields">
        <div className="title">
          <p className="signWord">SIGN</p>
          <p className="upWord">UP</p>
        </div>

        <label className="label">Full Name</label>
        <TextField onChange={(value) => setName(value)} />

        <label className="label">Email</label>
        <TextField onChange={(value) => setEmail(value)} />
        <p className="validatorText">{errors.email}</p>

        <label className="label">Password</label>
        <TextField type="password" onChange={(value) => setPassword(value)} />
        <p className="validatorText">{errors.password}</p>

        <label className="label">Confirm password</label>
        <TextField
          type="password"
          onChange={(value) => setConfirmationPassword(value)}
        />
        <p className="validatorText">{errors.confirmationPassword}</p>

        <div className="button">
          <PrimaryButton text="Sign Up" onClick={validateForm} />
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
