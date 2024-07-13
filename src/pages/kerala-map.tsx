import { memo } from "react";
import { useFetch } from "../hooks/use-fetch.ts";
import { MapWithMarker } from "../components/map/map-with-marker.tsx";
import { IMapWithMarkerProps as IMarkerMapOptions } from '../types/index.tsx';


export default memo(function KeralaApp() {

    const mapData = useFetch<IMarkerMapOptions>('/marker-map.json');

    return (
        (mapData) ? <MapWithMarker {...mapData} /> : 'Loading...'
    );
})