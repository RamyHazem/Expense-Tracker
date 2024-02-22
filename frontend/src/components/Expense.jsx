import React from "react";

const Expense = ({ title, amount, reason }) => {
  return (
    <div>
      <p>{title}</p>
      <p>{amount}</p>
      {reason ?? <p>{reason}</p>}
    </div>
  );
};

export default Expense;
