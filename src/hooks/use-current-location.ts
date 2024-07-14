import { LocationEvent } from 'leaflet';
import { useEffect, useState } from 'react';
import { useMapEvents } from 'react-leaflet';
import { ILocationMarkerProps, ICustomPopupProps as IPlaceDetails } from '../types';
import { getPlaceDetails } from '../utils';

export const useCurrentLocation = ({ onLocationFound, coordinates }: ILocationMarkerProps): IPlaceDetails | null => {
    const [placeDetails, setPlaceDetails] = useState<IPlaceDetails | null>(null);
    const map = useMapEvents({
        locationfound(event: LocationEvent) {
            map.flyTo(event.latlng, map.getZoom());
            onLocationFound(event.latlng);
        }
    });

    useEffect(() => {
        map.locate();
        getPlaceDetails(coordinates).then(setPlaceDetails);
    }, [map, coordinates?.lat, coordinates?.lng]);

    return placeDetails as IPlaceDetails | null;
};
