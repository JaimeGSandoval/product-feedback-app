import { useState, useContext } from 'react';
import { createPortal } from 'react-dom';
import { Link } from 'react-router-dom';
import { RequestsContext } from '../../context/requests.context';
import { Button } from './Button';
import RoadMap from './RoadMap';
import styles from './_mobileModal.module.scss';

const BUTTON_TITLES = ['All', 'UI', 'UX', 'Enhancement', 'Bug', 'Feature'];

export const MobileModal = ({ isModalOpen, handleSetModal }) => {
  const [active, setActive] = useState(0);
  const requests = useContext(RequestsContext);

  if (!isModalOpen) return null;

  const roadmapRequests = requests.productRequests.filter(
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
              return <RoadMap roadmapData={data} key={data.category} />;
            })}
          </div>
        </nav>
      </div>
    </div>,
    document.getElementById('modal_root')
  );
};
