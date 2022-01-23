import { useState, createContext } from 'react';

export const SortContext = createContext();

export const SortContextProvider = ({ children }) => {
  const [sortType, setSortType] = useState(null);

  const sortControls = {
    sortType,
    setSortType,
  };

  console.log(sortType);

  return (
    <SortContext.Provider value={sortControls}>{children}</SortContext.Provider>
  );
};
