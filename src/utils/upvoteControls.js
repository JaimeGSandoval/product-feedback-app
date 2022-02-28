export const upvoteControls = (stateVal, actionVal) => {
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
