import "./style.css";
import Logo from "../img/Logo.png";

function Header() {
  return (
    <header className="header__header">
      <img className="header__img" alt="logo" src={Logo}></img>
      <button className="header__button">Inicio</button>
    </header>
  );
}

export default Header;
