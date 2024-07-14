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
