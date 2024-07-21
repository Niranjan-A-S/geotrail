import 'leaflet/dist/leaflet.css';
import { FC, memo } from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';
import { IMapLayoutProps } from '../../types';

export const MapLayout: FC<IMapLayoutProps> = memo(({ containerOptions, tileLayerOptions, onRenderBody }) => (
    <MapContainer {...containerOptions}>
        <TileLayer
            {...tileLayerOptions}
        />
        {onRenderBody && onRenderBody()}
    </MapContainer>
));
