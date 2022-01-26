import { useEffect, useReducer } from 'react';

export const useLocalStorageReducer = (key, defaultVal, reducer) => {
  const [state, dispatch] = useReducer(reducer, defaultVal, () => {
    let requests;

    try {
      requests = JSON.parse(
        window.localStorage.getItem(key) || String(defaultVal)
      );
    } catch (e) {
      requests = defaultVal;
    }

    return requests;
  });

  useEffect(() => {
    window.localStorage.setItem('requests', JSON.stringify(state));
  }, [state]);

  return [state, dispatch];
};
