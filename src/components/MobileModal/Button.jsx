import { useEffect, useRef } from 'react';
import styles from './_mobileModal.module.scss';

export const Button = ({
  handleClick,
  activeButton,
  index,
  title,
  isModalOpen,
}) => {
  const tabRef = useRef();

  useEffect(() => {
    if (index === 0) {
      tabRef.current.focus();
    }
  }, [index]);

  return (
    <button
      className={`${styles.buttons} ${
        activeButton === index && styles.activeButton
      }`}
      onClick={() => handleClick(index)}
      ref={index === 0 ? tabRef : null}
      tabIndex="0"
    >
      {title}
    </button>
  );
};
