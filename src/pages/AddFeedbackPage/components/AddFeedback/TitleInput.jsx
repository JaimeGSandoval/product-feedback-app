import { InputDescription } from './InputDescription';
import styles from './_addFeedback.module.scss';

export const TitleInput = ({ handleInputData, formData }) => {
  return (
    <div className={styles.inputBox}>
      <InputDescription
        label="feedback title"
        description="Add a short, descriptive headline"
        htmlFor="feedbackTitle"
      />
      <input
        id="feedbackTitle"
        className={styles.inputText}
        type="text"
        onChange={handleInputData}
        name="title"
        value={formData.title}
      />
    </div>
  );
};
