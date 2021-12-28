import faceIcon from '../../../../assets/icons/empty.svg';
import styles from './_emptySuggestion.module.scss';

export const EmptySuggestion = () => {
  return (
    <>
      <section className={styles.container}>
        <div className={styles.emptyIconBox}>
          <img
            src={faceIcon}
            className={styles.faceIcon}
            alt="Person with magnifying glass"
          />
        </div>

        <div className={styles.textBox}>
          <h1 className={styles.title}>There is no feedback yet.</h1>
          <p className={styles.description}>
            Got a suggestion? Found a bug that needs to be squashed? We love
            hearing about new ideas to improve our app.
          </p>
        </div>
        <button className={styles.feedBackBtn_empty}>
          <span className={styles.plusSign}>&#43;</span> add feedback
        </button>
      </section>
    </>
  );
};
