import styles from './_addFeedback.module.scss';

const SELECT_OPTIONS = ['bug', 'enhancement', 'feature'];

const SelectOption = ({ option, index, formControls }) => {
  return (
    <div
      className={styles.option}
      onClick={() => {
        formControls.setActiveOptionText(option);
        formControls.setIsDropDownOpen(!formControls.isDropDownOpen);
        formControls.setFormData((prevData) => ({
          ...prevData,
          category: option,
        }));
      }}
      onKeyPress={formControls.handleKeyPress}
      tabIndex="0"
    >
      {option}
    </div>
  );
};

export const Dropdown = ({ formControls }) => {
  return (
    <div className={styles.selectOptions}>
      {SELECT_OPTIONS.map((option, index) => {
        return (
          <SelectOption
            option={option}
            key={option}
            index={index}
            formControls={formControls}
          />
        );
      })}
    </div>
  );
};
