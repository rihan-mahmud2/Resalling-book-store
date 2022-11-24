export const setuseToken = async (user) => {
  const currentUser = {
    email: user?.email,
  };
  const res = await fetch("http://localhost:5000/jwt", {
    method: "PUT",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(currentUser),
  });

  const data = res.json();
  data.then((response) => {
    localStorage.setItem("BookshopToken", response.token);
  });

  //   saving the jwt token
};
