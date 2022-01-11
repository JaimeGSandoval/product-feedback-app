import { FeedbackBar } from './components/FeedbackBar';
import { SuggestionList } from './components/SuggestionsList/SuggestionList';
import { Header } from '../../components/Header';

export const SuggestionsPage = () => {
  return (
    <>
      <Header />
      <FeedbackBar />
      <SuggestionList />
    </>
  );
};
