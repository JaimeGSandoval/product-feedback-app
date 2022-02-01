import { useContext } from 'react';
import { SortContext } from '../sort.context';
import checkMarkIcon from '../../../../assets/icons/check.svg';
import styles from './_feedbackBar.module.scss';

export const SelectOption = ({ sortingData, option, index }) => {
  const sortContext = useContext(SortContext);
  const { setSortType } = sortContext;
  const {
    setActiveOptionText,
    checkMark,
    setCheckMark,
    isDropDownOpen,
    setIsDropDownOpen,
    handleKeyPress,
  } = sortingData;

  return (
    <div
      className={styles.option}
      onClick={() => {
        setSortType(option);
        setActiveOptionText(option);
        setCheckMark(index);
        setIsDropDownOpen(!isDropDownOpen);
        window.scrollTo(0, 0);
      }}
      onKeyPress={(e) => {
        setCheckMark(index);
        handleKeyPress(e);
      }}
      tabIndex="0"
    >
      {option}
      {checkMark === index && (
        <img className={styles.checkMark} src={checkMarkIcon} alt="checkmark" />
      )}
    </div>
  );
};
