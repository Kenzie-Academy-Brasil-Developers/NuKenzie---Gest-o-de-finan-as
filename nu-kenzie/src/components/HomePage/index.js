import "./style.css";
import Logo from "../img/Logo.png";
import Ellipse1 from "../img/Ellipse1.png";
import Ellipse2 from "../img/Ellipse2.png";
import Ellipse3 from "../img/Ellipse3.png";
import Retangle from "../img/Retangle.png";
import Retangle2 from "../img/Retangle2.png";
import Rectangle62 from "../img/Rectangle62.png";
import Rectangle64 from "../img/Rectangle64.png";
import Vector from "../img/Vector.png";

function HomePage({ iniciar }) {
  return (
    <div className="container__home">
      <div className="box1">
        <img alt="logo" src={Logo} />
        <h1 className="box1__title">Centralize o controle das suas finanças</h1>
        <p className="box1__subtitle">de forma rápida e segura</p>
        <button className="box1__button" onClick={iniciar}>
          Iniciar
        </button>
      </div>

      <div className="box2">
        <img className="elipse1" alt="elipse" src={Ellipse1} />
        <img className="elipse2" alt="elipse" src={Ellipse2} />
        <img className="elipse3" alt="elipse" src={Ellipse3} />
        <img className="retangle" alt="retangle" src={Retangle} />
        <img className="retangle2" alt="retangle2" src={Retangle2} />
        <img className="retangle2-1" alt="retangle2" src={Retangle2} />
        <img className="retangle2-2" alt="retangle2" src={Retangle2} />
        <img className="retangle2-3" alt="retangle2" src={Retangle2} />
        <img className="retangle2-4" alt="retangle2" src={Retangle2} />
        <img className="retangle2-5" alt="retangle2" src={Retangle2} />
        <img className="retangle62" alt="retangle62" src={Rectangle62} />
        <img className="retangle64" alt="retangle62" src={Rectangle64} />
        <img className="vector" alt="vector" src={Vector} />
      </div>
    </div>
  );
}

export default HomePage;
