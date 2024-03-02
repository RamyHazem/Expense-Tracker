import React from "react";

const ResetExpenses = () => {
  const resetExpenses = async () => {
    const resetExpensesUrl = "http://127.0.0.1:5000/reset_expenses";

    try {
      const response = await fetch(resetExpensesUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });
    } catch (error) {
      console.error("Error resetting expenses:", error);
    }
  };
  return <button onClick={resetExpenses}>ResetExpenses</button>;
};

export default ResetExpenses;
