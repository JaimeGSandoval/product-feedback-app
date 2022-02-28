import checkMarkSvg from '../assets/icons/check.svg';

export const Dropdown = ({
  formControls,
  dropdownOptionWidth,
  styles,
  options,
  setOption,
}) => {
  const {
    isDropDownOpen,
    setIsDropDownOpen,
    handleKeyPress,
    setFormData,
    checkMark,
    setCheckMark,
  } = formControls;

  const handleDropdownClick = (optionVal, indexVal, dropdownVal) => {
    setOption(optionVal);
    setCheckMark(indexVal);
    setIsDropDownOpen(!dropdownVal);
    setFormData((prevData) => ({
      ...prevData,
      category: optionVal,
    }));
  };

  const handleDropdownKeypress = (e, indexVal) => {
    setCheckMark(indexVal);
    handleKeyPress(e);
  };

  return (
    <div className={styles.selectOptions}>
      {options.map((option, index) => {
        return (
          <div
            className={styles.option}
            style={{ width: dropdownOptionWidth - 13 }}
            onClick={() => handleDropdownClick(option, index, isDropDownOpen)}
            onKeyPress={(e) => {
              handleDropdownKeypress(e, index);
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
