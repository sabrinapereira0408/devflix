import React from "react";
import Logo from "../../assets/img/Logo.png";
import "./Menu.css";
// import ButtonLink from "../ButtonLink";
import Button from "../Button";

function Menu() {
  return (
    <nav className="Menu">
      <a href="/">
        <img className="Logo" src={Logo} alt="Devflix logo" />
      </a>
      I
      <Button as="a" className="ButtonLink" href="/">
        Novo Video
      </Button>
    </nav>
  );
}

export default Menu;
