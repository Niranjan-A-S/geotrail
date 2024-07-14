import 'leaflet/dist/leaflet.css';
import { FC, memo, useCallback } from 'react';
import { ICustomMarkerProps, IMapWithMarkerProps } from '../../types';
import { CustomMarker } from '../marker/custom-marker';
import { MapLayout } from './map-layout';

export const MapWithMarker: FC<IMapWithMarkerProps> = memo(({ containerOptions, tileLayerOptions, districts }) => {

    const renderMarkers = useCallback(() => districts.map(({ coordinates, attractions, name, image }: ICustomMarkerProps) => (
        <CustomMarker
            key={name}
            name={name}
            coordinates={coordinates}
            attractions={attractions}
            image={image}
        />
    )), [districts]);

    return (
        <MapLayout
            containerOptions={containerOptions}
            tileLayerOptions={tileLayerOptions}
            onRenderBody={renderMarkers}
        />
    );
});
