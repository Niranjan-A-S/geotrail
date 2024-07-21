import { FC, memo } from 'react';
import { useCurrentLocation } from '../../hooks/use-current-location';
import { ILocationMarkerProps } from '../../types';
import { LocationDetailsCard } from '../card/location-details';
import { CustomMarker } from './custom-marker';
import { CURRENT_LOCATION_POPUP_TITLE } from '../../constants';

export const CurrentLocation: FC<ILocationMarkerProps> = memo(({ onLocationFound, coordinates }) => {
    const placeDetails = useCurrentLocation({ onLocationFound, coordinates });

    return (coordinates) && (
        <>
            <CustomMarker
                coordinates={coordinates}
                title={placeDetails?.address_line1 || CURRENT_LOCATION_POPUP_TITLE}
                subtitle={`${placeDetails?.state}, ${placeDetails?.country}`}
            />
            {placeDetails && <LocationDetailsCard data={placeDetails} />}
        </>
    );
});
