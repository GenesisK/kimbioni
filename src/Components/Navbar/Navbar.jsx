import { useState } from "react";
import "./Navbar.css";
import logo from "../../assets/logoKim.png";
import logoMobile from "../../assets/logoKim.svg";
import AnchorLink from "react-anchor-link-smooth-scroll";
import SocialLinks from "../SocialLinks/SocialLinks";
import menu_open from "../../assets/menu_open.svg";
import menu_close from "../../assets/menu_close.svg";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const openMenu = () => setIsMenuOpen(true);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <>
      <header className="navbar">
        <img src={logo} alt="Logo Kim Bioni" className="nav-logo" />

        <button
          type="button"
          onClick={openMenu}
          className="nav-mobile-open"
          aria-label="Abrir menu"
          aria-expanded={isMenuOpen}
        >
          <img src={menu_open} alt="" aria-hidden="true" />
        </button>

        <SocialLinks className="nav-socials" />
      </header>

      <nav className={`nav-menu${isMenuOpen ? " open" : ""}`}>
        <button
          type="button"
          onClick={closeMenu}
          className="nav-mobile-close"
          aria-label="Fechar menu"
        >
          <img src={menu_close} alt="" aria-hidden="true" />
        </button>
        <img src={logoMobile} alt="Logo Kim Bioni" className="nav-logo-mobile" />
        <ul>
          <li className="hover-animation">
            <AnchorLink onClick={closeMenu} className="anchor-link" href="#about">
              Sobre mim
            </AnchorLink>
          </li>
          <li className="hover-animation">
            <AnchorLink onClick={closeMenu} className="anchor-link" offset="70" href="#projects">
              Projetos
            </AnchorLink>
          </li>
        </ul>
        <SocialLinks className="nav-socials-mobile-menu" />
      </nav>
    </>
  );
};

export default Navbar;
