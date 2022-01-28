import { useState, createContext } from 'react';

export const SortContext = createContext();

export const SortContextProvider = ({ children }) => {
  const [sortType, setSortType] = useState('most upvotes');

  const sortControls = {
    sortType,
    setSortType,
  };

  return (
    <SortContext.Provider value={sortControls}>{children}</SortContext.Provider>
  );
};
