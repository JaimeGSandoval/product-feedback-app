import { useContext, useRef } from 'react';
import { DispatchContext } from '../../../../context/requests.context';
import {
  addLikesHoverBgColor,
  removeLikesHoverBgColor,
} from '../../../../utils/hover';
import comment from '../../../../assets/icons/comments.svg';
import arrowUp from '../../../../assets/icons/arrow-up.svg';
import arrowUpWhite from '../../../../assets/icons/arrow-up-white.svg';
import styles from './_feedbackSuggestion.module.scss';

export const FeedbackSuggestion = ({ request, sortType, sort }) => {
  const dispatch = useContext(DispatchContext);
  const titleRef = useRef();
  const storageSortVal = sessionStorage.getItem('sortType');
  const handleLikesMouseEnter = (e) => addLikesHoverBgColor(e, styles);
  const handleLikeMouseLeave = (e) => removeLikesHoverBgColor(e, styles);

  const handleLikesClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    dispatch({
      type: sort === 'upvote-sort' ? 'upvote-sort' : 'upvote',
      requestID: request.requestID,
      sortType: storageSortVal || 'most upvotes',
    });
  };

  return (
    <>
      <div className={styles.container}>
        <div className={styles.innerContainer}>
          <div className={styles.textBox}>
            <span className={styles.title} ref={titleRef}>
              {request.title}
            </span>
            <p className={styles.description} lang="en">
              {request.description}
            </p>
            <span className={styles.category}>{request.category}</span>
          </div>

          <div className={styles.likesBox}>
            <span
              className={`${styles.likesTotal} ${
                request.upvoted && styles.active
              }`}
              onClick={handleLikesClick}
              onMouseEnter={handleLikesMouseEnter}
              onMouseLeave={handleLikeMouseLeave}
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
                className={`${styles.commentBubble} ${
                  request.comments.length > 9 && styles.customPositionRight
                }`}
                src={comment}
                alt="comment bubble"
              />
              <span className={styles.commentsTotal}>
                {request.comments ? request.comments.length : 0}
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
