import { useState, createContext } from 'react';

export const IDContext = createContext();

export const IDContextProvider = ({ children }) => {
  const [currentRequestID, setCurrentRequestID] = useState('');
  const [commentIDContext, setCommentIDContext] = useState('');

  const controls = {
    currentRequestID,
    setCurrentRequestID,
    commentIDContext,
    setCommentIDContext,
  };

  return <IDContext.Provider value={controls}>{children}</IDContext.Provider>;
};
