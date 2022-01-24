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
            upvoted: (request.upvoted = true),
          };

          updateLocalStorage('requests', state);
          return updatedRequest;
        }

        if (request.requestID === action.requestID && request.upvoted) {
          const updatedRequest = {
            ...request,
            upvotes: request.upvotes--,
            upvoted: (request.upvoted = false),
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
