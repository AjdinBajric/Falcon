import { FC } from "react";
import LogInForm from "../../components/organisms/forms/LogInForm/LogInForm";
import "./loginPage.scss";

const LogInPage: FC = () => {
  return (
    <div className="signupPage">
      <LogInForm />
    </div>
  );
};

export default LogInPage;
