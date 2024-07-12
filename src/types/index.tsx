import { LatLngExpression } from "leaflet";

interface IMapContainerParams {
    coordinates: LatLngExpression;
    zoomLevel: number;
    height: string;
    width: string;
}

interface ITileLayerParams {
    attribution: string;
    url: string;
}

export interface IMapProps {
    containerOptions: IMapContainerParams,
    tileLayerOptions: ITileLayerParams
}