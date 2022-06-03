import "./style.css";
import Logo from "./Logo.png";

function Header({ sair }) {
  return (
    <header className="header__header">
      <img className="header__img" alt="logo" src={Logo}></img>
      <button onClick={sair} className="header__button">
        Inicio
      </button>
    </header>
  );
}

export default Header;
