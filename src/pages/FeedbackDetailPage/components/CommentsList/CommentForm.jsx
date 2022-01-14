import { useState } from 'react';

export const CommentForm = ({ styles }) => {
  const [commentInput, setCommentInput] = useState('');
  const [inputError, setErrorInputError] = useState(false);

  const handleCommentInput = (e) => {
    setErrorInputError(false);
    setCommentInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!commentInput) {
      return setErrorInputError(!inputError);
    }

    setErrorInputError(false);
    console.log('submitted');
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
          onChange={handleCommentInput}
          name="add-comment"
          value={commentInput}
          rows="8"
          placeholder="Type your comment here"
        />
      </div>
      <div className={styles.buttonBox}>
        <span className={styles.characterCountText}>250 characters left</span>
        <button className={styles.submitBtn} type="submit">
          post comment
        </button>
      </div>
    </form>
  );
};
