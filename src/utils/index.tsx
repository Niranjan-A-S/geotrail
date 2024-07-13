export function getColor(density: number) {
    return density > 1000
        ? "#800026"
        : density > 500
            ? "#BD0026"
            : density > 200
                ? "#E31A1C"
                : density > 100
                    ? "#FC4E2A"
                    : density > 50
                        ? "#FD8D3C"
                        : density > 20
                            ? "#FEB24C"
                            : density > 10
                                ? "#FED976"
                                : "#FFEDA0";
}
