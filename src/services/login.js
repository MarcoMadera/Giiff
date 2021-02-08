const ENDPOINT = "http://localhost:8000";

export default function login(username, password) {
  return fetch(`${ENDPOINT}/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      authorization: "Bearer: my_secret_key",
    },
    body: JSON.stringify({ username, password }),
  })
    .then((res) => {
      if (!res.ok) {
        throw new Error("Response is NOT ok");
      }
      return res.json();
    })
    .then((res) => {
      const { token } = res;
      return token;
    });
}
