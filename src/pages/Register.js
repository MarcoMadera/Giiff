import { useState, useEffect } from "react";
import { useLocation } from "wouter";
import useUser from "../hooks/useUser";

export default function Register() {
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();
  const setLocation = useLocation()[1];
  const { register, isRegister } = useUser();

  useEffect(() => {
    if (isRegister) {
      setLocation("/login");
    }
  }, [isRegister, setLocation]);

  function handleSubmit(e) {
    e.preventDefault();
    register();
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
