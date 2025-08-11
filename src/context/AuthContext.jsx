import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';
import api, { getToken, setToken, clearToken } from '../services/api';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const bootstrap = async () => {
      const token = getToken();
      if (token) {
        const [data] = await api.getMe();
        if (data?.user) setUser(data.user);
      }
      setLoading(false);
    };
    bootstrap();
  }, []);

  const login = async (email, password) => {
    // Try login; on CORS/network hiccup, warm up + retry once
    let [data, err] = await api.login(email, password);
    if (err && !data) {
      await api.getApiStatus();
      [data, err] = await api.login(email, password);
    }
    if (data?.token) setToken(data.token);
    if (data?.user) setUser(data.user);
    return [data, err];
  };

  const signup = async (name, email, password) => {
    const [data, err] = await api.signup(name, email, password);
    if (data?.token) setToken(data.token);
    if (data?.user) setUser(data.user);
    return [data, err];
  };

  const logout = () => {
    clearToken();
    setUser(null);
  };

  const value = useMemo(() => ({ user, loading, login, signup, logout }), [user, loading]);
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => useContext(AuthContext);


