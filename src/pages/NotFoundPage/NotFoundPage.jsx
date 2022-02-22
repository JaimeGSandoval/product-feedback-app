import { useNavigate } from 'react-router-dom';
import styles from './_notFoundPage.module.scss';
import emptySvg from '../../assets/icons/empty.svg';

export const NotFoundPage = () => {
  const navigate = useNavigate();
  console.log(window.location);

  setTimeout(() => navigate('/', { replace: true }), 3000);

  return (
    <>
      <main className={styles.container}>
        <img src={emptySvg} alt="" />
        <p className={styles.notFoundText}>Page not found!</p>
        <p className={styles.notFoundText}>Redirecting to Home Page</p>
      </main>
    </>
  );
};
