import { createContext, useState } from 'react';

export const FixedHeaderContext = createContext();

export function FixedHeaderProvider({ children }) {
  const [fixedHeight, setFixedHeight] = useState('');

  return (
    <FixedHeaderContext.Provider value={{ fixedHeight, setFixedHeight }}>
      {children}
    </FixedHeaderContext.Provider>
  );
}
