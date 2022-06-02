import "./App.css";
import Form from "./components/Form";
import List from "./components/List";
import Header from "./components/Header";
import TotalMoney from "./components/TotalMoney";
import { useState } from "react";
import HomePage from "./components/HomePage";

function App() {
  const [listTransactions, setListTransactions] = useState([]);

  const addMovement = (newMovement) => {
    const list = [...listTransactions, newMovement];
    setListTransactions(list);
  };

  const handleList = (item) => {
    const result = listTransactions.filter((elem) => {
      return elem !== item;
    });

    setListTransactions(result);
  };

  function filterEntrada(elem) {
    const result = listTransactions.filter((transaction) => {
      return transaction.type === `${elem}`;
    });

    return setListTransactions(result);
  }

  const [init, setInit] = useState(false);

  const iniciar = () => {
    setInit(true);
  };

  const sair = () => {
    setInit(false);
  };

  return (
    <div className="App">
      {init ? (
        <>
          <div>
            <Header sair={sair} />
          </div>

          <main className="main">
            <div className="container__aside">
              <Form
                listTransactions={listTransactions}
                setListTransactions={setListTransactions}
                addMovement={addMovement}
              />

              <TotalMoney listTransactions={listTransactions} />
            </div>

            <div className="container__list">
              <List
                listTransactions={listTransactions}
                handleList={handleList}
                filter={filterEntrada}
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
