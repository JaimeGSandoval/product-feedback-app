import { Routes, Route } from 'react-router-dom';
import { SuggestionsPage } from './pages/SuggestionsPage';
import { AddFeedbackPage } from './pages/AddFeedbackPage';
import { NotFoundPage } from './pages/NotFoundPage';
import './index.scss';

function App() {
  return (
    <div className="App">
      <main>
        <Routes>
          <Route path="/" element={<SuggestionsPage />} />
          <Route path="/add-feedback" element={<AddFeedbackPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
