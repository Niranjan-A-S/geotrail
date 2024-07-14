import { FC, memo } from 'react';
import { useCurrentLocation } from '../../hooks/use-current-location';
import { ILocationMarkerProps } from '../../types';
import { CustomMarker } from './custom-marker';
import { FeatureCard } from '../feature-card';


export const CurrentLocation: FC<ILocationMarkerProps> = memo(({ onLocationFound, coordinates }) => {
    const details = useCurrentLocation({ onLocationFound, coordinates });

    return (coordinates && details) && (
        <>
            <CustomMarker coordinates={coordinates} name={details.address_line1} country={details.country} state={details.state} />
            <FeatureCard result={details} />
        </>
    );
});
