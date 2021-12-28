import styles from './_feedBackButton.module.scss';

export const FeedBackButton = () => {
  return (
    <button>
      <span className={styles.plusSign}>&#43;</span> add feedback
    </button>
  );
};
