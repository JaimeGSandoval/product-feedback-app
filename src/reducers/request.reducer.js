const ACTIONS = {
  ADD: 'add',
  EDIT: 'edit',
  DELETE: 'delete',
  GET: 'get',
};

export const requestReducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.ADD:
      return console.log('ADD');

    case ACTIONS.EDIT:
      return console.log('EDIT');

    case ACTIONS.DELETE:
      return console.log('DELETE');

    case ACTIONS.GET:
      return console.log(
        state.productRequests.find((req) => req.requestID === action.id)
      );

    default:
      return state;
  }
};
