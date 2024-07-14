import { createElement, lazy, memo } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ROUTE_PATHS } from './constants/index.tsx';
import { withSuspense } from './hoc/with-suspense.tsx';

const HomePage = withSuspense(lazy(() => import('./pages/home-page.tsx')));
const KeralaMap = withSuspense(lazy(() => import('./pages/kerala-map.tsx')));
const USAMap = withSuspense(lazy(() => import('./pages/usa-map.tsx')));
const CurrentLocationMap = withSuspense(lazy(() => import('./pages/current-location-map.tsx')));
const NotFoundPage = withSuspense(lazy(() => import('./pages/not-found-page.tsx')));

export const AppRouter = memo(() => (
  <BrowserRouter>
    <Routes>
      <Route path={ROUTE_PATHS.home} element={createElement(HomePage)} />
      <Route path="map" >
        <Route path="kerala" element={createElement(KeralaMap)} />
        <Route path="usa" element={createElement(USAMap)} />
        <Route path="you-are-here" element={createElement(CurrentLocationMap)} />
      </Route>
      <Route path={ROUTE_PATHS.wildcard} element={createElement(NotFoundPage)} />
    </Routes>
  </BrowserRouter>
));

