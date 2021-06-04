import { FC } from "react";
import SignUpForm from "../../components/organisms/forms/SignUpForm/SignUpForm";
import "./signupPage.scss";

const SignUpPage: FC = () => {
  return (
    <div className="signupPage">
      <SignUpForm />
    </div>
  );
};

export default SignUpPage;
