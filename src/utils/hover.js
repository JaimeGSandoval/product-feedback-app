const isNotMobile = window.matchMedia('(min-width: 992px)');

export const addLikesHoverBgColor = (e, styles) => {
  if (isNotMobile.matches) e.target.classList.add(styles.hover);
};

export const removeLikesHoverBgColor = (e, styles) =>
  e.target.classList.remove(styles.hover);

export const addHoverColor = (elRef, styles) => {
  if (isNotMobile.matches) elRef.current.classList.add(styles.hoverTextColor);
};

export const removeHoverColor = (elRef, styles) =>
  elRef.current.classList.remove(styles.hoverTextColor);
