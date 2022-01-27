import { useState, createContext } from 'react';
import data from '../data/data.json';

export const UserContext = createContext(data.currentUser);

export const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(data.currentUser);

  const userControls = {
    user,
    setUser,
  };

  return (
    <UserContext.Provider value={userControls}>{children}</UserContext.Provider>
  );
};
