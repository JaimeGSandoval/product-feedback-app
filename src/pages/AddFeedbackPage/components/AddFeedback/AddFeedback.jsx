import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { GoBackBtn } from '../../../../components/GoBackBtn';
import { Dropdown } from './SelectOption';
import { InputDescription } from '../InputDescription';
import plusSign from '../../../../assets/icons/new-feedback.svg';
import arrowUp from '../../../../assets/icons/arrow-up.svg';
import arrowDown from '../../../../assets/icons/arrow-down.svg';
import styles from './_addFeedback.module.scss';

export const AddFeedback = () => {
  const [activeOptionText, setActiveOptionText] = useState('bug');
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    category: '',
    detail: '',
  });

  const navigate = useNavigate();
  const containerRef = useRef(null);
  const arrow = isDropDownOpen ? arrowUp : arrowDown;

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

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      setFormData((prevData) => ({
        ...prevData,
        category: e.target.innerText,
      }));
      setIsDropDownOpen(!isDropDownOpen);
    }
  };

  const handleDropDown = () => setIsDropDownOpen(!isDropDownOpen);

  const formControls = {
    isDropDownOpen,
    setIsDropDownOpen,
    activeOptionText,
    setActiveOptionText,
    setFormData,
    handleKeyPress,
  };

  useEffect(() => {
    const clickOutsideDropdown = (e) => {
      if (
        isDropDownOpen &&
        containerRef.current &&
        !containerRef.current.contains(e.target)
      ) {
        setIsDropDownOpen(false);
      }
    };

    document.addEventListener('mousedown', clickOutsideDropdown);

    return () => {
      document.removeEventListener('mousedown', clickOutsideDropdown);
    };
  }, [isDropDownOpen]);

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
              <div className={styles.inputBox}>
                <InputDescription
                  label="feedback title"
                  description="Add a short, descriptive headline"
                  htmlFor="feedbackTitle"
                  styles={styles}
                />
                <input
                  id="feedbackTitle"
                  className={styles.inputText}
                  type="text"
                  onChange={handleInputData}
                  name="title"
                  value={formData.title}
                />
              </div>

              <div className={styles.inputBox}>
                <InputDescription
                  label="Category"
                  description="Choose a category for your feedback"
                  htmlFor="featureDropdown"
                  styles={styles}
                />

                <div
                  id="featureDropdown"
                  className={styles.dropDownContainer}
                  tabIndex="0"
                  onKeyPress={handleKeyPress}
                  ref={containerRef}
                >
                  <div
                    className={styles.activeOptionContainer}
                    onClick={handleDropDown}
                  >
                    <span className={styles.activeOptionText}>
                      {activeOptionText}
                    </span>
                    <img className={styles.arrow} src={arrow} alt="" />
                  </div>

                  {isDropDownOpen && <Dropdown formControls={formControls} />}
                </div>
              </div>

              <div className={styles.inputBox}>
                <InputDescription
                  label="feedback detail"
                  description="Include any specific comments on what should be improved, added, etc."
                  htmlFor="detailTextArea"
                  styles={styles}
                />
                <textarea
                  id="detailTextArea"
                  className={styles.textArea}
                  onChange={handleInputData}
                  value={formData.detail}
                  name="detail"
                ></textarea>
              </div>
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
