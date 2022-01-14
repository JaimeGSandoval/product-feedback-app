import { useState } from 'react';
import { createPortal } from 'react-dom';
import { Link } from 'react-router-dom';
import { Button } from './Button';
import RoadMap from './RoadMap';
import styles from './_mobileModal.module.scss';

const BUTTON_TITLES = ['All', 'UI', 'UX', 'Enhancement', 'Bug', 'Feature'];

const roadMapData = [
  { category: 'planned', tasks: 2 },
  { category: 'in-progress', tasks: 6 },
  { category: 'live', tasks: 4 },
];

export const MobileModal = ({ isModalOpen, handleSetModal }) => {
  const [active, setActive] = useState(0);

  if (!isModalOpen) return null;

  const handleModalClick = (e) => {
    if (e.target.matches('[data-modal]')) {
      handleSetModal(!isModalOpen);
    }
  };

  const handleClick = (index) => {
    setActive(index);
  };

  return createPortal(
    <div
      className={styles.modalContainer}
      onClick={handleModalClick}
      data-modal
    >
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
                  isModalOpen={isModalOpen}
                />
              );
            })}
          </div>

          <div className={styles.roadMapContainer}>
            <div className={styles.titleContainer}>
              <span className={styles.roadMapTitle}>roadmap</span>
              <Link to="/roadmap" className={styles.viewLink} tabIndex="0">
                view
              </Link>
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
