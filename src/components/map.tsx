import "leaflet/dist/leaflet.css";
import { FC, memo, useRef } from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import { IMapProps } from "../types";

export const Map: FC<IMapProps> = memo(({ containerOptions: { coordinates, zoomLevel, height, width }, tileLayerOptions: { attribution, url } }) => {

    const mapRef = useRef(null);

    return (
        <MapContainer center={coordinates} zoom={zoomLevel} ref={mapRef} style={{ height, width }}>
            <TileLayer
                attribution={attribution}
                url={url}
            />
        </MapContainer>
    );
});
