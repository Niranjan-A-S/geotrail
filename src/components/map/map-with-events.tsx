import { LatLng } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { FC, memo, useCallback, useState } from 'react';
import { IMapWithEventsProps } from '../../types';
import { CurrentLocation } from '../marker/current-location-marker';
import { MapLayout } from './map-layout';

export const MapWithEvents: FC<IMapWithEventsProps> = memo(({ containerOptions, tileLayerOptions }) => {

    const [coordinates, setCoordinates] = useState<LatLng | null>(null);

    const handleLocationFound = useCallback((position: LatLng) => {
        setCoordinates(position);
    }, []);

    const renderCurrentLocation = useCallback(() => (
        <CurrentLocation
            onLocationFound={handleLocationFound}
            coordinates={coordinates}
        />
    ), [coordinates]);

    return (
        <MapLayout
            containerOptions={containerOptions}
            tileLayerOptions={tileLayerOptions}
            onRenderBody={renderCurrentLocation}
        />
    );
});
