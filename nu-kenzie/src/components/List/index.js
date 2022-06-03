import Card from "../Card";
import "./style.css";

function List({
  listTransactions,
  handleList,
  filter,
  setListTransactions,
  listFilter,
}) {
  return (
    <>
      {listTransactions.length > 0 ? (
        <>
          <div className="card__top">
            <h3 className="card__top--title">Resumo Financeiro</h3>

            <div className="card__top--buttons">
              <button
                onClick={() => {
                  setListTransactions(listFilter);
                }}
                className="buttons buttons__todos"
              >
                Todos
              </button>
              <button
                onClick={() => {
                  filter("Entrada");
                }}
                className="buttons buttons__recebimentos"
              >
                Recebimentos
              </button>
              <button
                onClick={() => {
                  filter("Saída");
                }}
                className="buttons buttons__gastos"
              >
                Gastos
              </button>
            </div>
          </div>

          <div className="cards__container">
            {listTransactions.map((transaction, index) => (
              <Card
                transaction={transaction}
                key={index}
                handleList={handleList}
              />
            ))}
          </div>
        </>
      ) : (
        <div className="landingPage">
          <h3>Você ainda não possui nenhum lançamento</h3>

          <div className="landing">
            <div className="landing__content"></div>
          </div>
          <div className="landing">
            <div className="landing__content"></div>
          </div>
          <div className="landing">
            <div className="landing__content"></div>
          </div>
        </div>
      )}
    </>
  );
}

export default List;
