import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { GoBackBtn } from '../../../../components/GoBackBtn';
import { FeatureType } from './FeatureType';
import { TitleInput } from './TitleInput';
import { DetailInput } from './DetailInput';
import plusSign from '../../../../assets/icons/new-feedback.svg';
import styles from './_addFeedback.module.scss';

export const AddFeedback = () => {
  const [formData, setFormData] = useState({
    title: '',
    category: '',
    detail: '',
  });

  const navigate = useNavigate();

  const handleInputData = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = () => {
    navigate('/', { replace: true });
    return null;
  };

  return (
    <div className={styles.container}>
      <GoBackBtn styles={styles} />

      <section className={styles.outerContainer}>
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
                handleInputData={handleInputData}
                formData={formData}
              />
              <FeatureType setFormData={setFormData} />
              <DetailInput
                handleInputData={handleInputData}
                formData={formData}
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
      </section>
    </div>
  );
};
