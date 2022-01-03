import styles from './_feedbackBar.module.scss';
import checkMark from '../../../../assets/icons/check.svg';

export const SelectOption = ({ sortingData, option, index }) => {
  return (
    <div
      className={styles.option}
      onClick={() => {
        sortingData.setActiveOptionText(option);
        sortingData.setCheckMark(index);
        sortingData.setIsDropDownOpen(!sortingData.isDropDownOpen);
      }}
      onKeyPress={(e) => {
        sortingData.setCheckMark(index);
        sortingData.handleKeyPress(e);
      }}
      tabIndex="0"
    >
      {option}
      {sortingData.checkMark === index && (
        <img className={styles.checkMark} src={checkMark} alt="check mark" />
      )}
    </div>
  );
};
