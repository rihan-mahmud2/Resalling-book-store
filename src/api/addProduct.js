export const addCommidites = async (product) => {
  const res = await fetch("http://localhost:5000/products", {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(product),
  });

  const result = await res.json();
  return result;
};
