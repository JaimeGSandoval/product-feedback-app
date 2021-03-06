import { upvoteControls } from '../utils/upvoteControls';

const ACTIONS = {
  ADD: 'add',
  EDIT: 'edit',
  DELETE: 'delete',
  UPVOTE: 'upvote',
  UPVOTE_SORT: 'upvote-sort',
  ADD_COMMENT: 'add-comment',
  ADD_REPLY: 'add-reply',
  SORT: 'sort',
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

    case ACTIONS.SORT:
      if (action.sortType === 'most upvotes') {
        return [...state].sort((a, b) =>
          a.upvotes === b.upvotes ? 0 : b.upvotes - a.upvotes
        );
      }

      if (action.sortType === 'least upvotes') {
        return [...state].sort((a, b) =>
          a.upvotes === b.upvotes ? 0 : a.upvotes - b.upvotes
        );
      }

      if (action.sortType === 'most comments') {
        return [...state].sort((a, b) =>
          a.comments.length === b.comments.length
            ? 0
            : b.comments.length - a.comments.length
        );
      }

      if (action.sortType === 'least comments') {
        return [...state].sort((a, b) =>
          a.comments.length === b.comments.length
            ? 0
            : a.comments.length - b.comments.length
        );
      }

      return [...state];

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
        if (request.requestID === action.reply.requestID) {
          request.comments = [...request.comments, action.reply];
        }

        return request;
      });

    default:
      return [...state];
  }
};
