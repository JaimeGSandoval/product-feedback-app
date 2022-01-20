import { useContext } from 'react';
import { RequestsContext } from '../../../../context/requests.context';
import { Suggestion } from '../Suggestion/Suggestion';
import { EmptySuggestion } from '../EmptySuggestion';
import styles from './_suggestionList.module.scss';

import { RenderTypeContext } from '../../../../components/MobileModal/context';

export const SuggestionList = () => {
  const retrievedRequests = useContext(RequestsContext);
  const renderType = useContext(RenderTypeContext);
  let { type } = renderType;

  let renderedRequests = retrievedRequests.filter((req) => req.status === type);

  return (
    <main className={styles.container}>
      {!renderedRequests.length && <EmptySuggestion />}
      {renderedRequests.map((request) => (
        <Suggestion request={request} key={request.title} />
      ))}
    </main>
  );
};
