import { memo } from 'react';
import { Loader } from '../components/ui/loader';
import { MapWithEvents } from '../components/map/map-with-events';
import { useFetch } from '../hooks/use-fetch';
import { IMapWithEventsProps } from '../types';
import { ErrorPage } from './error-page';

export default memo(() => {

    const { data, hasError } = useFetch<IMapWithEventsProps>('/map-data/default.json');

    if (hasError) return <ErrorPage />;

    return (
        (data) ? <MapWithEvents {...data} /> : <Loader />
    );
});
