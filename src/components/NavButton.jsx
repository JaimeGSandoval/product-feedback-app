import { useEffect, useRef, useContext } from 'react';
import { CategoryContext } from './context/category.context';
import { SortContext } from '../pages/SuggestionsPage/components/context/sort.context';
import { DispatchContext } from '../context/requests.context';

export const NavButton = ({ setActive, active, index, title, styles }) => {
  const tabRef = useRef();
  const categoryData = useContext(CategoryContext);
  const sortData = useContext(SortContext);
  const { setCategory } = categoryData;
  const { sortType } = sortData;
  const dispatch = useContext(DispatchContext);
  const categoryType =
    title === 'UI' || title === 'UX' ? title : title.toLowerCase();

  useEffect(() => {
    if (index === 0) {
      tabRef.current.focus();
    }
  }, [index]);

  const handleMouseEnter = (e) => {
    if (e.target.classList.contains(styles.activeButton)) return;
    e.target.classList.add(styles.hover);
  };

  const handleMouseLeave = (e) => {
    e.target.classList.remove(styles.hover);
  };

  const setSessionStorage = (scrollPosition, categoryVal) => {
    sessionStorage.setItem('scrollPosition', scrollPosition);
    sessionStorage.setItem('category', categoryVal);
    sessionStorage.setItem('activeIndex', index);
  };

  const handleClick = (categoryVal, indexVal) => {
    window.scrollTo(0, 0);
    setSessionStorage(0, categoryVal);
    setCategory(categoryVal);
    setActive(indexVal);
    dispatch({
      type: 'sort',
      sortType: sortType,
    });
  };

  return (
    <button
      className={`${styles.buttons} ${active === index && styles.activeButton}`}
      onClick={() => handleClick(categoryType, index)}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      ref={index === 0 ? tabRef : null}
      tabIndex="0"
    >
      {title}
    </button>
  );
};
