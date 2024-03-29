import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { HashLink } from "react-router-hash-link";
import SocialLink from "./sub-components/SocialLink";
import { socialLinksData } from "../../data/data";
import NavLink from "./sub-components/NavLink";
import { navLinks } from "../../data/data";

const NavBar = () => {
  const [activeLink, setActiveLink] = useState<string>("home");
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [expanded, setExpanded] = useState<boolean>(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onUpdateActiveLink = (value: string) => {
    setActiveLink(value);
    setExpanded(false); // Close the Navbar when a link is clicked
  };

  const onContactClick = () => {
    setExpanded(false); // Close the Navbar when the "Contact" button is clicked
  };

  return (
    <Navbar
      expand="lg"
      className={scrolled ? "scrolled" : ""}
      expanded={expanded}
      onSelect={() => setExpanded(false)}
    >
      <Container>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          onClick={() => setExpanded(!expanded)}
        >
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            {navLinks.map((link, index) => (
              <NavLink
                key={index}
                href={link.to}
                text={link.text}
                activeLink={activeLink}
                onUpdateActiveLink={onUpdateActiveLink}
              />
            ))}
          </Nav>
          <span className="navbar-text">
            <SocialLink socialLinks={socialLinksData} />
            <HashLink to="#connect">
              <button className="vvd" onClick={onContactClick}>
                <span>Contact</span>
              </button>
            </HashLink>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
