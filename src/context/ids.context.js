import { useState, createContext } from 'react';
import data from '../data/data.json';

export const ProductIDsContext = createContext();
export const CommentsIDsContext = createContext();
export const ReplyIDsContext = createContext();

export const IDsCountProvider = ({ children }) => {
  const productRequestsLength = data.productRequests.length;

  const [productRequestIDCount, setProductRequestIDCount] = useState(
    productRequestsLength
  );
  const productIDControls = {
    productRequestIDCount,
    setProductRequestIDCount,
  };

  console.log(productRequestIDCount);

  let commentsLength = 0;
  data.productRequests.forEach((req) => {
    if (req.comments.length > 0) {
      commentsLength += req.comments.length;
    }
  });
  const [commentsIdCount, setCommentsIDCount] = useState(commentsLength);
  const commentIDControls = {
    commentsIdCount,
    setCommentsIDCount,
  };

  let comments = [];
  data.productRequests.forEach((req) => {
    if (req.comments.length > 0) {
      comments.push(req.comments);
    }
  });

  let repliesLength = 0;
  const flatCommentsArr = comments.flat();
  flatCommentsArr.forEach((comment) => {
    if (comment.replies) repliesLength += comment.replies.length;
  });

  const [replyIDsCount, setReplyIDsCount] = useState(repliesLength);
  const replyIDControls = {
    replyIDsCount,
    setReplyIDsCount,
  };

  return (
    <ProductIDsContext.Provider value={productIDControls}>
      <CommentsIDsContext.Provider value={commentIDControls}>
        <ReplyIDsContext.Provider value={replyIDControls}>
          {children}
        </ReplyIDsContext.Provider>
      </CommentsIDsContext.Provider>
    </ProductIDsContext.Provider>
  );
};
