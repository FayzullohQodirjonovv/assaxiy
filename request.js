let BASE_URL = "https://67e5756718194932a58626bd.mockapi.io/todo/";
export const useFetch = () => {
  const request = ({ url, method, data }) => {
    return fetch(`${BASE_URL}/${url}`, {
      method,
      headers: {
        "Content-Type": "application/json",
      },
      body: data, 
    })
      .then((data) => data.json())
      .catch((err) => console.log(err));
  };
  return request;
};
