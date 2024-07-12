import { FC, memo } from "react";
import { Marker } from "react-leaflet";
import { CustomPopup } from "./custom-popup";
import { ICustomMarkerProps } from "../../types";

export const CustomMarker: FC<ICustomMarkerProps> = memo(({ coordinates, attractions, name, image }) => {

    return (
        <Marker position={coordinates}>
            <CustomPopup attractions={attractions} name={name} image={image} />
        </Marker>
    );
});
