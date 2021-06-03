import { FC } from "react";
import NavbarItem from "../../atoms/NavbarItem/NavbarItem";
import "./navbar.scss";

const Navbar: FC = () => {
  return (
    <div className="navbar">
      <NavbarItem text="Home" />
      <NavbarItem text="Buy" />
      <NavbarItem text="Sell" />
    </div>
  );
};

export default Navbar;
