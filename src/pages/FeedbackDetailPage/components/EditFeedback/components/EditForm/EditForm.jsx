import { useState } from 'react';
import { TitleInput } from '../TitleInput';
import { FeatureType } from '../FeatureType';
import { UpdateStatus } from '../UpdateStatus';
import { DetailInput } from '../DetailInput';
import penIcon from '../../../../../../assets/icons/edit-feedback.svg';
import styles from './_editForm.module.scss';

export const EditForm = () => {
  const [formData, setFormData] = useState({
    title: '',
    category: '',
    status: '',
    detail: '',
  });
  const [titleError, setTitleError] = useState(false);
  const [detailError, setDetailError] = useState(false);

  const handleInputData = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
    setDetailError(false);
    setTitleError(false);
  };

  const handleSubmit = (e) => {
    if (!formData.title) {
      e.preventDefault();
      setTitleError(!titleError);
      return;
    } else {
      setTitleError(false);
    }

    if (!formData.detail) {
      e.preventDefault();
      setDetailError(!detailError);
      return;
    } else {
      setDetailError(false);
    }
    e.preventDefault(); // temporary
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
                handleInputData={handleInputData}
                formData={formData}
                titleError={titleError}
              />
              <FeatureType setFormData={setFormData} />
              <UpdateStatus setFormData={setFormData} />
              <DetailInput
                handleInputData={handleInputData}
                formData={formData}
                detailError={detailError}
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
