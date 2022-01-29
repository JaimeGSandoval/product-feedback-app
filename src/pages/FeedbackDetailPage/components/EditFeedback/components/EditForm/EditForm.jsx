import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { DispatchContext } from '../../../../../../context/requests.context';
import { TitleInput } from '../TitleInput';
import { CategoryType } from '../CategoryType';
import { UpdateStatus } from '../UpdateStatus';
import { DescriptionInput } from '../DescriptionInput';
import penIcon from '../../../../../../assets/icons/edit-feedback.svg';
import styles from './_editForm.module.scss';

export const EditForm = ({ productRequest, isEditing, setIsEditing }) => {
  const [titleError, setTitleError] = useState(false);
  const [descriptionError, setDescriptionError] = useState(false);
  const [categoryOption, setCategoryOption] = useState('bug');
  const [statusOption, setStatusOption] = useState('suggestion');

  const [formData, setFormData] = useState({
    title: productRequest.title,
    category: productRequest.category,
    description: productRequest.description,
    status: productRequest.status,
  });
  const dispatch = useContext(DispatchContext);
  const navigate = useNavigate();

  const goBack = () => {
    setIsEditing(!isEditing);
    window.scrollTo(0, 0);
  };

  const onInputChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
    setDescriptionError(false);
    setTitleError(false);
  };

  const handleRequestDelete = () => {
    dispatch({
      type: 'delete',
      requestID: productRequest.requestID,
    });
    navigate('/');
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // temporary

    if (!formData.title) {
      return setTitleError(!titleError);
    }

    if (!formData.description) {
      return setDescriptionError(!descriptionError);
    }

    if (formData.description.length >= 75 || formData.title.length >= 35) {
      console.log('error');
      return;
    }

    setTitleError(false);
    setDescriptionError(false);
    dispatch({
      type: 'edit',
      requestID: productRequest.requestID,
      title: formData.title,
      category: categoryOption,
      status: statusOption,
      description: formData.description,
    });

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
                productRequest={productRequest}
              />
              <CategoryType
                categoryOption={categoryOption}
                setCategoryOption={setCategoryOption}
                setFormData={setFormData}
              />
              <UpdateStatus
                statusOption={statusOption}
                setStatusOption={setStatusOption}
                setFormData={setFormData}
              />
              <DescriptionInput
                onInputChange={onInputChange}
                formData={formData}
                descriptionError={descriptionError}
                productRequest={productRequest}
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
              <button
                className={styles.cancelButton}
                onClick={goBack}
                tabIndex="0"
              >
                cancel
              </button>
              <button
                className={styles.deleteButton}
                onClick={handleRequestDelete}
                tabIndex="0"
              >
                delete
              </button>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};
