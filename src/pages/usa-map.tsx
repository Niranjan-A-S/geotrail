import { memo } from 'react';
import { useFetch } from '../hooks/use-fetch';
import { IMapWithPolygonProps } from '../types';
import { MapWithPolygon } from '../components/map/map-with-polygon';


export default memo(function USAMap() {

    const mapData = useFetch<IMapWithPolygonProps>('/polygon-map.json');

    return (
        (mapData) ? <MapWithPolygon {...mapData} /> : 'Loading...'
    );
})