import { memo } from 'react'
import { Map } from './components/map.tsx'
import { useMapData } from './hooks/use-map-data.ts'
import { useDistricts } from './hooks/use-districts.ts';


export default memo(function App() {

  const mapData = useMapData();
  const districts = useDistricts();

  return (
    (mapData && districts) ? <Map {...mapData} districts={districts} /> : 'Loading...'
  );
})