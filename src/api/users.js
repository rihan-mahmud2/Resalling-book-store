export const saveUser = async (userInfo) => {
  const res = await //now saving user ino to data base
  fetch("http://localhost:5000/users", {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(userInfo),
  });

  const user = res.json();
  return user;
};
