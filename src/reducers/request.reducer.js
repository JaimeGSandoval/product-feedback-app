const ACTIONS = {
  ADD: 'add',
  EDIT: 'edit',
  DELETE: 'delete',
  UPVOTE: 'upvote',
};

export const requestReducer = (state, action) => {
  const updateLocalStorage = (key, stateData) => {
    window.localStorage.setItem(key, JSON.stringify(stateData));
  };

  switch (action.type) {
    case ACTIONS.ADD:
      return console.log('ADD');

    case ACTIONS.EDIT:
      return console.log('EDIT');

    case ACTIONS.DELETE:
      return console.log('DELETE');

    case ACTIONS.UPVOTE:
      return [...state].filter((request) => {
        if (request.requestID === action.requestID && !request.upvoted) {
          const updatedRequest = {
            ...request,
            upvotes: request.upvotes++,
            // upvoted: true, // click event updates the vote count every time, but does not update local storage
            upvoted: (request.upvoted = true), // updates local storage, but updates only on the first click event in the Request.jsx, but works correctly in the Suggestion.jsx component
          };

          updateLocalStorage('requests', state);
          return updatedRequest;
        }

        if (request.requestID === action.requestID && request.upvoted) {
          const updatedRequest = {
            ...request,
            upvotes: request.upvotes--,
            // upvoted: true, // click event updates the vote count every time, but does not update local storage
            upvoted: (request.upvoted = false), // updates local storage, but updates only on the first click event in the Request.jsx, Works as expected in the Suggestion.jsx
          };

          updateLocalStorage('requests', state);
          return updatedRequest;
        }

        return request;
      });

    default:
      return state;
  }
};
