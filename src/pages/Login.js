import { useEffect, useState } from "react";
import { useLocation } from "wouter";
import useUser from "../hooks/useUser";
export default function Login() {
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();
  const setLocation = useLocation()[1];
  const { login, isLogged } = useUser();

  useEffect(() => {
    if (isLogged) {
      setLocation("/");
    }
  }, [isLogged, setLocation]);

  function handleSubmit(e) {
    e.preventDefault();
    login();
  }
  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="username"
        value={username}
        onChange={(e) => setUserName(e.target.value)}
      />
      <input
        type="password"
        placeholder="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button>Login</button>
    </form>
  );
}
