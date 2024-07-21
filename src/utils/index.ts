import { LatLng } from 'leaflet';
import { GEOAPIFY_API_KEY, pathLayerOptions } from '../constants';
import { IPlaceDetails, ITimezone } from '../types';

export function getColorBasedOnDensity(density: number) {
    switch (true) {
        case density > 1000:
            return '#800026';
        case density > 500:
            return '#BD0026';
        case density > 200:
            return '#E31A1C';
        case density > 100:
            return '#FC4E2A';
        case density > 50:
            return '#FD8D3C';
        case density > 20:
            return '#FEB24C';
        case density > 10:
            return '#FED976';
        default:
            return '#FFEDA0';
    }
}

export const getPathLayerOptions = (density: number) => ({
    fillColor: getColorBasedOnDensity(density),
    ...pathLayerOptions
});

export const fetchData = async<T = unknown>(url: string, options?: RequestInit) => {
    const response = await fetch(url, options);
    const data = await response.json();
    return data as T;
};

export const getAPIUrl = (coordinates: LatLng | null, apiKey: string) => `https://api.geoapify.com/v1/geocode/reverse?lat=${coordinates?.lat}&lon=${coordinates?.lng}&format=json&apiKey=${apiKey}`;

export const getPlaceDetails = async (coordinates: LatLng): Promise<IPlaceDetails | null> => {
    try {
        const data = await fetchData<{ results: IPlaceDetails[] }>(getAPIUrl(coordinates, GEOAPIFY_API_KEY));

        if (Array.isArray(!data?.results)) throw Error('Not able to fetch the place details');
        return data.results[0];

    } catch (error) {
        return null;
    }
};

export const getFormattedDistance = (distance: number, unit: string = 'KM') => `${distance?.toFixed(2)} ${unit}`;

export const getFormattedTimezone = ({ abbreviation_STD, name }: ITimezone) => `${name} (${abbreviation_STD})`;
