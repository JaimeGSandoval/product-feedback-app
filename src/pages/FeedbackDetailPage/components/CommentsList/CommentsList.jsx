import { useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { RequestsContext } from '../../../../context/requests.context';
import { IDContext } from '../../context/ID.context';
import { GoBackBtn } from '../../../../components/GoBackBtn';
import { Suggestion } from '../Suggestion';
import { Comment } from '../Comment';
import { EditFeedback } from '../EditFeedback';
import { CommentForm } from './CommentForm';
import styles from './_commentsList.module.scss';

export const CommentsList = ({ requestID }) => {
  const [isEditing, setIsEditing] = useState(false);
  const requestsContext = useContext(RequestsContext);
  const navigate = useNavigate();
  const goBack = () => navigate(-1);

  const idContext = useContext(IDContext);
  const { setCurrentRequestID } = idContext;

  useEffect(() => {
    setCurrentRequestID(requestID);
  }, [setCurrentRequestID, requestID]);

  const productRequest = requestsContext.find(
    (req) => req.requestID === requestID
  );

  if (!productRequest) return null;

  const allComments = productRequest.comments;

  const parentComments = allComments.filter(
    (comment) => comment.parentID === null
  );

  const commentsLength = productRequest.comments.length;

  const handleEditClick = () => {
    setIsEditing(!isEditing);
  };

  return (
    <>
      {isEditing && (
        <EditFeedback
          productRequest={productRequest}
          setIsEditing={setIsEditing}
          isEditing={isEditing}
        />
      )}
      {!isEditing && (
        <>
          <div className={styles.buttonBox}>
            <GoBackBtn styles={styles} goBack={goBack} />
            <button
              className={styles.editButton}
              onClick={handleEditClick}
              tabIndex="0"
            >
              edit feedback
            </button>
          </div>
          <main>
            <section className={styles.outerContainer}>
              <div className={styles.innerContainer}>
                <Suggestion request={productRequest} />
              </div>
              <section className={styles.commentsContainer}>
                <div className={styles.commentsInnerContainer}>
                  <h1 className={styles.commentsTotal}>
                    {commentsLength > 1 || commentsLength === 0
                      ? `${commentsLength} Comments`
                      : `${commentsLength} Comment`}
                  </h1>
                  {parentComments.map((comment, index) => (
                    <Comment
                      key={comment.commentID}
                      comment={comment}
                      commentsLength={commentsLength}
                      allComments={allComments}
                      index={index}
                    />
                  ))}
                </div>
              </section>
              <CommentForm styles={styles} requestID={requestID} />
            </section>
          </main>
        </>
      )}
    </>
  );
};
