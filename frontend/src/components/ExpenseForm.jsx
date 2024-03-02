import React, { useState } from "react";
import fetchData from "../FetchData";

const ExpenseForm = ({ setExpenses }) => {
  const [titleValue, setTitleValue] = useState("");
  const [amountValue, setAmountValue] = useState(0);
  const [reasonValue, setReasonValue] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const createExpenseURLUrl = "http://127.0.0.1:5000/create_expense";
    const data = {
      titleValue,
      amountValue,
      reasonValue,
    };

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    };

    try {
      const response = await fetch(createExpenseURLUrl, options);
      if (response.ok) {
        fetchData(setExpenses);
        // clear values
        setTitleValue("");
        setAmountValue(0);
        setReasonValue("");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title</label>
        <input
          type="text"
          id="title"
          value={titleValue}
          onChange={(e) => setTitleValue(e.target.value)}
        />

        <label htmlFor="amount">Amount</label>
        <input
          type="number"
          id="amount"
          value={amountValue}
          onChange={(e) => setAmountValue(e.target.value)}
        />

        <label htmlFor="reason">Reason</label>
        <input
          type="text"
          id="reason"
          value={reasonValue}
          onChange={(e) => setReasonValue(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default ExpenseForm;
