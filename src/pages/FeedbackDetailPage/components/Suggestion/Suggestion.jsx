import styles from './_suggestion.module.scss';
import comment from '../../../../assets/icons/comments.svg';
import arrowUp from '../../../../assets/icons/arrow-up.svg';

export const Suggestion = ({ productRequest }) => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.innerContainer}>
          <div className={styles.textBox}>
            <span className={styles.title}>{productRequest.title}</span>
            <p className={styles.description}>{productRequest.description}</p>
            <span className={styles.category}>{productRequest.category}</span>
          </div>

          <div className={styles.likesBox}>
            <span className={styles.likesTotal}>
              <img className={styles.likeArrow} src={arrowUp} alt="arrow up" />
              {productRequest.upvotes}
            </span>
            <div className={styles.commentBox}>
              <img
                className={styles.commentBubble}
                src={comment}
                alt="comment bubble"
              />
              <span className={styles.commentsTotal}>
                {productRequest.comments ? productRequest.comments.length : 0}
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
