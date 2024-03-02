import React from "react";

const Expense = ({ title, amount, reason }) => {
  return (
    <div className="expense">
      <p>{title}</p>
      <p>{amount}</p>
      {reason ?? <p>{reason}</p>}
    </div>
  );
};

export default Expense;
