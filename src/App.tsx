import { useState } from 'react';
import InfoPage from './components/InfoPage';
import MainPage from './components/MainPage';

type ViewMode = 'info' | 'register';

export default function App() {
  const [viewMode, setViewMode] = useState<ViewMode>('info');

  return (
    <>
      {viewMode === 'info' ? (
        <InfoPage onNavigateToRegistration={() => setViewMode('register')} />
      ) : (
        <MainPage onBackToInfo={() => setViewMode('info')} />
      )}
    </>
  );
}