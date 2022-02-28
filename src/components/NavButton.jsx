import { useEffect, useRef, useContext } from 'react';
import { CategoryContext } from './context/category.context';
import { SortContext } from '../pages/SuggestionsPage/components/sort.context';
import { DispatchContext } from '../context/requests.context';

export const NavButton = ({ handleClick, active, index, title, styles }) => {
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

  const addBtnHoverBgColor = (e) => {
    if (e.target.classList.contains(styles.activeButton)) return;
    e.target.classList.add(styles.hover);
  };

  const removeBtnHoverBgColor = (e) => {
    e.target.classList.remove(styles.hover);
  };

  const setSessionStorage = (scrollPosition, categoryVal) => {
    sessionStorage.setItem('scrollPosition', scrollPosition);
    sessionStorage.setItem('category', categoryVal);
    sessionStorage.setItem('activeIndex', index);
  };

  return (
    <button
      className={`${styles.buttons} ${active === index && styles.activeButton}`}
      onClick={() => {
        setSessionStorage(0, categoryType);
        setCategory(categoryType);
        handleClick(index);
        dispatch({
          type: 'sort',
          sortType: sortType,
        });
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
