import { useState, useEffect, useRef } from 'react';
import { InputDescription } from '../../../../../../components/InputDescription';
import { Dropdown } from './Dropdown';
import arrowUp from '../../../../../../assets/icons/arrow-up.svg';
import arrowDown from '../../../../../../assets/icons/arrow-down.svg';
import styles from './_updateStatus.module.scss';

export const UpdateStatus = ({
  statusOption,
  setStatusOption,
  setFormData,
}) => {
  const STATUS_OPTIONS = ['suggestion', 'planned', 'in-progress', 'live'];
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);
  // const [activeOptionText, setActiveOptionText] = useState(SELECT_OPTIONS[0]);
  const [checkMark, setCheckMark] = useState(0);

  const arrow = isDropDownOpen ? arrowUp : arrowDown;
  const containerRef = useRef(null);

  const handleDropDown = () => setIsDropDownOpen(!isDropDownOpen);

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      setStatusOption(e.target.innerText);
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
    setStatusOption,
    handleKeyPress,
    setFormData,
    STATUS_OPTIONS,
    checkMark,
    setCheckMark,
  };

  return (
    <div className={styles.inputBox}>
      <InputDescription
        label="Update Status"
        description="Change feature state"
        htmlFor="updateStatus"
      />

      <div
        id="updateStatus"
        className={styles.dropDownContainer}
        tabIndex="0"
        onKeyPress={handleKeyPress}
        ref={containerRef}
      >
        <div className={styles.activeStatusContainer} onClick={handleDropDown}>
          <span className={styles.activeStatus}>{statusOption}</span>
          <img className={styles.arrow} src={arrow} alt="" />
        </div>

        {isDropDownOpen && <Dropdown formControls={formControls} />}
      </div>
    </div>
  );
};
