const upvoteControls = (stateVal, actionVal) => {
  const updatedState = stateVal.map((request) => {
    if (request.requestID === actionVal.requestID && !request.upvoted) {
      return {
        ...request,
        upvoted: !request.upvoted,
        upvotes: request.upvotes + 1,
      };
    }

    if (request.requestID === actionVal.requestID && request.upvoted) {
      return {
        ...request,
        upvoted: !request.upvoted,
        upvotes: request.upvotes - 1,
      };
    }

    return request;
  });

  return updatedState;
};

const ACTIONS = {
  ADD: 'add',
  EDIT: 'edit',
  DELETE: 'delete',
  UPVOTE: 'upvote',
  UPVOTE_SORT: 'upvote-sort',
  ADD_COMMENT: 'add-comment',
  ADD_REPLY: 'add-reply',
};

export const requestReducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.ADD:
      return [...state, action.newRequest];

    case ACTIONS.EDIT:
      return state.map((request) =>
        request.requestID === action.requestID
          ? {
              ...request,
              title: action.title,
              category: action.category,
              description: action.description,
              status: action.status,
            }
          : request
      );

    case ACTIONS.DELETE:
      return state.filter((request) => request.requestID !== action.requestID);

    case ACTIONS.UPVOTE_SORT:
      if (action.sortType === 'most upvotes') {
        return upvoteControls(state, action).sort((a, b) =>
          a.upvotes === b.upvotes ? 0 : b.upvotes - a.upvotes
        );
      }

      if (action.sortType === 'least upvotes') {
        return upvoteControls(state, action).sort((a, b) =>
          a.upvotes === b.upvotes ? 0 : a.upvotes - b.upvotes
        );
      }

      if (action.sortType === 'most comments') {
        return upvoteControls(state, action).sort((a, b) =>
          a.comments.length === b.comments.length
            ? 0
            : b.comments.length - a.comments.length
        );
      }

      if (action.sortType === 'least comments') {
        return upvoteControls(state, action).sort((a, b) =>
          a.comments.length === b.comments.length
            ? 0
            : a.comments.length - b.comments.length
        );
      }

      return [...state];

    case ACTIONS.UPVOTE:
      return upvoteControls(state, action);

    case ACTIONS.ADD_COMMENT:
      return state.map((request) =>
        request.requestID === action.requestID
          ? {
              ...request,
              comments: [...request.comments, action.comment],
            }
          : request
      );

    case ACTIONS.ADD_REPLY:
      return state.map((request) => {
        if (request.requestID === action.requestID) {
          request.comments.map((comment) => {
            if (comment.commentID === action.commentID) {
              comment.replies =
                comment.replies.length > 0
                  ? [...comment.replies, action.reply]
                  : [action.reply];
            }
            return comment;
          });
        }

        return request;
      });

    default:
      return [...state];
  }
};
