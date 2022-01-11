import { Suggestion } from '../Suggestion/Suggestion';
import { EmptySuggestion } from '../EmptySuggestion';
import styles from './_suggestionList.module.scss';
import data from '../../../../data/data.json';

export const SuggestionList = () => {
  return (
    <main className={styles.container}>
      {!data.productRequests ? (
        <EmptySuggestion />
      ) : (
        data.productRequests.map((request) => (
          <Suggestion request={request} key={request.title} />
        ))
      )}
    </main>
  );
};
