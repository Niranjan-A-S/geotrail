import { FC, memo } from 'react';
import { Marker } from 'react-leaflet';
import { markerIcon } from '../../constants';
import { ICustomMarkerProps } from '../../types';
import { CustomPopup } from './custom-popup';

export const CustomMarker: FC<ICustomMarkerProps> = memo(({ coordinates, attractions, name, image, country, state }) => (
    <Marker position={coordinates} icon={markerIcon}>
        <CustomPopup attractions={attractions} name={name} image={image} country={country} state={state} />
    </Marker>
));
