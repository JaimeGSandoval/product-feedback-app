import { Routes, Route } from 'react-router-dom';
import { SuggestionsPage } from './pages/SuggestionsPage';
import { AddFeedbackPage } from './pages/AddFeedbackPage';
import { FeedbackDetailPage } from './pages/FeedbackDetailPage';
import { EditFeedback } from './pages/FeedbackDetailPage/components/EditFeedback';
import { RoadmapPage } from './pages/RoadmapPage';
import { NotFoundPage } from './pages/NotFoundPage';
import { keyboardDetectInit } from './utils/keyboardUserDetect';
import './index.scss';

// const test = window.matchMedia('(min-width: 768px)');
// if (test.matches) {
//   console.log(test);
//   console.log('bankai');
// } else {
//   console.log('nope');
//   console.log(test);
// }

function App() {
  return (
    <div className="App">
      <main>
        <Routes>
          <Route path="/" element={<SuggestionsPage />} />
          <Route path="/add-feedback" element={<AddFeedbackPage />} />
          <Route path="/feedback-detail" element={<FeedbackDetailPage />} />
          <Route path="/edit-feedback" element={<EditFeedback />} />
          <Route path="/roadmap" element={<RoadmapPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
    </div>
  );
}

keyboardDetectInit();

export default App;
