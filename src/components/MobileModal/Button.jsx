import React from 'react';
import styles from './_mobileModal.module.scss';

export const Button = ({ handleClick, activeButton, index, title }) => {
  return (
    <button
      className={`${styles.buttons} ${
        activeButton === index ? styles.activeButton : ''
      }`}
      onClick={() => handleClick(index)}
    >
      {title}
    </button>
  );
};
