import { useState } from 'react';
import { FeatureType } from '../FeatureType';
import { TitleInput } from '../TitleInput';
import { DetailInput } from '../DetailInput';
import plusSign from '../../../../assets/icons/new-feedback.svg';
import styles from './_feedbackForm.module.scss';

import { ProductRequest } from '../../class/ProductRequest';

export const FeedbackForm = () => {
  const [titleError, setTitleError] = useState(false);
  const [detailError, setDetailError] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    category: '',
    detail: '',
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

    const productRequest = new ProductRequest(
      formData.title,
      formData.category,
      formData.detail
    );

    console.log(productRequest);

    setTitleError(false);
    setDetailError(false);
    console.log('submitted');

    return null;
  };

  return (
    <>
      <main className={styles.outerContainer}>
        <div className={styles.innerContainer}>
          <div className={styles.plusSignBox}>
            <img className={styles.plusSign} src={plusSign} alt="plus sign" />
          </div>

          <div className={styles.formContainer}>
            <h1>create new feedback</h1>

            <form
              id="addFeedbackForm"
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
              <DetailInput
                onInputChange={onInputChange}
                formData={formData}
                detailError={detailError}
              />
            </form>
            <div className={styles.buttonBox}>
              <button
                type="submit"
                form="addFeedbackForm"
                className={styles.submitButton}
                onKeyPress={handleSubmit}
                tabIndex="0"
              >
                add feedback
              </button>
              <button className={styles.cancelButton} tabIndex="0">
                cancel
              </button>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};
