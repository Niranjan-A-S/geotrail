import { LatLng } from 'leaflet';

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

export const fetchData = async (url: string, options?: RequestInit) => {
    const response = await fetch(url, options);
    const data = await response.json();
    return data;
};

export const getPlaceDetails = async (coordinates: LatLng | null) => {
    try {
        if (coordinates) {
            const data = await fetchData(`https://api.geoapify.com/v1/geocode/reverse?lat=${coordinates?.lat}&lon=${coordinates?.lng}&format=json&apiKey=dfdad9f5c56f4c2682cb3a9649cd04b2`);
            return data?.results[0];
        }
    } catch (error) {
        return {
            'address_line1': 'You are here!!'
        };
    }
};
