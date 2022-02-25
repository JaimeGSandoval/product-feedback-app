import { useState, createContext } from 'react';

export const SortContext = createContext();

export const SortContextProvider = ({ children }) => {
  const storageSortVal = window.sessionStorage.getItem('sortType');
  const [sortType, setSortType] = useState(storageSortVal || 'most upvotes');

  const sortControls = {
    sortType,
    setSortType,
  };

  return (
    <SortContext.Provider value={sortControls}>{children}</SortContext.Provider>
  );
};
