import { useState } from 'react';
import { createPortal } from 'react-dom';
import { Button } from './Button';
import RoadMap from './RoadMap';
import styles from './_mobileModal.module.scss';

const BUTTON_TITLES = ['All', 'UI', 'UX', 'Enhancement', 'Bug', 'Feature'];

const roadMapData = [
  { category: 'planned', tasks: 2 },
  { category: 'in-progress', tasks: 6 },
  { category: 'live', tasks: 4 },
];

export const MobileModal = ({ isModalOpen }) => {
  const [active, setActive] = useState(0);

  if (!isModalOpen) return null;

  const handleClick = (index) => {
    setActive(index);
  };

  return createPortal(
    <div className={styles.modalContainer}>
      <div className={styles.modal}>
        <nav>
          <div className={styles.buttonsContainer}>
            {BUTTON_TITLES.map((title, index) => {
              return (
                <Button
                  title={title}
                  index={index}
                  handleClick={handleClick}
                  key={title}
                  activeButton={active}
                />
              );
            })}
          </div>

          <div className={styles.roadMapContainer}>
            <div className={styles.titleContainer}>
              <span className={styles.roadMapTitle}>roadmap</span>
              <span className={styles.viewLink}>view</span>
            </div>
            {roadMapData.map((data) => {
              return <RoadMap data={data} key={data.category} />;
            })}
          </div>
        </nav>
      </div>
    </div>,
    document.getElementById('modal_root')
  );
};
