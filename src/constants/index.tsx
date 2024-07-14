import { Icon } from 'leaflet';
import { IBannerProps as IBannerData } from '../types';

export const BANNER_DATA: Record<string, IBannerData> = {
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
    },
    current: {
        imageSrc: 'https://scontent.fblr22-2.fna.fbcdn.net/v/t39.30808-6/299293518_409950387901015_1604858568447116354_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=z5M-lR__Fl4Q7kNvgFzpclr&_nc_ht=scontent.fblr22-2.fna&oh=00_AYA3uxfDfYxihcpEc-NkkbFiEJFBjKrVgExHrNzIGaX3rg&oe=669935E0',
        title: 'Your Location',
        subtitle: 'Your current location on the map.',
        path: '/map/you-are-here'
    }
};

export const COPYRIGHT = '© 2024 Niranjan A S. All rights reserved.';

export const markerIcon = new Icon({
    iconUrl: '/marker.png',
    iconSize: [38, 38]
});

export const GEOAPIFY_API_KEY = import.meta.env.VITE_GEOAPIFY_API_KEY;
