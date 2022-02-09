import { useState, useContext, useEffect } from 'react';
import { DispatchContext } from '../../../../context/requests.context';
import { UserContext } from '../../../../context/user.context';
import { IDContext } from '../../context/ID.context';
import { UserReply } from '../classes/UserReply';
import styles from './_comment.module.scss';

export const Comment = ({
  comment,
  commentsLength,
  allComments,
  customMargin,
  index,
}) => {
  const [activeForm, setActiveForm] = useState(false);
  const [commentError, setCommentError] = useState(false);
  const [detailInput, setDetailInput] = useState('');
  const [charactersLeft, setCharactersLeft] = useState(250);
  const firstName = comment.user.name.split(' ')[0].toLowerCase();
  const userImgName = firstName;
  const { user } = useContext(UserContext);
  const dispatch = useContext(DispatchContext);

  const idContext = useContext(IDContext);
  const { currentRequestID, setCommentIDContext } = idContext;

  // gathers the child comments for the current comment being passed through. If the childComment.parentID is equal to the comment.commentID, thie child comment belongs to that comment
  const childComments = allComments.filter(
    (childComment) => childComment.parentID === comment.commentID
  );

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
    comment.user.username,
    currentRequestID // identifies what suggestion the reply or comment belongs to
  );

  const handleSubmit = (e) => {
    e.preventDefault(); // temporary
    if (!detailInput) {
      return setCommentError(true);
    }

    if (detailInput.length >= 250) return;

    setCommentError(false);
    setCommentIDContext(comment.commentID);

    dispatch({
      type: 'add-reply',
      reply: userReply,
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

        <p className={styles.commentText}>
          <span className={styles.commentAuthor}>
            {comment.replyingTo && `@${comment.replyingTo} `}
          </span>
          {comment.content}
        </p>

        <form
          method="POST"
          className={`${styles.replyForm} ${!activeForm && styles.hide}`}
          onSubmit={handleSubmit}
          data-author={comment.user.username}
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
        <div
          key={comment.commentID}
          className={styles.replyContainer}
          style={{
            paddingLeft: index > 0 ? '1rem' : '0',
          }}
        >
          {childComments &&
            childComments
              .map((comment) => {
                return (
                  <Comment
                    key={comment.commentID}
                    comment={comment}
                    allComments={allComments}
                    id={comment.commentID}
                  />
                );
              })
              .reverse()}
        </div>
      </div>
    </>
  );
};
