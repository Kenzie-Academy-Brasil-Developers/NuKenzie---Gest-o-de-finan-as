import "./style.css";
import Trash from "./Trash.png";

function Card({ transaction, handleList }) {
  return (

    <div  className= {transaction.type === "Entrada" ? "card__container" : "card__container2" }>
      <div className="card">
        <h2 className="card__description">{transaction.description}</h2>
        <p className="card__type">{transaction.type}</p>
      </div>
      <div className="aside__card">
        <div className="card__value">
          <h2 className="card__reais">R${transaction.value},00</h2>
        </div>

        <div className="box__trash">
          <img
            className="trash"
            alt="trash"
            onClick={() => {
              handleList(transaction);
            }}
            src={Trash}
          />
        </div>
      </div>
    </div>
  );
}

export default Card;
