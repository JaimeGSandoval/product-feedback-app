import { useState } from 'react';
import styles from './_header.module.scss';
import mobileBgWebp from '../../assets/images/mobile/bg_header_sm.webp';
import mobileBgPng from '../../assets/images/mobile/bg_header_sm.png';
import tabletBgWebp from '../../assets/images/tablet/bg_header_md.webp';
import tabletBgPng from '../../assets/images/tablet/bg_header_md.png';
import desktopBgWebp from '../../assets/images/desktop/bg_header_lg.webp';
import desktopBgPng from '../../assets/images/desktop/bg_header_lg.png';
import hamburger from '../../assets/icons/hamburger.svg';
import close from '../../assets/icons/close.svg';
import { MobileModal } from '../MobileModal';

export const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSetModal = () => setIsModalOpen(!isModalOpen);

  return (
    <>
      <header className={styles.header}>
        <picture>
          <source
            srcSet={`${desktopBgWebp}, 1024w, ${desktopBgPng} 1024w`}
            media="(min-width: 1024px)"
            type="image/webp"
          />
          <source
            srcSet={`${tabletBgWebp}, 768w, ${tabletBgPng} 768w`}
            media="(min-width: 768px)"
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
            <span className={styles.headerText}>frontend mentor</span>
            <span className={styles.secondaryHeaderText}>feedback board</span>
          </div>
          <div className={styles.hamburgerContainer}>
            <img
              onClick={handleSetModal}
              src={isModalOpen ? close : hamburger}
              className={styles.hamburger}
              alt="mobile nav menu"
            />
          </div>
        </div>
      </header>
      <MobileModal isModalOpen={isModalOpen} />
    </>
  );
};
