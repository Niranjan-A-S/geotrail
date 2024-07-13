import "leaflet/dist/leaflet.css";
import { FC, memo } from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import { IMapLayoutProps } from "../types";

export const MapLayout: FC<IMapLayoutProps> = memo(({ containerOptions: { coordinates, zoomLevel, style }, tileLayerOptions: { attribution, url }, onRenderBody, }) => (
    <MapContainer center={coordinates} zoom={zoomLevel} style={style}>
        <TileLayer
            attribution={attribution}
            url={url}
        />
        {onRenderBody()}
    </MapContainer>
));
