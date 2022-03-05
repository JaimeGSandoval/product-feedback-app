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
  };

  const setSortingData = (optionVal, indexVal, dropdownVal) => {
    setSortType(optionVal);
    setActiveOptionText(optionVal);
    setCheckMark(indexVal);
    setIsDropDownOpen(!dropdownVal);
  };

  const handleClick = (optionVal, indexVal, dropdownVal) => {
    sessionStorage.setItem('scrollPosition', 0);
    setSortingData(optionVal, indexVal, dropdownVal);
    setSessionStorage(optionVal, indexVal);
  };

  return (
    <div
      className={styles.option}
      onClick={() => {
        handleClick(option, index, isDropDownOpen);
      }}
      onKeyPress={(e) => {
        sessionStorage.setItem('scrollPosition', 0);
        handleKeyPress(e);
        setSortingData(option, index, isDropDownOpen);
        setSessionStorage(option, index);
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
