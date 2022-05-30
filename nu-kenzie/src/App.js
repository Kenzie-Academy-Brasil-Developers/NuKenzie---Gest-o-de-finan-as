import "./App.css";
import Form from "./components/Form";
import List from "./components/List";
import Header from "./components/Header";
import TotalMoney from "./components/TotalMoney";
import { useState } from "react";

function App() {
  const [listTransactions, setListTransactions] = useState([
    { description: "Salário recebido", type: "Entrada", value: 2500 },
    { description: "Conta de luz", type: "Saída", value: -150 },
  ]);

  const addMovement = (newMovement) => {
    const list = [...listTransactions, newMovement];
    setListTransactions(list);
  };

  return (
    <div className="App">
      <div>
        <Header />
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
          <List listTransactions={listTransactions} />
        </div>
      </main>
    </div>
  );
}

export default App;
