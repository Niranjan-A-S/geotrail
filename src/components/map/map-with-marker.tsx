import 'leaflet/dist/leaflet.css';
import { FC, memo, useCallback } from 'react';
import { DISTRICT_POPUP_SUBTITLE } from '../../constants';
import { IDistrict, IMapWithMarkerProps } from '../../types';
import { CustomMarker } from '../marker/custom-marker';
import { MapLayout } from './map-layout';

export const MapWithMarker: FC<IMapWithMarkerProps> = memo(({ containerOptions, tileLayerOptions, districts }) => {

    const renderMarkers = useCallback(() => districts.map(({ coordinates, attractions, image, name }: IDistrict) => (
        <CustomMarker
            key={name}
            title={name}
            coordinates={coordinates}
            list={attractions}
            image={image}
            subtitle={DISTRICT_POPUP_SUBTITLE}
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
