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

  return (
    <button
      className={`${styles.buttons} ${
        activeButton === index && styles.activeButton
      }`}
      onClick={() => {
        setCategory(
          title === 'UI' || title === 'UX' ? title : title.toLowerCase()
        );
        handleClick(index);
      }}
      ref={index === 0 ? tabRef : null}
      tabIndex="0"
    >
      {title}
    </button>
  );
};
