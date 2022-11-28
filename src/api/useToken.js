export const setuseToken = async (user) => {
  const currentUser = {
    email: user?.email,
  };
  const res = await fetch("https://reselling-portal-server.vercel.app/jwt", {
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
