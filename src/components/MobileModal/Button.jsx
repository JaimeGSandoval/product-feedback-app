import { useEffect, useRef, useContext } from 'react';
import styles from './_mobileModal.module.scss';
import { RenderTypeContext } from './context';

export const Button = ({ handleClick, activeButton, index, title }) => {
  const tabRef = useRef();
  const renderType = useContext(RenderTypeContext);
  const { setType } = renderType;

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
      onClick={() => {
        setType('planned');
        handleClick(index);
      }}
      ref={index === 0 ? tabRef : null}
      tabIndex="0"
    >
      {title}
    </button>
  );
};
