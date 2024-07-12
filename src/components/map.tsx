import "leaflet/dist/leaflet.css";
import { FC, memo } from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import { ICustomMarkerProps, IMapProps } from "../types";
import { CustomMarker } from "./marker/custom-marker";

export const Map: FC<IMapProps> = memo(({ containerOptions: { coordinates, zoomLevel, height, width }, tileLayerOptions: { attribution, url }, districts }) => {

    const renderMarkers = ({ coordinates, attractions, name, image }: ICustomMarkerProps) => {
        return <CustomMarker key={name} name={name} coordinates={coordinates} attractions={attractions} image={image} />
    }

    return (
        <MapContainer center={coordinates} zoom={zoomLevel} style={{ height, width }}>
            <TileLayer
                attribution={attribution}
                url={url}
            />
            {districts.map(renderMarkers)}
        </MapContainer>
    );
});
