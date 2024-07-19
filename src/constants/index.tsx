import { Icon } from 'leaflet';
import { IBannerProps as IBannerData } from '../types';

export enum ROUTE_PATHS {
    home = '/',
    map = '/map',
    keralaMap = '/map/kerala',
    usaMap = '/map/usa',
    currentLocationMap = '/map/you-are-here',
    wildcard = '*'
}


export const BANNER_DATA: Record<string, IBannerData> = {
    kerala: {
        title: 'Map of Districts in Kerala',
        subtitle: 'Explore the districts of Kerala with our interactive map.',
        path: ROUTE_PATHS.keralaMap,
        imageSrc: '/images/kerala.avif'
    },
    usa: {
        title: 'Population Density Map of USA',
        subtitle: 'Visualize the population density across the United States.',
        path: ROUTE_PATHS.usaMap,
        imageSrc: '/images/usa.jpg'
    },
    current: {
        title: 'Your Location',
        subtitle: 'Your current location on the map.',
        path: ROUTE_PATHS.currentLocationMap,
        imageSrc: '/images/world.jpg'
    }
};

export const COPYRIGHT = '© 2024 Niranjan A S. All rights reserved.';

export const markerIcon = new Icon({
    iconUrl: '/images/marker.png',
    iconSize: [38, 38]
});
export const hoverLayerOptions = {
    fillColor: '#BD0026',
    fillOpacity: 0.7,
    weight: 2,
    opacity: 1,
    color: 'white'
};
export const pathLayerOptions = {
    fillOpacity: 0.7,
    weight: 2,
    dashArray: '3',
    color: 'white'
};

export const GEOAPIFY_API_KEY = import.meta.env.VITE_GEOAPIFY_API_KEY;

export const DISTRICT_POPUP_SUBTITLE = 'Major Attractions:';

export const CURRENT_LOCATION_POPUP_TITLE = 'You are here!';

