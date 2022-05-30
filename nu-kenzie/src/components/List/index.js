import Card from "../Card";
import "./style.css";

function List({ listTransactions }) {
  return (
    <>
      <div className="card__top">
        <h3 className="card__top--title">Resumo Financeiro</h3>
        <div className="card__top--buttons">
          <button className="buttons buttons__todos">Todos</button>
          <button className="buttons buttons__recebimentos">
            Recebimentos
          </button>
          <button className="buttons buttons__gastos">Gastos</button>
        </div>
      </div>
      {listTransactions.map((transaction, index) => (
        <Card transaction={transaction} key={index} />
      ))}
    </>
  );
}

export default List;
