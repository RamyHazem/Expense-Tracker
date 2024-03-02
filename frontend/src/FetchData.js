const fetchData = async (setExpenses) => {
  const expenses_url = "http://127.0.0.1:5000/expenses";
  const response = await fetch(expenses_url)
    .then((res) => res.json())
    .then((data) => setExpenses(data.expenses)); // Set expenses to data.expenses
};

export default fetchData;
