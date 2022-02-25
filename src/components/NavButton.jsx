import { useEffect, useRef, useContext } from 'react';
import { CategoryContext } from './context/category.context';

export const NavButton = ({
  handleClick,
  activeButton,
  index,
  title,
  styles,
}) => {
  const tabRef = useRef();
  const categoryData = useContext(CategoryContext);
  const { setCategory } = categoryData;

  useEffect(() => {
    if (index === 0) {
      tabRef.current.focus();
    }
  }, [index]);

  const addBtnHoverBgColor = (e) => {
    if (e.target.classList.contains(styles.activeButton)) return;
    e.target.classList.add(styles.hover);
  };

  const removeBtnHoverBgColor = (e) => {
    e.target.classList.remove(styles.hover);
  };

  return (
    <button
      className={`${styles.buttons} ${
        activeButton === index && styles.activeButton
      }`}
      onClick={() => {
        window.sessionStorage.setItem('scrollPosition', 0);
        setCategory(
          title === 'UI' || title === 'UX' ? title : title.toLowerCase()
        );
        handleClick(index);
      }}
      onMouseEnter={addBtnHoverBgColor}
      onMouseLeave={removeBtnHoverBgColor}
      ref={index === 0 ? tabRef : null}
      tabIndex="0"
    >
      {title}
    </button>
  );
};
