// const upvoteControls = (stateVal, )

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
      if (action.sortType === 'most upvotes') {
        return state
          .map((request) => {
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
          })
          .sort((a, b) => (a.upvotes > b.upvotes ? -1 : 1));
      }

      if (action.sortType === 'least upvotes') {
        return state
          .map((request) => {
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
          })
          .sort((a, b) => (a.upvotes > b.upvotes ? 1 : -1));
      }
      if (action.sortType === 'most comments') {
        return state
          .map((request) => {
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
          })
          .sort((a, b) => (a.comments.length > b.comments.length ? -1 : 1));
      }
      if (action.sortType === 'least comments') {
        return state
          .map((request) => {
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
          })
          .sort((a, b) => (a.comments.length > b.comments.length ? 1 : -1));
      }

      return state;

    default:
      return state;
  }
};
