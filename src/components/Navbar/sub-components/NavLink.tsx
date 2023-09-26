import React from "react";
import { Nav } from "react-bootstrap";

interface Props {
  href: string;
  text: string;
  activeLink: string;
  onUpdateActiveLink: (value: string) => void;
}

const NavLink = ({ href, text, activeLink, onUpdateActiveLink }: Props) => {
  const handleClick = () => {
    onUpdateActiveLink(text.toLocaleLowerCase());
  };

  return (
    <React.Fragment>
      <Nav.Link
        href={href}
        className={
          activeLink === text.toLocaleLowerCase()
            ? "active navbar-link"
            : "navbar-link"
        }
        onClick={handleClick}
      >
        {text}
      </Nav.Link>
    </React.Fragment>
  );
};

export default NavLink;
