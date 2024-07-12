import { memo } from 'react'
import { Map } from './components/map.tsx'
import { useMapData } from './hooks/use-map-data.ts'


export default memo(function App() {

  const mapData = useMapData();

  return (
    mapData ? <Map {...mapData} /> : 'Loading...'
  );
})