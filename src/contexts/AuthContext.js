"use client";
import { createContext, useState, useEffect } from "react";
import { Platform, Token, User } from "@/api";


const tokenCtrl = new Token();
const userCtrl = new User();
const platformCtrl = new Platform();

export const AuthContext = createContext();

export function AuthProvider(props) {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  const [loading, setLoading] = useState(true);
  const [menuItems, setMenuItems] = useState(null);
  const { children } = props;
 
  useEffect(() => {
    (async () => {
      const token = tokenCtrl.getToken();
      loadPlatforms();
      if (!token) {
        logout();
        setLoading(false);
        return;
      }

      if (tokenCtrl.hasExpired(token)) {
        logout();
      } else {
        await login(token);
      }
    })();
  }, []);

  const loadPlatforms = async () => {
    try {
      const response = await platformCtrl.getAll();
      setMenuItems(response.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  const login = async (token) => {
    try {
      tokenCtrl.setToken(token);
      const response = await userCtrl.getMe();
      setUser(response);
      localStorage.setItem("user", JSON.stringify(response));
      setToken(token);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  const logout = () => {
    tokenCtrl.removeToken();
    localStorage.removeItem("PaymentProcess");
    setUser(null);
    setToken(null);
  };

  const updatedUser = (key, value) => {
    setUser({
      ...user,
      [key]: value,
    });
  };
  const data = {
    accessToken: token,
    user,
    login,
    logout,
    updatedUser,
    menuItems,
  };
  if (loading) {
    return null;
  }
  return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>;
}
