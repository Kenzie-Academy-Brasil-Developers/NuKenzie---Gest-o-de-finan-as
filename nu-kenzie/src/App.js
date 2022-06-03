import "./App.css";
import Form from "./components/Form";
import List from "./components/List";
import Header from "./components/Header";
import TotalMoney from "./components/TotalMoney";
import { useState } from "react";
import HomePage from "./components/HomePage";

function App() {
  //state lista de movimentações
  const [listTransactions, setListTransactions] = useState([]);
  const [listFilter, setListFilter] = useState([]);

  //função que exclui o item
  const handleList = (item) => {
    const result = listTransactions.filter((elem) => {
      return elem !== item;
    });

    setListTransactions(result);
  };

  //função que filtra (entrada / saída)
  function filter(elem) {
    const result = listFilter.filter((transaction) => {
      return transaction.type === `${elem}`;
    });

    return setListTransactions(result);
  }

  //state para paginação
  const [init, setInit] = useState(false);

  const iniciar = () => {
    setInit(true);
  };

  const sair = () => {
    setInit(false);
  };

  return (
    <div className="App">
      {init ? ( //condicional para paginação
        <>
          <div>
            <Header sair={sair} />
          </div>

          <main className="main">
            <div className="container__aside">
              <Form
                listTransactions={listTransactions}
                setListTransactions={setListTransactions}
                setListFilter={setListFilter}
              />

              <TotalMoney listTransactions={listTransactions} />
            </div>

            <div className="container__list">
              <List
                listTransactions={listTransactions}
                handleList={handleList}
                filter={filter}
                setListTransactions={setListTransactions}
                listFilter={listFilter}
              />
            </div>
          </main>
        </>
      ) : (
        <HomePage iniciar={iniciar} />
      )}
    </div>
  );
}

export default App;
