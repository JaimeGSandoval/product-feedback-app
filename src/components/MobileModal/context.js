import { useState, createContext } from 'react';

export const RenderTypeContext = createContext();

export const RenderTypeProvider = ({ children }) => {
  const [type, setType] = useState('suggestion');

  const renderControls = {
    type,
    setType,
  };

  console.log(type); // logs out the new value, but does not cause a re-render in the SuggestionList component

  return (
    <RenderTypeContext.Provider value={renderControls}>
      {children}
    </RenderTypeContext.Provider>
  );
};
