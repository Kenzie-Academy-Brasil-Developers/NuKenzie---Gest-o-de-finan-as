import "./style.css";
import { useState } from "react";
import Real from "../img/Real.png"

function Form({ listTransactions, setListTransactions }) {
  const [description, setDescription] = useState("");
  const [value, setValue] = useState();
  const [type, setType] = useState("");

  function handleTransaction() {
    const transaction = {
      description,
      value,
      type,
    };
    //console.log(transaction)
    setListTransactions([...listTransactions, transaction]);
  }

  return (
    <div className="container__form">
      <div className="description__form--box">
        <h3 className="h3__container--form">Descrição:</h3>
        <input
          className="input__form input__from--description"
          placeholder="Digite aqui sua descrição"
          name="description"
          onChange={(event) => setDescription(event.target.value)}
        ></input>
        <p className="exemplo__form">Ex. Compra de roupas</p>
      </div>

      <section className="value__form--select--box">
        <div className="value__form--box">
          <h3 className="h3__container--form">Valor:</h3>
          <div className="input__value input__form">
          <input
            className="input__form input__from--value"
            placeholder="1"
            name="value"
            type="number"
            onChange={(event) => setValue(parseInt(event.target.value))}
          ></input>
          <img className="img_rs" alt="R$" src={Real}/>
          </div>
        </div>

        <div className="typeValue__form--box">
          <h3 className="h3__container--form">Tipo de valor:</h3>
          <select
            className="select__form"
            name="type"
            onChange={(event) => setType(event.target.value)}
          >
            <option className="select__form-option" value="selecione">
              Selecione
            </option>
            <option className="select__form-option" value="recebimento">
              Recebimento
            </option>
            <option className="select__form-option" value="gasto">
              Gasto
            </option>
          </select>
        </div>
      </section>

      <div className="button__form--box">
        <button onClick={handleTransaction} className="button__form">
          Inserir valor
        </button>
      </div>
    </div>
  );
}

export default Form;
