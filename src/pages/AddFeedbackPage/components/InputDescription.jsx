export const InputDescription = ({ label, description, id, styles }) => {
  return (
    <>
      <label className={styles.title} htmlFor={id}>
        {label}
      </label>
      <span className={styles.titleDetail}>{description}</span>
    </>
  );
};
