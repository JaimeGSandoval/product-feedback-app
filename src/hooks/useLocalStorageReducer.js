import { useReducer, useEffect } from 'react';

// the function passed in as the third parameter is used to establish the default state, which will be the value of 'state' the's being deconstructed in other modules
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
    window.localStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);

  return [state, dispatch];
};