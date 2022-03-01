import { useState, useEffect, useRef } from 'react';
import { InputDescription } from '../../../../../../components/InputDescription';
import { Dropdown } from '../../../../../../components/Dropdown';
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
  const [checkMark, setCheckMark] = useState(0);

  const arrow = isDropDownOpen ? arrowUp : arrowDown;
  const containerRef = useRef(null);
  const dropdownRef = useRef();

  const handleDropDown = () => setIsDropDownOpen(!isDropDownOpen);

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' || e.key === 'Return') {
      setStatusOption(e.target.innerText.toLowerCase());
      setFormData((prevData) => ({
        ...prevData,
        category: e.target.innerText.toLowerCase(),
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
        <div
          className={`${styles.activeStatusContainer} ${
            isDropDownOpen && styles.blueBorder
          }`}
          onClick={handleDropDown}
          ref={dropdownRef}
        >
          <span className={styles.activeStatus}>{statusOption}</span>
          <img className={styles.arrow} src={arrow} alt="" />
        </div>

        {isDropDownOpen && (
          <Dropdown
            formControls={formControls}
            dropdownOptionWidth={dropdownRef.current.offsetWidth}
            options={STATUS_OPTIONS}
            setOption={setStatusOption}
            styles={styles}
          />
        )}
      </div>
    </div>
  );
};
