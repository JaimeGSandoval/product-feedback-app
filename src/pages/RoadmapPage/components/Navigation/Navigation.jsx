import { useNavigate } from 'react-router-dom';
import { AddFeedBackBtn } from '../../../../components/AddFeedBackBtn';
import { GoBackBtn } from '../../../../components/GoBackBtn';
import styles from './_navigation.module.scss';

export const Navigation = () => {
  const navigate = useNavigate();
  const goBack = () => navigate(-1);

  return (
    <nav className={styles.nav}>
      <div className={styles.container}>
        <div className={styles.goBackBtnBox}>
          <GoBackBtn styles={styles} goBack={goBack} />
          <span className={styles.navText}>Roadmap</span>
        </div>
        <div>
          <AddFeedBackBtn styles={styles} />
        </div>
      </div>
    </nav>
  );
};
