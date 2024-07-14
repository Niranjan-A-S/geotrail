import { FC, memo } from 'react';
import { useCurrentLocation } from '../../hooks/use-current-location';
import { ILocationMarkerProps } from '../../types';
import { CustomMarker } from './custom-marker';

export const CurrentLocationMarker: FC<ILocationMarkerProps> = memo(({ onLocationFound, coordinates }) => {
    useCurrentLocation(onLocationFound);

    return coordinates && (
        <CustomMarker coordinates={coordinates} attractions={[]} name={''} image={''} />
    );
});
