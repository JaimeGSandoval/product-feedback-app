import { useState, useContext } from 'react';
import { createPortal } from 'react-dom';
import { Link } from 'react-router-dom';
import { RequestsContext } from '../../context/requests.context';
import { NavButton } from '../NavButton';
import RoadMapData from '../RoadMap';
import styles from './_mobileModal.module.scss';

export const MobileModal = ({ isModalOpen, setIsModalOpen }) => {
  const storageIndexVal = JSON.parse(sessionStorage.getItem('activeIndex'));
  const [active, setActive] = useState(storageIndexVal || 0);
  const requests = useContext(RequestsContext);
  const BUTTON_TITLES = ['All', 'UI', 'UX', 'Enhancement', 'Bug', 'Feature'];

  if (!isModalOpen) return null;

  const roadmapRequests = requests.filter(
    (request) => request.status !== 'suggestion'
  );

  const tasksTotals = {
    planned: 0,
    'in-progress': 0,
    live: 0,
  };

  roadmapRequests.forEach((request) => {
    tasksTotals[request.status] += 1;
  });

  const roadMapData = [
    { status: 'planned', tasks: tasksTotals['planned'] },
    { status: 'in-progress', tasks: tasksTotals['in-progress'] },
    { status: 'live', tasks: tasksTotals['live'] },
  ];

  const handleModalClick = (e) => {
    if (e.target.matches('[data-modal]')) {
      setIsModalOpen(!isModalOpen);
    }
  };

  return createPortal(
    <div
      className={styles.modalContainer}
      onClick={handleModalClick}
      data-modal
    >
      <div className={styles.modal}>
        <nav className={styles.nav}>
          <div className={styles.buttonsContainer}>
            <div className={styles.buttonBox}>
              {BUTTON_TITLES.map((title, index) => {
                return (
                  <NavButton
                    title={title}
                    index={index}
                    setActive={setActive}
                    key={title}
                    active={active}
                    styles={styles}
                  />
                );
              })}
            </div>
          </div>

          <div className={styles.roadMapContainer}>
            <div className={styles.titleContainer}>
              <span className={styles.roadMapTitle}>roadmap</span>
              <Link to="/roadmap" className={styles.viewLink} tabIndex="0">
                view
              </Link>
            </div>
            {roadMapData.map((data) => {
              return (
                <RoadMapData
                  roadmapData={data}
                  key={data.status}
                  styles={styles}
                />
              );
            })}
          </div>
        </nav>
      </div>
    </div>,
    document.getElementById('modal_root')
  );
};
