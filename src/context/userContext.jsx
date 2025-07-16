import React, { createContext, useState } from "react";

export const UserContext = createContext();

const UserProvider = ({ children }) => {
  // Mock user for frontend development
  const [user, setUser] = useState({
    id: 1,
    name: "Demo User",
    email: "demo@example.com",
    role: "admin"
  });

  // You can keep updateUser and clearUser if you want to simulate login/logout
  const updateUser = (userData) => {
    setUser(userData);
  };

  const clearUser = () => {
    setUser(null);
  };

  return (
    <UserContext.Provider value={{ user, updateUser, clearUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
