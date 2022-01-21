import { useState, createContext } from 'react';

export const CategoryContext = createContext();

export const CategoryProvider = ({ children }) => {
  const [category, setCategory] = useState('all');

  const categoryControls = {
    category,
    setCategory,
  };

  return (
    <CategoryContext.Provider value={categoryControls}>
      {children}
    </CategoryContext.Provider>
  );
};
