import { useState, useEffect, useRef } from 'react';
import { InputDescription } from './InputDescription';
import { Dropdown } from './Dropdown';
import arrowUp from '../../../../assets/icons/arrow-up.svg';
import arrowDown from '../../../../assets/icons/arrow-down.svg';
import styles from './_addFeedback.module.scss';

export const FeatureType = ({ setFormData }) => {
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);
  const [activeOptionText, setActiveOptionText] = useState('bug');
  const arrow = isDropDownOpen ? arrowUp : arrowDown;
  const containerRef = useRef(null);

  const handleDropDown = () => setIsDropDownOpen(!isDropDownOpen);

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      setActiveOptionText(e.target.innerText);
      setFormData((prevData) => ({
        ...prevData,
        category: e.target.innerText,
      }));
      setIsDropDownOpen(!isDropDownOpen);
    }
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
  }, [isDropDownOpen, setIsDropDownOpen]);

  const formControls = {
    isDropDownOpen,
    setIsDropDownOpen,
    setActiveOptionText,
    handleKeyPress,
    setFormData,
  };

  return (
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
        <div className={styles.activeOptionContainer} onClick={handleDropDown}>
          <span className={styles.activeOptionText}>{activeOptionText}</span>
          <img className={styles.arrow} src={arrow} alt="" />
        </div>

        {isDropDownOpen && <Dropdown formControls={formControls} />}
      </div>
    </div>
  );
};