import "./style.css";

function TotalMoney({ listTransactions }) {
  const calcEntrada = listTransactions.filter(({type})=> type === "Entrada").reduce((acc, {value})=> acc + value, 0);
  const calcSaida = listTransactions.filter(({type})=> type === "Saída").reduce((acc, {value})=> acc + value, 0);
  const valorTotal = calcEntrada - calcSaida;

  return (
    <div className="total__value--container">
      <div className="text__total--saldo">
        <h2 className="title__total">Valor total:</h2>
        <p className="text__total">O valor é referente ao saldo</p>
      </div>

      <div className="value__total--saldo">
        <h2 className="value__total--reais">R${valorTotal},00</h2>
      </div>
    </div>
  );
}

export default TotalMoney;
