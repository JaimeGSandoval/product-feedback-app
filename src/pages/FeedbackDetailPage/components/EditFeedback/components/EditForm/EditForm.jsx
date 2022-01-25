import { useState } from 'react';
import { TitleInput } from '../TitleInput';
import { FeatureType } from '../FeatureType';
import { UpdateStatus } from '../UpdateStatus';
import { DetailInput } from '../DetailInput';
import penIcon from '../../../../../../assets/icons/edit-feedback.svg';
import styles from './_editForm.module.scss';

export const EditForm = ({ request }) => {
  const [titleError, setTitleError] = useState(false);
  const [detailError, setDetailError] = useState(false);
  const [detailMaxCharacterError, setDetailMaxCharacterError] = useState(false);
  const [formData, setFormData] = useState({
    title: request.title,
    category: request.category,
    status: request.status,
    detail: request.description,
  });

  const onInputChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
    setDetailError(false);
    setTitleError(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // temporary

    if (!formData.title) {
      return setTitleError(!titleError);
    }

    if (!formData.detail) {
      return setDetailError(!detailError);
    }

    if (formData.detail.length >= 75 || formData.title.length >= 35) {
      console.log('error');
      return;
    }
    setTitleError(false);
    setDetailError(false);
    setDetailMaxCharacterError(false);
    console.log(formData);
    console.log('submitted');

    return null;
  };

  return (
    <>
      <main className={styles.outerContainer}>
        <div className={styles.innerContainer}>
          <div className={styles.plusSignBox}>
            <img className={styles.penIcon} src={penIcon} alt="pen" />
          </div>

          <div className={styles.formContainer}>
            <h1>editing 'add a dark theme option'</h1>

            <form
              id="EditForm"
              action=""
              onSubmit={handleSubmit}
              className={styles.form}
            >
              <TitleInput
                onInputChange={onInputChange}
                formData={formData}
                titleError={titleError}
              />
              <FeatureType setFormData={setFormData} />
              <UpdateStatus setFormData={setFormData} />
              <DetailInput
                onInputChange={onInputChange}
                formData={formData}
                detailError={detailError}
                detailMaxCharacterError={detailMaxCharacterError}
              />
            </form>
            <div className={styles.buttonBox}>
              <button
                type="submit"
                form="EditForm"
                className={styles.submitButton}
                onKeyPress={handleSubmit}
                tabIndex="0"
              >
                add feedback
              </button>
              <button className={styles.cancelButton} tabIndex="0">
                cancel
              </button>
              <button className={styles.deleteButton} tabIndex="0">
                delete
              </button>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};
