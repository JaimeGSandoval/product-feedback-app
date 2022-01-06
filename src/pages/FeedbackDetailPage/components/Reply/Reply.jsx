import { useState } from 'react';
import styles from './_reply.module.scss';

export const Reply = ({ reply, commentAuthor }) => {
  const [activeForm, setActiveForm] = useState(false);
  const firstName = reply.user.name.split(' ')[0].toLowerCase();
  const userImgName = firstName;

  const handleReplyFormToggle = () => setActiveForm(!activeForm);

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleReplyFormToggle(!activeForm);
    }
  };

  return (
    <>
      <div className={styles.replyContainer}>
        <div className={styles.userInfoContainer}>
          <div className={styles.userInfoBox}>
            <div className={styles.imgBox}>
              <picture>
                <source
                  srcSet={
                    require(`../../../../assets/images/user-images/${userImgName}.webp`)
                      .default
                  }
                  type="image/webp"
                />
                <img
                  className={styles.userImg}
                  src={
                    require(`../../../../assets/images/user-images/${userImgName}.jpg`)
                      .default
                  }
                  alt="user"
                />
              </picture>
            </div>

            <div className={styles.userNameBox}>
              <span className={styles.userName}>{reply.user.name}</span>
              <span className={styles.userHandle}>{reply.user.username}</span>
            </div>
          </div>

          <span
            className={styles.replyLink}
            onClick={handleReplyFormToggle}
            onKeyPress={handleKeyPress}
            tabIndex="0"
          >
            Reply
          </span>
        </div>

        <p className={styles.replyText}>
          <span className={styles.commentAuthor}>{`@${commentAuthor} `} </span>
          {reply.content}
        </p>

        <form
          method="POST"
          className={`${styles.replyForm} ${!activeForm && styles.hide}`}
        >
          <textarea className={styles.textArea} rows="8" tabIndex="0" />
          <button className={styles.submitButton} type="submit" tabIndex="0">
            post reply
          </button>
        </form>
      </div>
    </>
  );
};
