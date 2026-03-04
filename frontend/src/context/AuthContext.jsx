import { createContext, useContext, useState, useCallback } from "react";
import * as authAPI from "../api/auth.api";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = useCallback(async (data) => {
    const res = await authAPI.login(data);
    setUser(res.user);
  }, []);

  const register = useCallback(async (data) => {
    const res = await authAPI.register(data);
    setUser(res.user);
  }, []);

  const logout = useCallback(async () => {
    await authAPI.logout();
    setUser(null);
  }, []);

  return (
    <AuthContext.Provider value={{ user, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
