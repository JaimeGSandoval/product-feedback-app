import { Routes, Route } from 'react-router-dom';
import { SuggestionsPage } from './pages/SuggestionsPage';
import { AddFeedbackPage } from './pages/AddFeedbackPage';
import { FeedbackDetailPage } from './pages/FeedbackDetailPage';
import { RoadmapPage } from './pages/RoadmapPage';
import { NotFoundPage } from './pages/NotFoundPage';
import { keyboardDetectInit } from './utils/keyboardUserDetect';
import './index.scss';

// var docWidth = document.documentElement.offsetWidth;
// [].forEach.call(document.querySelectorAll('*'), function (el) {
//   if (el.offsetWidth > docWidth) {
//     console.log(el);
//   }
// });

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<SuggestionsPage />} />
        <Route path="/add-feedback" element={<AddFeedbackPage />} />
        <Route
          path="/feedback-detail/:requestID"
          element={<FeedbackDetailPage />}
        />
        <Route path="/roadmap" element={<RoadmapPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

keyboardDetectInit();

export default App;
