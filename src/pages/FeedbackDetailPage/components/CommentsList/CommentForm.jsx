import { useState, useEffect, useContext } from 'react';
import { DispatchContext } from '../../../../context/requests.context';
import { UserContext } from '../../../../context/user.context';
import { UserComment } from '../classes/UserComment';

export const CommentForm = ({ styles, requestID }) => {
  const [commentInput, setCommentInput] = useState('');
  const [inputError, setInputError] = useState(false);
  const [charactersLeft, setCharactersLeft] = useState(250);
  const { user } = useContext(UserContext);
  const dispatch = useContext(DispatchContext);

  const isNotMobile = window.matchMedia('(min-width: 768px)');

  useEffect(() => {
    if (charactersLeft <= 0) {
      return setCharactersLeft(0);
    }
  }, [charactersLeft]);

  const onCommentChange = (e) => {
    setInputError(false);
    setCommentInput(e.target.value);
    setCharactersLeft(250 - e.target.value.length);
  };

  const userComment = new UserComment(commentInput, user);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!commentInput) {
      return setInputError(true);
    }

    if (commentInput.length >= 250) return;

    setInputError(false);
    dispatch({
      type: 'add-comment',
      comment: userComment,
      user: user,
      requestID: requestID,
    });

    setCommentInput('');
    setCharactersLeft(250);
  };

  return (
    <form
      action="#"
      method="POST"
      onSubmit={handleSubmit}
      className={styles.form}
    >
      <div className={styles.labelBox}>
        <label className={styles.formLabel} htmlFor="add-comment">
          add comment
        </label>
      </div>

      <div className={styles.textareaBox}>
        <span
          className={inputError ? styles.errorText : styles.visibilityHidden}
        >
          Can't be empty
        </span>
        <textarea
          id="add-comment"
          className={`${styles.textarea} ${inputError && styles.errorOutline}`}
          onChange={onCommentChange}
          name="add-comment"
          value={commentInput}
          rows={isNotMobile.matches ? '5' : '8'}
          placeholder="Type your comment here"
        />
      </div>
      <div className={styles.formButtonBox}>
        <span
          className={`${styles.characterCountText} ${
            commentInput.length >= 250 ? styles.charactersError : null
          }`}
        >
          {`${charactersLeft} characters left`}
        </span>
        <button className={styles.submitBtn} type="submit" tabIndex="0">
          post comment
        </button>
      </div>
    </form>
  );
};
