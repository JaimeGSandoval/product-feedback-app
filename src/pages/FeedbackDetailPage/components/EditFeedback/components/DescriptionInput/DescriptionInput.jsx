import { useState, useEffect } from 'react';
import { InputDescription } from '../../../../../../components/InputDescription';
import styles from './_descriptionInput.module.scss';

export const DescriptionInput = ({
  onInputChange,
  formData,
  descriptionError,
  productRequest,
}) => {
  const [descriptionCharsLeft, setDescriptionCharsLeft] = useState(75);

  useEffect(() => {
    if (descriptionCharsLeft <= 0) {
      return setDescriptionCharsLeft(0);
    }
  }, [descriptionCharsLeft]);

  const onChange = (e) => {
    onInputChange(e);
    setDescriptionCharsLeft(75 - e.target.value.length);
  };

  return (
    <div className={styles.inputBox}>
      <InputDescription
        label="feedback detail"
        description="Include any specific comments on what should be improved, added, etc."
        htmlFor="detailTextArea"
      />
      <span
        className={
          descriptionError ? styles.errorText : styles.visibilityHidden
        }
      >
        Can't be empty
      </span>
      <textarea
        id="detailTextArea"
        className={`${styles.textArea} ${
          descriptionError && styles.errorOutline
        }`}
        onChange={onChange}
        value={formData.description}
        name="description"
        rows="8"
      />
      <span
        className={`${styles.characterCountText} ${
          formData.description.length >= 75 && styles.charactersError
        }`}
      >
        {descriptionCharsLeft} characters left
      </span>
    </div>
  );
};
