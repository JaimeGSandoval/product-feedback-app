import { InputDescription } from '../../../../../../components/InputDescription';
import styles from './_detailInput.module.scss';

export const DetailInput = ({ handleInputData, formData, detailError }) => {
  return (
    <div className={styles.inputBox}>
      <InputDescription
        label="feedback detail"
        description="Include any specific comments on what should be improved, added, etc."
        htmlFor="detailTextArea"
      />
      <textarea
        id="detailTextArea"
        className={`${styles.textArea} ${detailError && styles.errorOutline}`}
        onChange={handleInputData}
        value={formData.detail}
        name="detail"
        rows="8"
      />
      <span
        className={detailError ? styles.errorText : styles.visibilityHidden}
      >
        Can't be empty
      </span>
    </div>
  );
};
