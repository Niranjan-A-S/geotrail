import { LeafletMouseEvent } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { FC, memo, useCallback } from 'react';
import { Polygon } from 'react-leaflet';
import { hoverLayerOptions, pathLayerOptions } from '../../constants';
import { IMapWithPolygonProps, IPolygonFeature } from '../../types';
import { getColorBasedOnDensity } from '../../utils';
import { MapLayout } from './map-layout';

export const MapWithPolygon: FC<IMapWithPolygonProps> = memo(({ containerOptions, tileLayerOptions, features }) => {

    const getPathLayerOptions = useCallback((density: number) => ({
        fillColor: getColorBasedOnDensity(density),
        ...pathLayerOptions
    }), []);

    const onMouseOver = useCallback((event: LeafletMouseEvent) => {
        const layer = event.target;
        layer.setStyle(hoverLayerOptions);
    }, []);

    const onMouseOut = useCallback((event: LeafletMouseEvent, density: number) => {
        const layer = event.target;
        layer.setStyle(getPathLayerOptions(density));
    }, [getPathLayerOptions]);

    const renderPolygons = useCallback(() => features.map(({ geometry, properties: { density }, id }: IPolygonFeature) => {
        const coordinates = geometry.coordinates[0].map((item) => [item[1], item[0]]);
        return (
            <Polygon
                key={id}
                pathOptions={getPathLayerOptions(density)}
                positions={coordinates}
                eventHandlers={{
                    mouseover: onMouseOver,
                    mouseout: (e) => { onMouseOut(e, density); }
                }}
            />
        );
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
