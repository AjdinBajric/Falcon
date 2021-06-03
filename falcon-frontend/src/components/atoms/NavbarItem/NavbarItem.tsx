import React, { FC } from "react";
import "./navbarItem.scss";

interface ItemProps {
  text: string;
}

const NavbarItem: FC<ItemProps> = ({ text }: ItemProps) => {
  return (
    <>
      <div className="item">{text}</div>
    </>
  );
};

export default NavbarItem;
