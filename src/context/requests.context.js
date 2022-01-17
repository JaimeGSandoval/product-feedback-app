import { createContext } from 'react';
import { useLocalStorageReducer } from '../hooks/useLocalStorageReducer';
import { requestReducer } from '../reducers/request.reducer';
import defaultRequests from '../data/data.json';

export const DispatchContext = createContext();
export const RequestsContext = createContext();

export const RequestsProvider = ({ children }) => {
  // console.log(defaultRequests);
  const [requests, dispatch] = useLocalStorageReducer(
    'requests',
    defaultRequests,
    requestReducer
  );

  return (
    <RequestsContext.Provider value={requests}>
      <DispatchContext.Provider value={dispatch}>
        {children}
      </DispatchContext.Provider>
    </RequestsContext.Provider>
  );
};
