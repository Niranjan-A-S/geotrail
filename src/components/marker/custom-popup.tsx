import { FC, memo, useCallback } from 'react';
import { Popup } from 'react-leaflet';
import { AttractionItem } from './attraction-item';
import { ICustomPopupProps } from '../../types';

export const CustomPopup: FC<ICustomPopupProps> = memo(({ attractions, name, image }) => {

    const renderAttractionItem = useCallback((name: string) => <AttractionItem key={name} name={name} />, []);

    return (
        <Popup className="shadow-lg rounded-lg">
            <div className="mt-4 w-60">
                <img src={image} alt={name} className="w-full h-32 rounded-lg" />
                <div className="p-2">
                    <h3 className="text-lg font-semibold">{name}</h3>
                    <div className="mt-2">
                        <h4 className="text-md font-medium">Attractions:</h4>
                        <ul className="list-disc list-inside text-sm text-gray-600">
                            {attractions.map(renderAttractionItem)}
                        </ul>
                    </div>
                </div>
            </div>
        </Popup>
    );
});
