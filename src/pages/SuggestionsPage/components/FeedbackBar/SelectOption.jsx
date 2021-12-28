import styles from './_feedbackBar.module.scss';

export const SelectOption = ({ sortingData, option, index }) => {
  return (
    <div
      className={styles.option}
      onClick={() => {
        sortingData.setActiveOptionText(option);
        sortingData.setCheckMark(index);
        sortingData.setIsDropDownOpen(!sortingData.isDropDownOpen);
      }}
    >
      {option}
      <span className={styles.checkMark}>
        {sortingData.checkMark === index ? '✔' : ''}
      </span>
    </div>
  );
};
