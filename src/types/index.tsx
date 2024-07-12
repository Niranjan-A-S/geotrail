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
    containerOptions: IMapContainerParams;
    tileLayerOptions: ITileLayerParams;
    districts: Array<IDistrict>;
}

export interface ICustomMarkerProps extends IDistrict {
}
export interface ICustomPopupProps extends Omit<IDistrict, 'coordinates'> {
}

export interface IDistrict extends Pick<IMapContainerParams, 'coordinates'> {
    name: string;
    image: string;
    attractions: Array<string>;
}