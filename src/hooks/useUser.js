import { useContext, useCallback } from "react";
import Context from "../context/UserContext";
import loginService from "../services/login";
import registerService from "../services/register";

export default function useUser() {
  const [jwt, setJwt, setReg] = useContext(Context);
  const login = useCallback(
    (username, password) => {
      loginService(username, password)
        .then(setJwt)
        .catch((e) => console.error(e));
    },
    [setJwt]
  );
  const register = useCallback(
    (username, password) => {
      registerService(username, password)
        .then(setReg)
        .catch((e) => console.error(e));
    },
    [setReg]
  );

  const logout = useCallback(() => {
    setJwt(null);
  }, [setJwt]);
  return {
    isLogged: Boolean(jwt),
    login,
    logout,
    register,
  };
}
