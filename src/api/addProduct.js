export const addCommidites = async (product) => {
  const res = await fetch("http://localhost:5000/product", {
    method: "POST",
    headers: {
      "content-type": "application/json",
      authorization: localStorage.getItem("BookshopToken"),
    },
    body: JSON.stringify(product),
  });

  const result = await res.json();
  return result;
};
