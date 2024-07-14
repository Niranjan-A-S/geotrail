import { LocationEvent } from 'leaflet';
import { useEffect } from 'react';
import { useMapEvents } from 'react-leaflet';
import { ILocationMarkerProps } from '../types';

export const useCurrentLocation = (onLocationFound: ILocationMarkerProps['onLocationFound']) => {
    const map = useMapEvents({
        locationfound(event: LocationEvent) {
            map.flyTo(event.latlng, map.getZoom());
            onLocationFound(event.latlng);
        }
    });

    useEffect(() => {
        map.locate();
    }, [map]);
};
