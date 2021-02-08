import { useState, useEffect, useContext } from "react";
import { useLocation } from "wouter";
import useUser from "../hooks/useUser";
import UserContext from "../context/UserContext";
export default function Register() {
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();
  const setLocation = useLocation()[1];
  const { register } = useUser();
  const reg = useContext(UserContext)[2];

  useEffect(() => {
    if (reg) {
      setLocation("/login");
    }
  }, [reg, setLocation]);

  function handleSubmit(e) {
    e.preventDefault();
    register(username, password);
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
