import data from '../../../../data/data.json';
import { GoBackBtn } from '../../../../components/GoBackBtn';
import { Suggestion } from '../Suggestion/Suggestion';
import styles from './_feedbackDetail.module.scss';

const { productRequests } = data; // simulate retrieving params id from url w/ useParams()
// console.log(productRequests[1].comments);

productRequests[1].comments.forEach((comment) => {
  if (comment.replies) {
    console.log(comment.replies);
  } else {
    console.log('bankai');
  }
});

export const FeedbackDetail = () => {
  return (
    <div className={styles.container}>
      <div className={styles.buttonBox}>
        <GoBackBtn styles={styles} />
        <button className={styles.editButton}>edit feedback</button>
      </div>

      <section className={styles.outerContainer}>
        <div className={styles.innerContainer}>
          <Suggestion productRequest={productRequests[1]} />
        </div>
      </section>
    </div>
  );
};
