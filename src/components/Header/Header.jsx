import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { RequestsContext } from '../../context/requests.context';
import { NavButton } from '../NavButton';
import RoadMap from '../RoadMap';
import tabletBgWebp from '../../assets/images/tablet/bg_header_md.webp';
import tabletBgPng from '../../assets/images/tablet/bg_header_md.png';
import styles from './_header.module.scss';

export const Header = () => {
  const [active, setActive] = useState(0);
  const requests = useContext(RequestsContext);

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

  const BUTTON_TITLES = ['All', 'UI', 'UX', 'Enhancement', 'Bug', 'Feature'];

  const handleClick = (index) => {
    setActive(index);
  };

  return (
    <header className={styles.header}>
      <div className={styles.imgBox}>
        <picture>
          <source
            srcSet={`${tabletBgWebp}, 768w`}
            media="(min-width: 768px)"
            type="image/webp"
          />
          <img src={tabletBgPng} alt="" />
        </picture>
        <div className={styles.textBox}>
          <span className={styles.titleText}>Dynamic Devs</span>
          <span className={styles.feedbackText}>Feedback Board</span>
        </div>
      </div>

      <nav className={styles.nav}>
        <div className={styles.buttonsContainer}>
          {BUTTON_TITLES.map((title, index) => {
            return (
              <NavButton
                title={title}
                index={index}
                handleClick={handleClick}
                key={title}
                activeButton={active}
                styles={styles}
              />
            );
          })}
        </div>
      </nav>

      <div className={styles.roadMapContainer}>
        <div className={styles.titleContainer}>
          <span className={styles.roadMapTitle}>roadmap</span>
          <Link to="/roadmap" className={styles.viewLink} tabIndex="0">
            view
          </Link>
        </div>
        {roadMapData.map((data) => {
          return (
            <RoadMap roadmapData={data} key={data.status} styles={styles} />
          );
        })}
      </div>
    </header>
  );
};
