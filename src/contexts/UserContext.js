import { createContext } from "react";

import useLocalStorage from "../hooks/useLocalStorage";

const UserContext = createContext();
export default UserContext;

export function UserProvider({ children }) {
  const [token, setToken] = useLocalStorage("token", null);

  return (
    <UserContext.Provider value={{ token, setToken }}>
      {children}
    </UserContext.Provider>
  );
}