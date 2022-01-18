import { InputDescription } from '../../../../../../components/InputDescription';
import styles from './_titleInput.module.scss';

export const TitleInput = ({
  onInputChange,
  formData,
  titleError,
  titleMaxCharacterError,
}) => {
  return (
    <div className={styles.inputBox}>
      <InputDescription
        label="feedback title"
        description="Add a short, descriptive headline"
        htmlFor="feedbackTitle"
      />
      <span
        className={`${styles.characterCountText} ${
          formData.title.length >= 35
            ? styles.charactersError
            : styles.visibilityHidden
        }`}
      >
        Must be less than 35 characters
      </span>
      <input
        id="feedbackTitle"
        className={`${styles.inputText} ${
          (titleError && styles.errorOutline) ||
          (titleMaxCharacterError && styles.errorOutline)
        }`}
        type="text"
        onChange={onInputChange}
        name="title"
        value={formData.title}
      />
      <span className={titleError ? styles.errorText : styles.visibilityHidden}>
        Can't be empty
      </span>
    </div>
  );
};
