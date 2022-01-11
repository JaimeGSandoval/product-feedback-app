import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { GoBackBtn } from '../../../../components/GoBackBtn';
import { Suggestion } from '../Suggestion';
import { Comment } from '../Comment';
import { EditFeedback } from '../EditFeedback';
import data from '../../../../data/data.json';
import styles from './_commentsList.module.scss';

const { productRequests } = data; // simulate retrieving params id from url w/ useParams()

export const CommentsList = () => {
  const [repliesLength, setRepliesLength] = useState(0);
  const [isEditing, setIsEditing] = useState(false);
  const commentsLength = productRequests[1].comments.length;

  const navigate = useNavigate();
  const goBack = () => navigate(-1);

  const handleEditClick = () => {
    setIsEditing(!isEditing);
  };

  return (
    <>
      {isEditing && (
        <EditFeedback
          productRequest={productRequests[1]}
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
                <Suggestion productRequest={productRequests[1]} />
              </div>
              <section className={styles.commentsContainer}>
                <div className={styles.commentsInnerContainer}>
                  <h1 className={styles.commentsTotal}>
                    {commentsLength + repliesLength} Comments
                  </h1>
                  {productRequests[1].comments.map((comment) => (
                    <Comment
                      comment={comment}
                      commentsLength={commentsLength}
                      setRepliesLength={setRepliesLength}
                      key={comment.commentID}
                    />
                  ))}
                </div>
              </section>
            </section>
          </main>
        </>
      )}
    </>
  );
};
