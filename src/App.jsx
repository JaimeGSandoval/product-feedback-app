import { Routes, Route } from 'react-router-dom';
import { SuggestionsPage } from './pages/SuggestionsPage';
import { AddFeedbackPage } from './pages/AddFeedbackPage';
import { FeedbackDetailPage } from './pages/FeedbackDetailPage';
import { EditFeedback } from './pages/FeedbackDetailPage/components/EditFeedback';
import { NotFoundPage } from './pages/NotFoundPage';
import './index.scss';

function App() {
  return (
    <div className="App">
      <main>
        <Routes>
          <Route path="/" element={<SuggestionsPage />} />
          <Route path="/add-feedback" element={<AddFeedbackPage />} />
          <Route path="/feedback-detail" element={<FeedbackDetailPage />} />
          <Route path="/edit-feedback" element={<EditFeedback />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
