import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { DispatchContext } from '../../../../context/requests.context';
import styles from './_suggestion.module.scss';
import comment from '../../../../assets/icons/comments.svg';
import arrowUp from '../../../../assets/icons/arrow-up.svg';
import arrowUpWhite from '../../../../assets/icons/arrow-up-white.svg';

export const Suggestion = ({ request, sortType }) => {
  const dispatch = useContext(DispatchContext);

  return (
    <>
      <div className={styles.container}>
        <Link to={`/feedback-detail/${request.requestID}`}>
          <div className={styles.innerContainer}>
            <div className={styles.textBox}>
              <span className={styles.title}>{request.title}</span>
              <p className={styles.description} lang="en">
                {request.description}
              </p>
              <span className={styles.category}>{request.category}</span>
            </div>

            <div className={`${styles.likesBox}`}>
              <span
                className={`${styles.likesTotal} ${
                  request.upvoted && styles.active
                } `}
                onClick={(e) => {
                  e.preventDefault();
                  dispatch({
                    type: 'upvote-sort',
                    requestID: request.requestID,
                    sortType: sortType,
                  });
                }}
                tabIndex="0"
              >
                <img
                  className={styles.likeArrow}
                  src={request.upvoted ? arrowUpWhite : arrowUp}
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
