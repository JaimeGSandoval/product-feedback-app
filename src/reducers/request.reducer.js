const ACTIONS = {
  ADD: 'add',
  EDIT: 'edit',
  DELETE: 'delete',
  UPVOTE: 'upvote',
};

export const requestReducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.ADD:
      return [...state, action.newRequest];

    case ACTIONS.EDIT:
      return console.log('EDIT');

    case ACTIONS.DELETE:
      return console.log('DELETE');

    case ACTIONS.UPVOTE:
      return state.map((request) => {
        if (request.requestID === action.requestID && !request.upvoted) {
          return {
            ...request,
            upvoted: !request.upvoted,
            upvotes: request.upvotes + 1,
          };
        }

        if (request.requestID === action.requestID && request.upvoted) {
          return {
            ...request,
            upvoted: !request.upvoted,
            upvotes: request.upvotes - 1,
          };
        }

        return request;
      });

    default:
      return state;
  }
};
