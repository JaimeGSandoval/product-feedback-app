import { useState, useEffect, useRef } from 'react';
import { InputDescription } from '../../../../../../components/InputDescription';
import { Dropdown } from './Dropdown';
import arrowUp from '../../../../../../assets/icons/arrow-up.svg';
import arrowDown from '../../../../../../assets/icons/arrow-down.svg';
import styles from './_categoryType.module.scss';

export const CategoryType = ({
  categoryOption,
  setCategoryOption,
  setFormData,
}) => {
  const CATEGORY_OPTIONS = ['bug', 'UI', 'UX', 'enhancement', 'feature'];
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);
  const [checkMark, setCheckMark] = useState(0);

  const arrow = isDropDownOpen ? arrowUp : arrowDown;
  const containerRef = useRef(null);
  const dropdownRef = useRef();

  const handleDropDown = () => setIsDropDownOpen(!isDropDownOpen);

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      setCategoryOption(e.target.innerText);
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
    setCategoryOption,
    handleKeyPress,
    setFormData,
    CATEGORY_OPTIONS,
    checkMark,
    setCheckMark,
  };

  return (
    <div className={styles.inputBox}>
      <InputDescription
        label="Category"
        description="Choose a category for your feedback"
        htmlFor="featureDropdown"
      />

      <div
        id="featureDropdown"
        className={styles.dropDownContainer}
        tabIndex="0"
        onKeyPress={handleKeyPress}
        ref={containerRef}
      >
        <div
          className={`${styles.activeCategoryContainer} ${
            isDropDownOpen && styles.blueBorder
          }`}
          onClick={handleDropDown}
          ref={dropdownRef}
        >
          <span className={styles.activeCategoryText}>{categoryOption}</span>
          <img className={styles.arrow} src={arrow} alt="" />
        </div>

        {isDropDownOpen && (
          <Dropdown
            formControls={formControls}
            dropdownOptionWidth={dropdownRef.current.offsetWidth}
          />
        )}
      </div>
    </div>
  );
};
