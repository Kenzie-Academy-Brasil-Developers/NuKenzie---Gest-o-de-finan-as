function TotalMoney({ listTransactions }) {
    
  const valorTotal = listTransactions.reduce((valorAnterior, valorAtual) => {
    return valorAnterior + valorAtual.value;
  }, 0);

  return (
    <div>
      <h1>{valorTotal}</h1>
    </div>
  );
}

export default TotalMoney;
