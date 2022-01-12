import comment from '../../../../assets/icons/comments.svg';
import arrowUp from '../../../../assets/icons/arrow-up.svg';
import styles from './_request.module.scss';

export const Request = ({ request, stateData }) => {
  const { planned, inProgress, live } = stateData;

  const setBorder = () => {
    if (planned) return styles.peachBorder;
    if (inProgress) return styles.purpleBorder;
    return styles.cyanBorder;
  };

  const setBackground = () => {
    if (planned) return styles.peachBg;
    if (inProgress) return styles.purpleBg;
    return styles.cyanBg;
  };

  return (
    <div className={`${styles.container} ${setBorder()}`}>
      <div className={styles.innerContainer}>
        <div className={styles.textBox}>
          <div className={styles.requestTypeBox}>
            <span className={`${styles.circle} ${setBackground()}`}></span>
            <span className={styles.requestTypeText}>
              {planned && 'Planned'}
              {inProgress && 'In Progress'}
              {live && 'Live'}
            </span>
          </div>
          <span className={styles.title}>{request.title}</span>
          <p className={styles.description}>{request.description}</p>
          <span className={styles.category}>{request.category}</span>
        </div>

        <div className={styles.likesBox}>
          <span className={styles.likesTotal} tabIndex="0">
            <img className={styles.likeArrow} src={arrowUp} alt="arrow up" />
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
    </div>
  );
};
