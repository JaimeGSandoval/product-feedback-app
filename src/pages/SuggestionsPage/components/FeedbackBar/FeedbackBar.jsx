import { useState, useEffect, useRef } from 'react';
import { SelectOption } from './SelectOption';
import { AddFeedBackBtn } from '../../../../components/AddFeedBackBtn';
import { Modal } from '../Modal/Modal';
import arrowUp from '../../../../assets/icons/arrow-up-white.svg';
import arrowDown from '../../../../assets/icons/arrow-down-white.svg';
import styles from './_feedbackBar.module.scss';
import lightbulb from '../../../../assets/icons/lightbulb.svg';

export const FeedbackBar = ({ requestsLength }) => {
  const sortTypeSessionStorage = window.sessionStorage.getItem('sortType');
  const checkmarkSessionStorage = window.sessionStorage.getItem('checkmark');
  const [activeOptionText, setActiveOptionText] = useState(
    sortTypeSessionStorage || 'most upvotes'
  );
  const [checkMark, setCheckMark] = useState(
    JSON.parse(checkmarkSessionStorage) || 0
  );
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);
  const arrow = isDropDownOpen ? arrowUp : arrowDown;
  const containerRef = useRef(null);
  const SELECT_OPTIONS = [
    'most upvotes',
    'least upvotes',
    'most comments',
    'least comments',
  ];

  const handleDropdown = (e) => {
    const closest = e.target.closest('.sortTabContainer');
    if (closest || e.target === window) {
      setIsDropDownOpen(!isDropDownOpen);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' || e.key === 'Return') {
      setActiveOptionText(e.target.innerText);
      setIsDropDownOpen(!isDropDownOpen);
    }
  };

  const SORTING_DATA = {
    isDropDownOpen,
    checkMark,
    setActiveOptionText,
    setCheckMark,
    setIsDropDownOpen,
    handleKeyPress,
  };

  useEffect(() => {
    const clickOutsideDropdown = (e) => {
      if (
        isDropDownOpen &&
        containerRef.current &&
        !containerRef.current.contains(e.target)
      ) {
        setIsDropDownOpen(false);
      }
    };

    document.addEventListener('mousedown', clickOutsideDropdown);

    return () => {
      document.removeEventListener('mousedown', clickOutsideDropdown);
    };
  }, [isDropDownOpen]);

  return (
    <>
      {isDropDownOpen && (
        <Modal
          isDropDownOpen={isDropDownOpen}
          setIsDropDownOpen={setIsDropDownOpen}
        />
      )}
      <div className={styles.container}>
        <div className={styles.contentBox}>
          <div className={styles.suggestionTextBox}>
            <img src={lightbulb} alt="" />
            <span className={styles.suggestionsLengthText}>
              {requestsLength}
              {requestsLength === 0 || requestsLength > 1
                ? ' Suggestions'
                : ' Suggestion'}
            </span>
          </div>
          <div
            className={styles.selectContainer}
            onClick={handleDropdown}
            ref={containerRef}
          >
            <div className="sortTabContainer">
              <span className={styles.sortText}>Sort by : </span>
              <span
                className={styles.sortTitle}
                onKeyPress={handleKeyPress}
                tabIndex="0"
              >
                {activeOptionText}
                <img className={styles.arrow} src={arrow} alt="" />
              </span>
            </div>
            {isDropDownOpen && (
              <div className={styles.selectOptions}>
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
            )}
          </div>
          <AddFeedBackBtn styles={styles} />
        </div>
      </div>
    </>
  );
};
