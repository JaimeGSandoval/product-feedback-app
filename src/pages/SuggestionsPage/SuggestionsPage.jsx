import { FeedbackBar } from './components/FeedbackBar';
import { SuggestionList } from './components/SuggestionsList/SuggestionList';
import { RenderTypeProvider } from '../../components/MobileModal/context';
import { Header } from '../../components/Header';

export const SuggestionsPage = () => {
  return (
    <>
      <Header />
      <FeedbackBar />
      <RenderTypeProvider>
        <SuggestionList />
      </RenderTypeProvider>
    </>
  );
};
