import { useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { DispatchContext } from '../../../../context/requests.context';
import { FeatureType } from '../FeatureType';
import { TitleInput } from '../TitleInput';
import { DetailInput } from '../DetailInput';
import { ProductRequest } from '../../class/ProductRequest';
import plusSign from '../../../../assets/icons/new-feedback.svg';
import styles from './_feedbackForm.module.scss';

export const FeedbackForm = () => {
  const [titleError, setTitleError] = useState(false);
  const [detailError, setDetailError] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    category: 'bug',
    detail: '',
  });
  const dispatch = useContext(DispatchContext);
  const navigate = useNavigate();
  const goBack = () => navigate(-1);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

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

    setTitleError(false);
    setDetailError(false);
    dispatch({ type: 'add', newRequest: productRequest });
    navigate('/', { replace: true });

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
              <button
                className={styles.cancelButton}
                tabIndex="0"
                onClick={goBack}
              >
                cancel
              </button>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};
