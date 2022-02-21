import checkMarkSvg from '../../../../assets/icons/check.svg';
import styles from './_featureType.module.scss';

export const Dropdown = ({ formControls, dropdownOptionWidth }) => {
  const {
    isDropDownOpen,
    setIsDropDownOpen,
    setActiveOptionText,
    handleKeyPress,
    setFormData,
    SELECT_OPTIONS,
    checkMark,
    setCheckMark,
  } = formControls;

  return (
    <div className={styles.selectOptions}>
      {SELECT_OPTIONS.map((option, index) => {
        return (
          <div
            className={styles.option}
            style={{ width: dropdownOptionWidth - 13 }}
            onClick={() => {
              setActiveOptionText(option);
              setCheckMark(index);
              setIsDropDownOpen(!isDropDownOpen);
              setFormData((prevData) => ({
                ...prevData,
                category: option,
              }));
            }}
            onKeyPress={(e) => {
              setCheckMark(index);
              handleKeyPress(e);
            }}
            tabIndex="0"
            key={option}
          >
            {option}
            {checkMark === index && (
              <img
                className={styles.checkMark}
                src={checkMarkSvg}
                alt="check mark"
              />
            )}
          </div>
        );
      })}
    </div>
  );
};
