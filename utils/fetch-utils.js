export const postData = async (data, typeUrl) => {
  const res = await fetch(typeUrl, {
    method: "POST",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
    body: JSON.stringify({ ...data }),
  });
  return res.json();
};
