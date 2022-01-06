import styles from './_comment.module.scss';
import userImgWEBP from '../../../../assets/images/user-images/elijah.webp';
import userImgJPG from '../../../../assets/images/user-images/elijah.jpg';
import userImgWEBP2 from '../../../../assets/images/user-images/james.webp';
import userImgJPG2 from '../../../../assets/images/user-images/james.jpg';

export const Comment = () => {
  return (
    <div className={styles.commentsInnerContainer}>
      <h1 className={styles.commentsTotal}>4 Comments</h1>
      <div className={styles.commentContainer}>
        <div className={styles.userInfoContainer}>
          <div className={styles.userInfoBox}>
            <div className={styles.imgBox}>
              <picture>
                <source srcSet={userImgWEBP} type="image/webp" />
                <img className={styles.userImg} src={userImgJPG} alt="user" />
              </picture>
            </div>

            <div className={styles.userNameBox}>
              <span className={styles.userName}>elijah moss</span>
              <span className={styles.userHandle}>@hexagon.bestagon</span>
            </div>
          </div>

          <span className={styles.replyText}>Reply</span>
        </div>

        <p className={styles.commentText}>
          Also, please allow styles to be applied based on system preferences. I
          would love to be able to browse Frontend Mentor in the evening after
          my device's dark mode turns on without the bright background it
          currently has.
        </p>
      </div>

      <div className={styles.commentContainer}>
        <div className={styles.userInfoContainer}>
          <div className={styles.userInfoBox}>
            <div className={styles.imgBox}>
              <picture>
                <source srcSet={userImgWEBP2} type="image/webp" />
                <img className={styles.userImg} src={userImgJPG2} alt="user" />
              </picture>
            </div>

            <div className={styles.userNameBox}>
              <span className={styles.userName}>james skinner</span>
              <span className={styles.userHandle}>@hummingbird1</span>
            </div>
          </div>

          <span className={styles.replyText}>Reply</span>
        </div>

        <p className={styles.commentText}>
          Second this! I do a lot of late night coding and reading. Adding a
          dark theme can be great for preventing eye strain and the headaches
          that result. It's also quite a trend with modern apps and apparently
          saves battery life.
        </p>
      </div>
    </div>
  );
};
