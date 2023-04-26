import { Routes, Route, Navigate } from 'react-router-dom';
import { TweetsPage } from 'pages/TweetsPage/TweetsPage';
import { HomePage } from 'pages/HomePage/HomePage';
import { Navbar } from 'components/NavBar/NavBar';

export const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/tweets" element={<TweetsPage />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      {/* <TweetsPage /> */}
    </div>
  );
};
