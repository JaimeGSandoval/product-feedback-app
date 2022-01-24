import { useState } from 'react';
import comment from '../../../../assets/icons/comments.svg';
import arrowUp from '../../../../assets/icons/arrow-up.svg';
import arrowUpWhite from '../../../../assets/icons/arrow-up-white.svg';
import styles from './_suggestion.module.scss';

export const Suggestion = ({ productRequest }) => {
  const [active, setActive] = useState(false);

  const handleUpVoteClick = () => setActive(!active);
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
            <span
              className={`${styles.likesTotal} ${active && styles.active}`}
              onClick={(e) => {
                e.preventDefault();
                console.log('yo');
                handleUpVoteClick();
              }}
              tabIndex="0"
            >
              <img
                className={styles.likeArrow}
                src={active ? arrowUpWhite : arrowUp}
                alt="arrow up"
              />
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
