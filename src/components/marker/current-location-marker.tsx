import { FC, memo } from 'react';
import { CURRENT_LOCATION_POPUP_TITLE } from '../../constants';
import { useCurrentLocation } from '../../hooks/use-current-location';
import { ILocationMarkerProps } from '../../types';
import { LocationDetailsCard } from '../card/location-details';
import { CustomMarker } from './custom-marker';

export const CurrentLocation: FC<ILocationMarkerProps> = memo(({ onLocationFound, coordinates }) => {
    const placeDetails = useCurrentLocation({ onLocationFound, coordinates });

    return (coordinates) && (
        <>
            <CustomMarker
                coordinates={coordinates}
                title={placeDetails?.address_line1 || CURRENT_LOCATION_POPUP_TITLE}
                subtitle={placeDetails && `${placeDetails?.state}, ${placeDetails?.country}`}
            />
            {placeDetails && <LocationDetailsCard data={placeDetails} />}
        </>
    );
});
