import { createPortal } from 'react-dom';
import styles from './_mobileModal.module.scss';

export const MobileModal = ({ isMenuOpen, setMenu }) => {
  if (!isMenuOpen) return null;

  //  onClick={setMenu}

  return createPortal(
    <div className={styles.modalContainer}>
      <div className={styles.modal}>
        <nav>
          <div className={styles.buttonsContainer}>
            <div className={styles.buttonsRow}>
              <button className={`${styles.buttons} ${styles.topButtons}`}>
                All
              </button>
              <button className={`${styles.buttons} ${styles.topButtons}`}>
                UI
              </button>
              <button className={`${styles.buttons} ${styles.topButtons}`}>
                UX
              </button>
            </div>

            <div className={styles.buttonsRow}>
              <button className={styles.buttons}>Enhancement</button>
              <button className={styles.buttons}>Bug</button>
            </div>

            <div className={styles.buttonsRow}>
              <button className={styles.buttons}>Feature</button>
            </div>
          </div>
        </nav>
      </div>
    </div>,
    document.getElementById('modal_root')
  );
};
