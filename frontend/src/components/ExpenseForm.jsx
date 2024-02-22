import React, { useState } from "react";

const ExpenseForm = () => {
  const [titleValue, setTitleValue] = useState("");
  const [amountValue, setAmountValue] = useState(0);
  const [reasonValue, setReasonValue] = useState(undefined);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const createContactUrl = "http://127.0.0.1:5000/create_expense";
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

    const response = await fetch(createContactUrl, options);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title</label>
        <input
          type="text"
          id="title"
          value={titleValue}
          onChange={(e) => {
            setTitleValue(e.target.value);
          }}
        />

        <label htmlFor="amount">Amount</label>
        <input
          type="number"
          id="amount"
          value={amountValue}
          onChange={(e) => {
            setAmountValue(e.target.value);
          }}
        />

        <label htmlFor="reason">Reason</label>
        <input
          type="text"
          id="reason"
          value={reasonValue}
          onChange={(e) => {
            setReasonValue(e.target.value);
          }}
        />
      </form>
      <button>Submit</button>
    </>
  );
};

export default ExpenseForm;
