import { InputDescription } from '../InputDescription';
import styles from './_titleInput.module.scss';

export const TitleInput = ({ handleInputData, formData, titleError }) => {
  return (
    <div className={styles.inputBox}>
      <InputDescription
        label="feedback title"
        description="Add a short, descriptive headline"
        htmlFor="feedbackTitle"
      />
      <input
        id="feedbackTitle"
        className={`${styles.inputText} ${titleError && styles.errorOutline}`}
        type="text"
        onChange={handleInputData}
        name="title"
        value={formData.title}
      />
      <span className={titleError ? styles.errorText : styles.visibilityHidden}>
        Can't be empty
      </span>
    </div>
  );
};
