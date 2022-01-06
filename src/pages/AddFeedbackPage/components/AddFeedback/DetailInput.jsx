import { InputDescription } from './InputDescription';
import styles from './_addFeedback.module.scss';

export const DetailInput = ({ handleInputData, formData }) => {
  return (
    <div className={styles.inputBox}>
      <InputDescription
        label="feedback detail"
        description="Include any specific comments on what should be improved, added, etc."
        htmlFor="detailTextArea"
      />
      <textarea
        id="detailTextArea"
        className={styles.textArea}
        onChange={handleInputData}
        value={formData.detail}
        name="detail"
        rows="8"
      />
    </div>
  );
};
