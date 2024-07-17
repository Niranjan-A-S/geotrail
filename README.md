# GeoTrail

This project is a React TypeScript application built with Vite, Tailwind CSS, and React Router DOM, utilizing React Leaflet for mapping functionalities. The application features an interactive map of Kerala with markers for its districts, a USA state map displaying population density using polygon layers and map showing the current user location along with brief details about the place using external API service. Lazy loading is implemented to optimize the loading performance.

### [Live Demo](https://geotrail.vercel.app/)
### [Docker Image](https://hub.docker.com/repository/docker/niranjan2602/geotrail)

**To run the application in Docker, run the following command:**
```bash
docker run -d --name geotrail -p 3000:3000 -e VITE_GEOAPIFY_API_KEY=<YOUR_GEOAPIFY_API_KEY> niranjan2602/geotrail
```

## Features

- **Kerala Map with District Markers**: Interactive map highlighting each district of Kerala with markers.
- **USA State Map with Population Density**: Visual representation of population density across the states using polygon layers.
- **Current Location**: Your current location on the map along with brief details about the place using external service.

## Technologies Used

- **React**: JavaScript library for building user interfaces.
- **TypeScript**: Superset of JavaScript for type safety and better development experience.
- **Docker**: Containerized the application.
- **Vite**: Fast build tool and development server.
- **Tailwind CSS**: Utility-first CSS framework for styling.
- **React Router DOM**: Declarative routing for React applications.
- **React Leaflet**: React components for Leaflet maps.
- **Lazy Loading**: Optimization technique to load components and data only when needed.
- **Error Handling**: Custom error page in case of data fetching error.
