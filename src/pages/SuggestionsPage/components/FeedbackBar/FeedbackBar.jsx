import { useState } from 'react';
import { SelectOption } from './SelectOption';
import { AddFeedBackBtn } from '../../../../components/AddFeedBackBtn';
import arrowUp from '../../../../assets/icons/arrow-up-white.svg';
import arrowDown from '../../../../assets/icons/arrow-down-white.svg';
import styles from './_feedbackBar.module.scss';

const SELECT_OPTIONS = [
  'most upvotes',
  'least upvotes',
  'most comments',
  'least comments',
];

export const FeedbackBar = () => {
  const [activeOptionText, setActiveOptionText] = useState(SELECT_OPTIONS[0]);
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);
  const [checkMark, setCheckMark] = useState(0);

  const SORTING_DATA = {
    isDropDownOpen,
    checkMark,
    setActiveOptionText,
    setCheckMark,
    setIsDropDownOpen,
  };

  const arrow = isDropDownOpen ? arrowUp : arrowDown;

  const handleSort = (e) => {
    if (e.target.classList.contains(styles.sortText)) return;
    const closest = e.target.closest('.sortTabContainer');
    if (closest) {
      setIsDropDownOpen(!isDropDownOpen);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.contentBox}>
        <div className={styles.selectContainer} onClick={handleSort}>
          <div className={'sortTabContainer'}>
            <span className={styles.sortText}>sort by : </span>
            <span className={styles.sortTitle}>
              {activeOptionText}
              <img className={styles.arrow} src={arrow} alt="" />
            </span>
          </div>
          <div
            className={`${styles.selectOptions} ${
              isDropDownOpen ? styles.showDropDown : ''
            }`}
          >
            {SELECT_OPTIONS.map((option, index) => {
              return (
                <SelectOption
                  sortingData={SORTING_DATA}
                  option={option}
                  index={index}
                  key={option}
                />
              );
            })}
          </div>
        </div>
        <AddFeedBackBtn styles={styles} />
      </div>
    </div>
  );
};
