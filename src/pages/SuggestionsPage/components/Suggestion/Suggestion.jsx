import { Link } from 'react-router-dom';
import styles from './_suggestion.module.scss';
import comment from '../../../../assets/icons/comments.svg';
import arrowUp from '../../../../assets/icons/arrow-up.svg';

export const Suggestion = ({ request }) => {
  return (
    <>
      <div className={styles.container}>
        <Link to={`/feedback-detail/${request.requestID}`}>
          <div className={styles.innerContainer}>
            <div className={styles.textBox}>
              <span className={styles.title}>{request.title}</span>
              <p className={styles.description}>{request.description}</p>
              <span className={styles.category}>{request.category}</span>
            </div>

            <div className={styles.likesBox}>
              <span className={styles.likesTotal} tabIndex="0">
                <img
                  className={styles.likeArrow}
                  src={arrowUp}
                  alt="arrow up"
                />
                {request.upvotes}
              </span>
              <div className={styles.commentBox}>
                <img
                  className={styles.commentBubble}
                  src={comment}
                  alt="comment bubble"
                />
                <span className={styles.commentsTotal}>
                  {request.comments ? request.comments.length : 0}
                </span>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
};
