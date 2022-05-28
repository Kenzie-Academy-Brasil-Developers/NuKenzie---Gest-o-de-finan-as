import "./App.css";
import Form from "./components/Form";
import List from "./components/List";
import TotalMoney from "./components/TotalMoney";
import { useState } from "react";

function App() {
  const [listTransactions, setListTransactions] = useState([
    { description: "Salário recebido", type: "entrada", value: 2500 },
    { description: "Conta de luz", type: "saída", value: -150 },
  ]);
  
  return (
    <div className="App">

      <div>
        <Form
          listTransactions={listTransactions}
          setListTransactions={setListTransactions}
        />
      </div>

      <div>
        <List listTransactions={listTransactions}/>
      </div>

      <div>
        <TotalMoney listTransactions={listTransactions}/>
      </div>

    </div>
  );
}

export default App;
