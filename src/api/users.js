export const saveUser = async (userInfo) => {
  const res = await //now saving user ino to data base
  fetch("https://reselling-portal-server.vercel.app/users", {
    method: "POST",
    headers: {
      "content-type": "application/json",
      authorization: localStorage.getItem("BookshopToken"),
    },
    body: JSON.stringify(userInfo),
  });

  const user = res.json();
  return user;
};
