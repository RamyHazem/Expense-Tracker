const fetchData = async () => {
  const data = await fetch("http://127.0.0.1:5000/expenses").then((res) =>
    res.json()
  );
  return data;
};

export default fetchData;
