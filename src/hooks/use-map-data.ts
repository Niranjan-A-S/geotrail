import { IMapProps } from "../types";
import { useFetch } from "./use-fetch"

export const useMapData = () => {
    return useFetch<IMapProps>('./map-metadata.json');
}