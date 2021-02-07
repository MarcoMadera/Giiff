import { useState, createContext } from "react";
const Context = createContext();

export function UserContextProvider({ children }) {
  const [jwt, setJwt] = useState(null);
  const [reg, setReg] = useState(null);

  return (
    <Context.Provider value={[jwt, setJwt, reg, setReg]}>
      {children}
    </Context.Provider>
  );
}

export default Context;
