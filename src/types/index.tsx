import { LatLngExpression } from "leaflet";
import { ReactNode } from "react";

interface IMapContainerParams {
    coordinates: LatLngExpression;
    zoomLevel: number;
    style: {
        height: string;
        width: string;
    }
}

interface ITileLayerParams {
    attribution: string;
    url: string;
}

export interface IMapLayoutProps {
    containerOptions: IMapContainerParams;
    tileLayerOptions: ITileLayerParams;
    onRenderBody(): ReactNode;
}

export interface IMapWithMarkerProps extends Omit<IMapLayoutProps, 'onRenderBody'> {
    districts: Array<IDistrict>;
}

export interface IPolygonFeature {
    type: string;
    id: string;
    properties: {
        name: string;
        density: number;
    }
    geometry: {
        type: string;
        coordinates: Array<Array<Array<LatLngExpression>>>;
    };
}
export interface IMapWithPolygonProps extends Omit<IMapLayoutProps, 'onRenderBody'> {
    features: Array<IPolygonFeature>
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