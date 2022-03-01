import { useContext } from 'react';
import { SortContext } from '../context/sort.context';
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

  const setSessionStorage = (optionVal, indexVal) => {
    sessionStorage.setItem('sortType', optionVal);
    sessionStorage.setItem('checkmark', indexVal);
    sessionStorage.setItem('scrollPosition', 0);
  };

  const setSortingData = (optionVal, indexVal, dropdownVal) => {
    setSortType(optionVal);
    setActiveOptionText(optionVal);
    setCheckMark(indexVal);
    setIsDropDownOpen(!dropdownVal);
  };

  return (
    <div
      className={styles.option}
      onClick={() => {
        setSortingData(option, index, isDropDownOpen);
        setSessionStorage(option, index);
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
