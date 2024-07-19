import { FC, memo } from 'react';
import { Marker } from 'react-leaflet';
import { markerIcon } from '../../constants';
import { ICustomMarkerProps } from '../../types';
import { CustomPopup } from './custom-popup';

export const CustomMarker: FC<ICustomMarkerProps> = memo(({ coordinates, title, image, list, subtitle }) => (
    <Marker position={coordinates} icon={markerIcon} >
        <CustomPopup
            list={list}
            title={title}
            image={image}
            subtitle={subtitle}
        />
    </Marker>
));
