import { memo } from 'react';
import { Loader } from '../components/loader';
import { MapWithPolygon } from '../components/map/map-with-polygon';
import { useFetch } from '../hooks/use-fetch';
import { IMapWithPolygonProps } from '../types';
import { ErrorPage } from './error-page';


export default memo(() => {

    const { data, hasError } = useFetch<IMapWithPolygonProps>('/map-data/usa.json');

    if (hasError) return <ErrorPage />;

    return (
        (data) ? <MapWithPolygon {...data} /> : <Loader />
    );
});
