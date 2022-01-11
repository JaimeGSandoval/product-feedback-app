import { createPortal } from 'react-dom';

export const Modal = ({ isDropDownOpen, setIsDropDownOpen }) => {
  const handleModalClick = () => setIsDropDownOpen(!isDropDownOpen);

  return createPortal(
    <div
      onClick={handleModalClick}
      style={{
        position: 'fixed',
        top: '0',
        left: '0',
        width: '100%',
        height: '100vh',
        backgroundColor: 'transparent',
        zIndex: '2',
      }}
    ></div>,
    document.getElementById('background-modal')
  );
};
