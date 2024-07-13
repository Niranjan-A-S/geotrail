import { memo } from "react";
import { Loader } from "../components/loader.tsx";
import { MapWithMarker } from "../components/map/map-with-marker.tsx";
import { useFetch } from "../hooks/use-fetch.ts";
import { IMapWithMarkerProps as IMarkerMapOptions } from '../types/index.tsx';
import { ErrorPage } from "./error-page.tsx";


export default memo(function KeralaMap() {

    const { data, hasError } = useFetch<IMarkerMapOptions>('/map-data/marker.json');

    if (hasError) return <ErrorPage />

    return (
        (data) ? <MapWithMarker {...data} /> : <Loader />
    );
})