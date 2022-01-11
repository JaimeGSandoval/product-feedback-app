import styles from './FeedbackForm/_feedbackForm.module.scss';

export const InputDescription = ({ label, description, id }) => {
  return (
    <>
      <label className={styles.title} htmlFor={id}>
        {label}
      </label>
      <span className={styles.titleDetail}>{description}</span>
    </>
  );
};
