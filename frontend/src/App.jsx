import { useState, useEffect } from "react";
import "./App.css";
import Expense from "./components/Expense";
import ExpenseForm from "./components/ExpenseForm";

function App() {
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const expenses_url = "http://127.0.0.1:5000/expenses";
    const response = await fetch(expenses_url)
      .then((res) => res.json())
      .then((data) => setExpenses([data]));
  };

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
      <ExpenseForm />
    </>
  );
}

export default App;
