import { useState, useEffect } from "react";
import "./App.css";
import fetchData from "./FetchData";
import Expense from "./Expense";

function App() {
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    fetchData().then((res) => setExpenses((prevExp) => [...prevExp, res]));
  }, []);

  return (
    <>
      <h1>Expenses:</h1>
      {expenses.map((expense) => (
        <Expense
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          reason={expense.reason}
        />
      ))}
    </>
  );
}

export default App;
