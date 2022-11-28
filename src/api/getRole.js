export const getAuthority = async (email) => {
  const res = await fetch(
    `https://reselling-portal-server.vercel.app/users/${email}`,
    {
      headers: {
        authorization: localStorage.getItem("BookshopToken"),
      },
    }
  );
  const data = res.json();
  return data;
};
