import { useState, useContext } from 'react';
import { RequestsContext } from '../../../../context/requests.context';
import { Request } from '../Request';
import { RequestButton } from './RequestButton';
import styles from './_requestList.module.scss';

export const RequestList = () => {
  const [inProgress, setInProgress] = useState(true);
  const [planned, setPlanned] = useState(false);
  const [live, setLive] = useState(false);
  const requests = useContext(RequestsContext);
  const PLANNED_REQUESTS = requests.filter(
    (request) => request.status === 'planned'
  );

  const IN_PROGRESS_REQUESTS = requests.filter(
    (request) => request.status === 'in-progress'
  );

  const LIVE_REQUESTS = requests.filter((request) => request.status === 'live');

  const BUTTON_DATA = [
    {
      stateVal: planned,
      borderStyle: styles.peachBottomBorder,
      callbackOrder: [setInProgress, setLive, setPlanned],
      status: 'Planned',
      numOfRequests: PLANNED_REQUESTS.length,
      key: Math.floor(Math.random() * 1000),
    },
    {
      stateVal: inProgress,
      borderStyle: styles.purpleBottomBorder,
      callbackOrder: [setPlanned, setLive, setInProgress],
      status: 'Planned',
      numOfRequests: IN_PROGRESS_REQUESTS.length,
      key: Math.floor(Math.random() * 1000),
    },
    {
      stateVal: live,
      borderStyle: styles.cyanBottomBorder,
      callbackOrder: [setPlanned, setInProgress, setLive],
      status: 'Live',
      numOfRequests: LIVE_REQUESTS.length,
      key: Math.floor(Math.random() * 1000),
    },
  ];

  const renderedButtons = BUTTON_DATA.map((data) => (
    <RequestButton buttonData={data} styles={styles} key={data.key} />
  ));

  const STATE_DATA = {
    inProgress,
    planned,
    live,
  };

  const handleRenderRequests = (requests) => {
    return requests.map((request) => {
      return (
        <Request
          request={request}
          stateData={STATE_DATA}
          key={request.requestID}
        />
      );
    });
  };

  return (
    <>
      <div className={styles.roadmapBtnsContainer}>
        <div className={styles.roadmapBtnsBox}>{renderedButtons}</div>
      </div>
      <section className={styles.container}>
        <header className={styles.header}>
          <h1 className={styles.headerTitle}>
            {planned && `Planned (${PLANNED_REQUESTS.length})`}
            {inProgress && `In-Progress (${IN_PROGRESS_REQUESTS.length})`}
            {live && `Live (${LIVE_REQUESTS.length})`}
          </h1>
          <span className={styles.description}>
            {planned && 'Ideas prioritized for research'}
            {inProgress && 'Features currently being developed'}
            {live && 'Released features'}
          </span>
        </header>

        <div className={styles.listContainer}>
          {planned && handleRenderRequests(PLANNED_REQUESTS)}
          {inProgress && handleRenderRequests(IN_PROGRESS_REQUESTS)}
          {live && handleRenderRequests(LIVE_REQUESTS)}
        </div>
      </section>
    </>
  );
};
