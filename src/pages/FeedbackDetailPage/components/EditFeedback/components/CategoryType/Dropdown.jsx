import checkMarkSvg from '../../../../../../assets/icons/check.svg';
import styles from './_categoryType.module.scss';

export const Dropdown = ({ formControls, dropdownOptionWidth }) => {
  const {
    isDropDownOpen,
    setIsDropDownOpen,
    setCategoryOption,
    handleKeyPress,
    setFormData,
    CATEGORY_OPTIONS,
    checkMark,
    setCheckMark,
  } = formControls;

  return (
    <div className={styles.selectOptions}>
      {CATEGORY_OPTIONS.map((option, index) => {
        return (
          <div
            className={styles.option}
            style={{ width: dropdownOptionWidth - 13 }}
            onClick={() => {
              setCategoryOption(option);
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
