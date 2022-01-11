// detect keyboard users

export const keyboardDetectInit = () => {
  const keyboardUserCssClass = 'keyboardUser';

  function setIsKeyboardUser(isKeyboard) {
    const { body } = document;
    if (isKeyboard) {
      body.classList.contains(keyboardUserCssClass) ||
        body.classList.add(keyboardUserCssClass);
    } else {
      body.classList.remove(keyboardUserCssClass);
    }
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Tab') {
      setIsKeyboardUser(true);
    }
  });
  document.addEventListener('click', (e) => {
    // Pressing ENTER on buttons triggers a click event with coordinates to 0
    setIsKeyboardUser(!e.screenX && !e.screenY);
  });

  document.addEventListener('mousedown', (e) => {
    setIsKeyboardUser(false);
  });
};
