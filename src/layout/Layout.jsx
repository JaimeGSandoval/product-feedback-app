import { Header } from './Header/Header';
import { FeedbackBar } from './FeedbackBar/FeedbackBar';
// create suggestions page with the header and sort bar. Move header and sort bar out of this module

export const Layout = () => {
  return (
    <div style={{ width: '100%', height: '100%' }}>
      <Header />
      <FeedbackBar />
    </div>
  );
};
