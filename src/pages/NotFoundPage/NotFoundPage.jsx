import { useNavigate } from 'react-router-dom';
import { Header } from '../../components/Header';
import styles from './_notFoundPage.module.scss';

export const NotFoundPage = () => {
  const navigate = useNavigate();

  setTimeout(() => navigate('/', { replace: true }), 2000);

  return (
    <>
      <Header />
      <div className={styles.container}>
        <p className={styles.notFoundText}>Page not found!</p>
        <p className={styles.notFoundText}>
          Redirecting to the Suggestions Page
        </p>
      </div>
    </>
  );
};
