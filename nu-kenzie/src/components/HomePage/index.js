import "./style.css";
import Logo2 from "./Logo2.png";
import Element from "./Element.png";

function HomePage({ iniciar }) {
  return (
    <div className="container__home">
      <div className="box1">
        <img alt="logo" src={Logo2} />
        <h1 className="box1__title">Centralize o controle das suas finanças</h1>
        <p className="box1__subtitle">de forma rápida e segura</p>
        <button className="box1__button" onClick={iniciar}>
          Iniciar
        </button>
      </div>

      <div className="box2">
        <img className="elements" alt="element" src={Element} />
      </div>
    </div>
  );
}

export default HomePage;
