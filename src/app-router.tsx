import { createElement, lazy, memo } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Loader } from './components/loader.tsx';
import { withSuspense } from './hoc/with-suspense.tsx';

const HomePage = withSuspense(
  lazy(() => import('./pages/home-page.tsx')),
  createElement(Loader)
);
const KeralaMap = withSuspense(
  lazy(() => import('./pages/kerala-map.tsx')),
  createElement(Loader)
);
const USAMap = withSuspense(
  lazy(() => import('./pages/usa-map.tsx')),
  createElement(Loader)
);
const CurrentLocationMap = withSuspense(
  lazy(() => import('./pages/current-location-map.tsx')),
  createElement(Loader)
);

export const AppRouter = memo(() => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={createElement(HomePage)} />
      <Route path="map" >
        <Route path="kerala" element={createElement(KeralaMap)} />
        <Route path="usa" element={createElement(USAMap)} />
        <Route path="you-are-here" element={createElement(CurrentLocationMap)} />
      </Route>
    </Routes>
  </BrowserRouter>
));

