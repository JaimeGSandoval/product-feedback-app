import { useState, createContext } from 'react';

export const CategoryContext = createContext();

export const CategoryProvider = ({ children }) => {
  const categoryType = sessionStorage.getItem('category');
  const [category, setCategory] = useState(categoryType || 'all');

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
