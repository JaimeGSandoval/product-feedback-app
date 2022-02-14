import { useState } from 'react';
import { MobileModal } from '../MobileModal';
import mobileBgWebp from '../../assets/images/mobile/bg_header_sm.webp';
import mobileBgPng from '../../assets/images/mobile/bg_header_sm.png';
import desktopBgWebp from '../../assets/images/desktop/bg_header_lg.webp';
import desktopBgPng from '../../assets/images/desktop/bg_header_lg.png';
import hamburger from '../../assets/icons/hamburger.svg';
import close from '../../assets/icons/close.svg';
import styles from './_mobileHeader.module.scss';

export const MobileHeader = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSetModal = (e) => {
    setIsModalOpen(!isModalOpen);
  };

  const handleKeyPressModal = (e) => {
    if (e.key === 'Enter') {
      setIsModalOpen(!isModalOpen);
    }
  };

  return (
    <>
      <header className={`${styles.header} ${isModalOpen ? styles.fixed : ''}`}>
        <picture>
          <source
            srcSet={`${desktopBgWebp}, 1024w, ${desktopBgPng} 1024w`}
            media="(min-width: 1024px)"
            type="image/webp"
          />
          <source srcSet={mobileBgWebp} type="image/webp" />
          <img
            src={mobileBgPng}
            className={styles.headerBgImg}
            alt="header background"
          />
        </picture>
        <div className={styles.contentBox}>
          <div className={styles.textContainer}>
            <span className={styles.headerText}>dynamic devs</span>
            <span className={styles.secondaryHeaderText}>feedback board</span>
          </div>
          <div
            className={styles.hamburgerContainer}
            onClick={handleSetModal}
            onKeyPress={handleKeyPressModal}
            tabIndex="0"
          >
            <img
              className={styles.hamburger}
              src={isModalOpen ? close : hamburger}
              alt="mobile nav menu"
            />
          </div>
        </div>
      </header>
      <MobileModal isModalOpen={isModalOpen} handleSetModal={handleSetModal} />
    </>
  );
};
