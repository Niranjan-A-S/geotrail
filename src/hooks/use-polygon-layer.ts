import { LeafletMouseEvent } from "leaflet";
import { useCallback, useMemo, useState } from "react";
import { IDensityCardProps as IStateData } from '../types';

export const usePolygonLayer = () => {

    const [activeLayerData, setActiveLayerData] = useState<IStateData | null>(null);

    const onMouseOver = useCallback((_event: LeafletMouseEvent, params: IStateData) => {
        setActiveLayerData(params);
    }, [setActiveLayerData]);

    const onMouseOut = useCallback(() => {
        setActiveLayerData(null);
    }, [setActiveLayerData]);

    return useMemo(() => ({
        activeLayerData,
        onMouseOver,
        onMouseOut
    }), [activeLayerData, onMouseOut, onMouseOver]);

}