import { memo } from "react";
import { MapWithMarker } from "../components/map/map-with-marker.tsx";
import { useFetch } from "../hooks/use-fetch.ts";
import { IMapWithMarkerProps as IMarkerMapOptions } from '../types/index.tsx';
import { Loader } from "../components/loader.tsx";


export default memo(function KeralaApp() {

    const mapData = useFetch<IMarkerMapOptions>('/map-data/marker.json');

    return (
        (mapData) ? <MapWithMarker {...mapData} /> : <Loader />
    );
})