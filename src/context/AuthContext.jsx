import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth must be used within AuthProvider');
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const savedUser = localStorage.getItem('user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
    setLoading(false);
  }, []);

const login = (email, password) => {
    // Fake auth
    if (email === 'admin@admin.com' && password === 'admin') {
      const adminUser = { id: 1, email, role: 'admin', name: 'Admin' };
      localStorage.setItem('user', JSON.stringify(adminUser));
      setUser(adminUser);
      return { success: true };
    } else if (email && password) {
      const clientUser = { id: Math.random(), email, role: 'client', name: email.split('@')[0] };
      localStorage.setItem('user', JSON.stringify(clientUser));
      setUser(clientUser);
      return { success: true };
    }
    return { success: false, error: 'Неверные данные' };
  };

  const register = (name, email, phone, password) => {
    // Fake register - reuse login logic
    const result = login(email, password);
    if (result.success) {
      const user = JSON.parse(localStorage.getItem('user'));
      localStorage.setItem('user', JSON.stringify({ ...user, name }));
      setUser({ ...user, name });
    }
    return result;
  };

  const logout = () => {
    localStorage.removeItem('user');
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

