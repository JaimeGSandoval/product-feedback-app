import { useContext, useRef } from 'react';
import { Link } from 'react-router-dom';
import { DispatchContext } from '../../../../context/requests.context';
import {
  addLikesHoverBgColor,
  removeLikesHoverBgColor,
  addHoverColor,
  removeHoverColor,
} from '../../../../utils/hover';
import comment from '../../../../assets/icons/comments.svg';
import arrowUp from '../../../../assets/icons/arrow-up.svg';
import arrowUpWhite from '../../../../assets/icons/arrow-up-white.svg';
import styles from './_request.module.scss';

export const Request = ({ request, stateData, category }) => {
  const dispatch = useContext(DispatchContext);
  const { planned, inProgress, live } = stateData;
  const titleRef = useRef();
  const handleLikesMouseEnter = (e) => addLikesHoverBgColor(e, styles);
  const handleLikeMouseLeave = (e) => removeLikesHoverBgColor(e, styles);
  const handleSuggestionMouseOver = () => addHoverColor(titleRef, styles);
  const handleSuggestionMouseLeave = () => removeHoverColor(titleRef, styles);

  const handleClick = (e) => {
    e.preventDefault();
    sessionStorage.setItem('roadmapScroll', JSON.stringify(window.scrollY));
    dispatch({
      type: 'upvote',
      requestID: request.requestID,
    });
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' || e.key === 'Return') {
      dispatch({
        type: 'upvote',
        requestID: request.requestID,
      });
    }
  };

  const setBorder = () => {
    if (planned || category === 'planned') return styles.peachBorder;
    if (inProgress || category === 'in-progress') return styles.purpleBorder;
    if (live || category === 'live') return styles.cyanBorder;
  };

  const setBackground = () => {
    if (planned || category === 'planned') return styles.peachBg;
    if (inProgress || category === 'in-progress') return styles.purpleBg;
    if (live || category === 'live') return styles.cyanBg;
  };

  return (
    <div
      className={`${styles.container} ${setBorder()}`}
      onMouseOver={handleSuggestionMouseOver}
      onMouseLeave={handleSuggestionMouseLeave}
    >
      <Link to={`/feedback-detail/${request.requestID}`}>
        <div className={styles.innerContainer}>
          <div className={styles.textBox}>
            <div className={styles.requestTypeBox}>
              <span className={`${styles.circle} ${setBackground()}`}></span>
              <span className={styles.requestTypeText}>
                {(planned || category === 'planned') && 'Planned'}
                {(inProgress || category === 'in-progress') && 'In Progress'}
                {(live || category === 'live') && 'Live'}
              </span>
            </div>
            <span className={styles.title} ref={titleRef} lang="en">
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
                request.upvoted && styles.activeUpvote
              } `}
              onClick={handleClick}
              onMouseEnter={handleLikesMouseEnter}
              onMouseLeave={handleLikeMouseLeave}
              onKeyPress={handleKeyPress}
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
  );
};
