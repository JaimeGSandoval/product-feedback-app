import { useState } from 'react';
import data from '../../../../data/data.json';
import { GoBackBtn } from '../../../../components/GoBackBtn';
import { Suggestion } from '../Suggestion/Suggestion';
import { Comment } from '../Comment/Comment';
import styles from './_feedbackDetail.module.scss';

const { productRequests } = data; // simulate retrieving params id from url w/ useParams()

export const FeedbackDetail = () => {
  const [repliesLength, setRepliesLength] = useState(0);
  const commentsLength = productRequests[1].comments.length;

  return (
    <div className={styles.container}>
      <div className={styles.buttonBox}>
        <GoBackBtn styles={styles} />
        <button className={styles.editButton} tabIndex="0">
          edit feedback
        </button>
      </div>

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
    </div>
  );
};
