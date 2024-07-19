/* eslint-disable react-hooks/exhaustive-deps */
import { LocationEvent } from 'leaflet';
import { useEffect, useMemo, useState } from 'react';
import { useMapEvents } from 'react-leaflet';
import { ILocationMarkerProps, IPlaceDetails } from '../types';
import { getPlaceDetails } from '../utils';

export const useCurrentLocation = ({ onLocationFound, coordinates }: ILocationMarkerProps) => {
    const [placeDetails, setPlaceDetails] = useState<IPlaceDetails | null>(null);

    const map = useMapEvents({
        locationfound({ latlng }: LocationEvent) {
            map.flyTo(latlng, map.getZoom());
            onLocationFound(latlng);
        }
    });

    useEffect(() => {
        map.locate();
        coordinates && getPlaceDetails(coordinates).then(setPlaceDetails);
    }, [map, coordinates?.lat, coordinates?.lng]);

    return useMemo<IPlaceDetails | null>(() => placeDetails, [placeDetails]);
};
