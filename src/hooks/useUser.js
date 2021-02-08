import { useContext, useCallback } from "react";
import UserContext from "../context/UserContext";
import loginService from "../services/login";
import registerService from "../services/register";

export default function useUser() {
  const [jwt, setJwt] = useContext(UserContext);
  const setReg = useContext(UserContext)[3];
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
        .then((res) => {
          if (res.status === 201) setReg(true);
        })
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
