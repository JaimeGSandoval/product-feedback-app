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

  return (
    <div className={styles.selectOptions}>
      {options.map((option, index) => {
        return (
          <div
            className={styles.option}
            style={{ width: dropdownOptionWidth - 13 }}
            onClick={() => {
              setOption(option);
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
