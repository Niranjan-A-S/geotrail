import { createElement, lazy, memo } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Loader } from './components/loader.tsx';
import { withSuspense } from './hoc/with-suspense.tsx';

const KeralaMap = lazy(() => import('./pages/kerala-map.tsx'));
const USAMap = lazy(() => import('./pages/usa-map.tsx'));
const HomePage = lazy(() => import('./pages/home-page.tsx'));

const HomePageWithSuspense = withSuspense(HomePage, createElement(Loader));
const USAMapWithSuspense = withSuspense(USAMap, createElement(Loader));
const KeralaMapWithSuspense = withSuspense(KeralaMap, createElement(Loader));

export const AppRouter = memo(() => {
  return <BrowserRouter>
    <Routes>
      <Route path="/" element={createElement(HomePageWithSuspense)} />
      <Route path="map" >
        <Route path="kerala" element={createElement(KeralaMapWithSuspense)} />
        <Route path="usa" element={createElement(USAMapWithSuspense)} />
      </Route>
    </Routes>
  </BrowserRouter>
});

