import { useState } from 'react';
import styles from './_reply.module.scss';

export const Reply = ({ reply, commentAuthor }) => {
  const [activeForm, setActiveForm] = useState(false);
  const [replyError, setReplyError] = useState(false);
  const [replyInput, setReplyInput] = useState('');
  const firstName = reply.user.name.split(' ')[0].toLowerCase();
  const userImgName = firstName;

  const handleReplyFormToggle = () => setActiveForm(!activeForm);

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleReplyFormToggle(!activeForm);
    }
  };

  const handleChange = (e) => {
    setReplyInput(e.target.value);
    setReplyError(false);
  };

  const handleSubmit = (e) => {
    if (!replyInput) {
      e.preventDefault();
      setReplyError(!replyError);
    } else {
      e.preventDefault(); // temporary
      setReplyError(false);
      console.log('submitted');
    }

    return null;
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
              <span
                className={styles.userHandle}
              >{`@${reply.user.username}`}</span>
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
          onSubmit={handleSubmit}
        >
          <span
            className={replyError ? styles.errorText : styles.visibilityHidden}
          >
            Can't be empty
          </span>
          <textarea
            className={`${styles.textArea} ${
              replyError && styles.errorOutline
            }`}
            onChange={handleChange}
            value={replyInput}
            rows="8"
            tabIndex="0"
          />
          <button className={styles.submitButton} type="submit" tabIndex="0">
            post reply
          </button>
        </form>
      </div>
    </>
  );
};
