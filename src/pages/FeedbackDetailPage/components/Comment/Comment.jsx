import { useState, useContext, useEffect } from 'react';
import { DispatchContext } from '../../../../context/requests.context';
import { UserContext } from '../../../../context/user.context';
import { UserReply } from '../classes/UserReply';
import { Reply } from '../Reply/Reply';
import styles from './_comment.module.scss';

export const Comment = ({
  comment,
  commentsLength,
  setRepliesLength,
  requestID,
}) => {
  const [activeForm, setActiveForm] = useState(false);
  const [commentError, setCommentError] = useState(false);
  const [detailInput, setDetailInput] = useState('');
  const [charactersLeft, setCharactersLeft] = useState(250);
  const [maxCharacterError, setMaxCharacterError] = useState(false);
  const firstName = comment.user.name.split(' ')[0].toLowerCase();
  const userImgName = firstName;
  const { user } = useContext(UserContext);
  const dispatch = useContext(DispatchContext);

  useEffect(() => {
    if (charactersLeft <= 0) {
      return setCharactersLeft(0);
    }
  }, [charactersLeft]);

  const handleReplyFormToggle = (e) => {
    setCommentError(false);
    setActiveForm(!activeForm);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleReplyFormToggle(!activeForm);
    }
  };

  const onCommentChange = (e) => {
    setDetailInput(e.target.value);
    setCommentError(false);
    setCharactersLeft(250 - e.target.value.length);
  };

  const userReply = new UserReply(
    detailInput,
    user,
    comment.commentID,
    comment.user.username
  );

  const handleSubmit = (e) => {
    e.preventDefault(); // temporary
    if (!detailInput) {
      return setCommentError(true);
    }

    if (detailInput.length >= 250) {
      return setMaxCharacterError(true);
    }
    setMaxCharacterError(false);
    setCommentError(false);
    dispatch({
      type: 'add-reply',
      reply: userReply,
      commentID: comment.commentID,
      requestID: requestID,
    });

    setDetailInput('');
    setActiveForm(false);
    setCharactersLeft(250);
    return null;
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
          onSubmit={handleSubmit}
        >
          <span
            className={
              commentError ? styles.errorText : styles.visibilityHidden
            }
          >
            Can't be empty
          </span>
          <textarea
            className={`${styles.textArea} ${
              commentError && styles.errorOutline
            }`}
            onChange={onCommentChange}
            value={detailInput}
            rows="8"
            tabIndex="0"
          />
          <div className={styles.buttonBox}>
            <span
              className={`${styles.characterCountText} ${
                detailInput.length >= 250 ? styles.charactersError : null
              }`}
            >
              {`${charactersLeft} characters left`}
            </span>
            <button className={styles.submitButton} type="submit">
              post reply
            </button>
          </div>
        </form>
        {comment.replies &&
          comment.replies.map((reply, index) => {
            return (
              <Reply
                reply={reply}
                commentAuthor={comment.user.username}
                key={reply.replyID}
                requestID={requestID}
                commentID={comment.commentID}
              />
            );
          })}
      </div>
    </>
  );
};
