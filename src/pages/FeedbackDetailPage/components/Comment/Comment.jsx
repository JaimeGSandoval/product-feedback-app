import { useState, useEffect } from 'react';
import { Reply } from '../Reply/Reply';
import styles from './_comment.module.scss';

export const Comment = ({ comment, commentsLength, setRepliesLength }) => {
  const [activeForm, setActiveForm] = useState(false);
  const firstName = comment.user.name.split(' ')[0].toLowerCase();
  const userImgName = firstName;

  useEffect(() => {
    if (comment.replies) {
      setRepliesLength(comment.replies.length);
    }
  }, [comment.replies, setRepliesLength]);

  const handleReplyFormToggle = (e) => {
    setActiveForm(!activeForm);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleReplyFormToggle(!activeForm);
    }
  };

  return (
    <>
      <div className={styles.commentContainer}>
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
              <span className={styles.userName}>{comment.user.name}</span>
              <span
                className={styles.userHandle}
              >{`@${comment.user.username}`}</span>
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

        <p className={styles.commentText}>{comment.content}</p>

        <form
          method="POST"
          className={`${styles.replyForm} ${!activeForm && styles.hide}`}
        >
          <textarea className={styles.textArea} rows="8" tabIndex="0" />
          <button className={styles.submitButton} type="submit">
            post reply
          </button>
        </form>
        {comment.replies &&
          comment.replies.map((reply, index) => {
            return (
              <Reply
                reply={reply}
                commentAuthor={comment.user.username}
                key={index}
              />
            );
          })}
      </div>
    </>
  );
};
