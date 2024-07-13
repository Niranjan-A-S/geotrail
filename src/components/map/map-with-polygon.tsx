import { LeafletMouseEvent } from "leaflet";
import "leaflet/dist/leaflet.css";
import { FC, memo, useCallback, useMemo } from "react";
import { Polygon } from "react-leaflet";
import { IMapWithPolygonProps, IPolygonFeature } from "../../types";
import { getColor } from "../../utils";
import { MapLayout } from "./map-layout";

export const MapWithPolygon: FC<IMapWithPolygonProps> = memo(({ containerOptions, tileLayerOptions, features }) => {

    const getPathLayerOptions = useCallback((density: number) => ({
        fillColor: getColor(density),
        fillOpacity: 0.7,
        weight: 2,
        dashArray: "3",
        color: 'white'
    }), [])

    const hoverLayerOptions = useMemo(() => ({
        fillColor: "#BD0026",
        fillOpacity: 0.7,
        weight: 2,
        opacity: 1,
        color: "white",
    }), [])

    const onMouseOver = useCallback((e: LeafletMouseEvent) => {
        const layer = e.target;
        layer.setStyle(hoverLayerOptions)
    }, [hoverLayerOptions])

    const onMouseOut = useCallback((e: LeafletMouseEvent, density: number) => {
        const layer = e.target;
        layer.setStyle(getPathLayerOptions(density));
    }, [getPathLayerOptions])

    const renderPolygons = useCallback(() => features.map(({ geometry, properties: { density }, id }: IPolygonFeature) => {
        const coordinates = geometry.coordinates[0].map((item) => [item[1], item[0]]);
        return (
            <Polygon
                key={id}
                pathOptions={getPathLayerOptions(density)}
                positions={coordinates}
                eventHandlers={{
                    mouseover: onMouseOver,
                    mouseout: (e) => { onMouseOut(e, density) }
                }}
            />
        )
    }
    ), [features, getPathLayerOptions, onMouseOut, onMouseOver]);

    return (
        <MapLayout
            containerOptions={containerOptions}
            tileLayerOptions={tileLayerOptions}
            onRenderBody={renderPolygons}
        />
    );
});
