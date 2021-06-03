import { FC } from "react";
import { Link } from "react-router-dom";
import "./navbarItem.scss";

interface ItemProps {
  text: string;
  url: string;
}

const NavbarItem: FC<ItemProps> = ({ text, url }: ItemProps) => {
  return (
    <>
      <Link to={url} className="item">
        {text}
      </Link>
    </>
  );
};

export default NavbarItem;
