import { useState, useEffect } from "react";
import "./App.css";
import Expense from "./components/Expense";
import ExpenseForm from "./components/ExpenseForm";
import fetchData from "./FetchData";
import ResetExpenses from "./components/ResetExpenses";

function App() {
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    fetchData(setExpenses);
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
      <ExpenseForm setExpenses={setExpenses} />
      <ResetExpenses />
    </>
  );
}

export default App;
