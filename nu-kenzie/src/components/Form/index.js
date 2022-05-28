function Form ({listTransactions, setListTransactions}) {
  return (
    <div>
      <div>
        <h3>Descrição:</h3>
        <input placeholder="Descrição"></input>
        <p>Ex. Compra de roupas</p>
      </div>

      <div>
        <h3>Valor:</h3>
        <input placeholder="1"></input>
      </div>

      <div>
          <h3>Tipo de valor:</h3>
          <select name="type-value">
              <option value="recebimento">Recebimento</option>
              <option value="gasto">Gasto</option>
          </select>
      </div>

      <div>
          <button>Inserir valor</button>
      </div>

    </div>
  );
}

export default Form;
