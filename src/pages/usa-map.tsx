import { memo } from 'react';
import { MapWithPolygon } from '../components/map/map-with-polygon';
import { useFetch } from '../hooks/use-fetch';
import { IMapWithPolygonProps } from '../types';


export default memo(function USAMap() {

    const mapData = useFetch<IMapWithPolygonProps>('/map-data/polygon.json');

    return (
        (mapData) ? <MapWithPolygon {...mapData} /> : 'Loading...'
    );
})