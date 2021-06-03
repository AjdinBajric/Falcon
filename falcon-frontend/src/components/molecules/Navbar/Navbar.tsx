import { FC } from "react";
import NavbarItem from "../../atoms/NavbarItem/NavbarItem";
import PrimaryButton from "../../atoms/PrimaryButton/PrimaryButton";
import SecondaryButton from "../../atoms/SecondaryButton/SecondaryButton";
import Logo from "../../atoms/Logo/Logo";
import "./navbar.scss";

const Navbar: FC = () => {
  return (
    <div className="navbar">
      <Logo />
      <div className="navbarlist">
        <NavbarItem url="/" text="Home" />
        <NavbarItem url="/buy" text="Buy" />
        <NavbarItem url="/sell" text="Sell" />
        <PrimaryButton text="Log In" />
        <SecondaryButton text="Sign Up" />
      </div>
    </div>
  );
};

export default Navbar;
