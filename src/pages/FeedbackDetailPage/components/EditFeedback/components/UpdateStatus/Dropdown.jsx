import checkMarkSvg from '../../../../../../assets/icons/check.svg';
import styles from './_updateStatus.module.scss';

export const Dropdown = ({ formControls, dropdownOptionWidth }) => {
  const {
    isDropDownOpen,
    setIsDropDownOpen,
    setStatusOption,
    handleKeyPress,
    setFormData,
    STATUS_OPTIONS,
    checkMark,
    setCheckMark,
  } = formControls;

  return (
    <div className={styles.selectOptions}>
      {STATUS_OPTIONS.map((option, index) => {
        return (
          <div
            className={styles.option}
            style={{ width: dropdownOptionWidth - 13 }}
            onClick={() => {
              setStatusOption(option);
              setCheckMark(index);
              setIsDropDownOpen(!isDropDownOpen);
              setFormData((prevData) => ({
                ...prevData,
                status: option,
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
