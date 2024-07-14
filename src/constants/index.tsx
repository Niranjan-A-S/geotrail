import { Icon } from 'leaflet';
import { IBannerProps as IBannerData } from '../types';

export const BANNER_DATA: Record<'kerala' | 'usa', IBannerData> = {
    kerala: {
        imageSrc: 'https://images.unsplash.com/photo-1593693397690-362cb9666fc2?fm=jpg&w=3000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8a2VyYWxhfGVufDB8fDB8fHww',
        title: 'Map of Districts in Kerala',
        subtitle: 'Explore the districts of Kerala with our interactive map.',
        path: '/map/kerala'
    },
    usa: {
        imageSrc: 'https://m.economictimes.com/thumb/msid-75284091,width-1200,height-900,resizemode-4,imgsize-687340/us-immigration.jpg',
        title: 'Population Density Map of USA',
        subtitle: 'Visualize the population density across the United States.',
        path: '/map/usa'
    }
};

export const COPYRIGHT = '© 2024 Niranjan A S. All rights reserved.';

export const markerIcon = new Icon({
    iconUrl: '/marker.png',
    iconSize: [38, 38]
});
