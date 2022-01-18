import { useState, useEffect } from 'react';
import { InputDescription } from '../../../../../../components/InputDescription';
import styles from './_detailInput.module.scss';

export const DetailInput = ({ onInputChange, formData, detailError }) => {
  const [detailCharactersLeft, setDetailCharactersLeft] = useState(75);

  useEffect(() => {
    if (detailCharactersLeft <= 0) {
      return setDetailCharactersLeft(0);
    }
  }, [detailCharactersLeft]);

  const onChange = (e) => {
    onInputChange(e);
    setDetailCharactersLeft(75 - e.target.value.length);
  };

  return (
    <div className={styles.inputBox}>
      <InputDescription
        label="feedback detail"
        description="Include any specific comments on what should be improved, added, etc."
        htmlFor="detailTextArea"
      />
      <span
        className={detailError ? styles.errorText : styles.visibilityHidden}
      >
        Can't be empty
      </span>
      <textarea
        id="detailTextArea"
        className={`${styles.textArea} ${detailError && styles.errorOutline}`}
        onChange={onChange}
        value={formData.detail}
        name="detail"
        rows="8"
      />
      <span
        className={`${styles.characterCountText} ${
          formData.detail.length >= 75 && styles.charactersError
        }`}
      >
        {detailCharactersLeft} characters left
      </span>
    </div>
  );
};
