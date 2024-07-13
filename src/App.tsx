import { memo } from 'react';
import { MapWithMarker } from './components/map-with-marker.tsx';
import { useFetch } from './hooks/use-fetch.ts';
import { IMapWithMarkerProps as IMarkerMapOptions } from './types/index.tsx';


export default memo(function App() {

  const mapData = useFetch<IMarkerMapOptions>('./marker-map.json');

  return (
    (mapData) ? <MapWithMarker {...mapData} /> : 'Loading...'
  );
})