import { lazy, memo, Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { HomePage } from './pages/home-page.tsx';

const KeralaMap = lazy(() => import('./pages/kerala-map.tsx'));
const USAMap = lazy(() => import('./pages/usa-map.tsx'));

export const AppRouter = memo(() => {
  return <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="map" >
        <Route path="kerala" element={
          <Suspense fallback={'Loading '}>
            <KeralaMap />
          </Suspense>
        } />
        <Route path="usa" element={
          <Suspense fallback={'Loading '}>
            <USAMap />
          </Suspense>
        } />
        <Route path="usa" element={<USAMap />} />
      </Route>
    </Routes>
  </BrowserRouter>
});

