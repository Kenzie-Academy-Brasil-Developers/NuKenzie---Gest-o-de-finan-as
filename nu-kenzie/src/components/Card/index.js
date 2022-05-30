import "./style.css";

function Card({ transaction }) {
  return (
    <div className="card__container">
      <div className="card">
        <h2 className="card__description">{transaction.description}</h2>
        <p className="card__type">{transaction.type}</p>
      </div>

      <div className="card__value">
        <h2 className="card__reais">R${transaction.value},00</h2>
      </div>
    </div>
  );
}

export default Card;
