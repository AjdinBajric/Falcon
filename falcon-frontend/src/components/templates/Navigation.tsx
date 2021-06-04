import { FC } from "react";
import { Switch, Route } from "react-router-dom";
import Homepage from "../../pages/Homepage";
import SellPage from "../../pages/SellPage";
import BuyPage from "../../pages/BuyPage";
import SignInPage from "../../pages/SignInPage";
import SignUpPage from "../../pages/SignUpPage/SignUpPage";

const Navigation: FC = () => {
  return (
    <>
      <Switch>
        <Route exact path="/">
          <Homepage />
        </Route>
      </Switch>
      <Switch>
        <Route exact path="/buy">
          <BuyPage />
        </Route>
      </Switch>
      <Switch>
        <Route exact path="/sell">
          <SellPage />
        </Route>
      </Switch>
      <Switch>
        <Route path="/login">
          <SignInPage />
        </Route>
      </Switch>
      <Switch>
        <Route path="/signup">
          <SignUpPage />
        </Route>
      </Switch>
    </>
  );
};

export default Navigation;
