import { FeedbackBar } from './components/FeedbackBar';
import { SuggestionList } from './components/SuggestionsList/SuggestionList';
import { CategoryProvider } from '../../components/MobileModal/category.context';
import { Header } from '../../components/Header';

export const SuggestionsPage = () => {
  return (
    <>
      <CategoryProvider>
        <Header />
        <FeedbackBar />
        <SuggestionList />
      </CategoryProvider>
    </>
  );
};
