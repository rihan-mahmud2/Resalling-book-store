export const getAuthority = async (email) => {
  const res = await fetch(`http://localhost:5000/users/${email}`, {
    headers: {
      authorization: localStorage.getItem("BookshopToken"),
    },
  });
  const data = res.json();
  return data;
};
