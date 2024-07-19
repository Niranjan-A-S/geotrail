import 'leaflet/dist/leaflet.css';
import { FC, memo, useCallback } from 'react';
import { Polygon } from 'react-leaflet';
import { usePolygonLayer } from '../../hooks/use-polygon-layer';
import { IMapWithPolygonProps, IPolygonFeature } from '../../types';
import { getPathLayerOptions } from '../../utils';
import { DensityCard } from '../card/density-card';
import { MapLayout } from './map-layout';

export const MapWithPolygon: FC<IMapWithPolygonProps> = memo(({ containerOptions, tileLayerOptions, features }) => {

    const { activeLayerData, onMouseOut, onMouseOver } = usePolygonLayer();

    const renderPolygons = useCallback(() => features.map(({ geometry, properties, id }: IPolygonFeature) => {
        const coordinates = geometry.coordinates[0].map(([a, b]) => [b, a]);
        return (
            <Polygon
                key={id}
                pathOptions={getPathLayerOptions(properties.density)}
                positions={coordinates}
                eventHandlers={{
                    mouseover: (e) => onMouseOver(e, properties),
                    mouseout: onMouseOut
                }}
            />
        );
    }
    ), [features, onMouseOut, onMouseOver]);

    const onRenderBody = useCallback(() => (
        <>
            {renderPolygons()}
            {activeLayerData && <DensityCard data={activeLayerData} />}
        </>
    ), [activeLayerData, renderPolygons]);

    return (
        <MapLayout
            containerOptions={containerOptions}
            tileLayerOptions={tileLayerOptions}
            onRenderBody={onRenderBody}
        />
    );
});
