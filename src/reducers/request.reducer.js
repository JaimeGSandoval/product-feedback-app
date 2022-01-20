const ACTIONS = {
  ALL: 'all',
  ADD: 'add',
  EDIT: 'edit',
  DELETE: 'delete',
  SUGGESTION: 'suggestion',
  PLANNED: 'planned',
  LIVE: 'live',
  IN_PROGRESS: 'in-progress',
};

export const requestReducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.ADD:
      return console.log('ADD');

    case ACTIONS.EDIT:
      return console.log('EDIT');

    case ACTIONS.DELETE:
      return console.log('DELETE');

    default:
      return state;
  }
};
