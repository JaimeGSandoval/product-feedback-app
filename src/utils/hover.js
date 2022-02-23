export const addLikesHoverBgColor = (e, styles) =>
  e.target.classList.add(styles.hover);

export const removeLikesHoverBgColor = (e, styles) =>
  e.target.classList.remove(styles.hover);

export const addHoverColor = (elRef, styles) =>
  elRef.current.classList.add(styles.hoverTextColor);

export const removeHoverColor = (elRef, styles) =>
  elRef.current.classList.remove(styles.hoverTextColor);
