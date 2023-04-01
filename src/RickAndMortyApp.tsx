import { FC, lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ErrorBoundary from './comps/ErrorBoundary';
import Spinner from './comps/ui/Spinner/Spinner';

const Home = lazy(() => import('./pages/Home/Home'));

const CharacterDetail = lazy(
  () => import('./pages/CharacterDetail/CharacterDetail')
);

const RickAndMortyApp: FC = () => {
  return (
    <ErrorBoundary>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Suspense fallback={<Spinner />}>
                <Home />
              </Suspense>
            }
          />
          <Route
            path="/character/:id"
            element={
              <Suspense fallback={<Spinner />}>
                <CharacterDetail />
              </Suspense>
            }
          />
          <Route
            path="*"
            element={
              <Suspense fallback={<Spinner />}>
                <Home />
              </Suspense>
            }
          />
        </Routes>
      </BrowserRouter>
    </ErrorBoundary>
  );
};

export default RickAndMortyApp;
