import styles from './_addFeedback.module.scss';

const SELECT_OPTIONS = ['bug', 'enhancement', 'feature'];

export const Dropdown = ({ formControls }) => {
  const {
    isDropDownOpen,
    setIsDropDownOpen,
    setActiveOptionText,
    handleKeyPress,
    setFormData,
  } = formControls;

  return (
    <div className={styles.selectOptions}>
      {SELECT_OPTIONS.map((option, index) => {
        return (
          <div
            className={styles.option}
            onClick={() => {
              setActiveOptionText(option);
              setIsDropDownOpen(!isDropDownOpen);
              setFormData((prevData) => ({
                ...prevData,
                category: option,
              }));
            }}
            onKeyPress={handleKeyPress}
            tabIndex="0"
            key={option}
          >
            {option}
          </div>
        );
      })}
    </div>
  );
};
