import { FC, memo, useCallback } from 'react';
import { Popup } from 'react-leaflet';
import { ICustomPopupProps } from '../../types';

export const CustomPopup: FC<ICustomPopupProps> = memo(({ list, title, image, subtitle }) => {

    const renderListItem = useCallback((name: string) => <li key={name} >{name}</li>, []);

    return (
        <Popup className="shadow-lg rounded-lg">
            <div className="mt-4 w-60">
                {image && < img src={image} alt={title} className="w-full h-32 rounded-lg" />}
                <div className="p-2">
                    <div className="text-xl font-semibold">{title}</div>
                    {(subtitle) && <div className="text-[16px] mt-2">{subtitle}</div>}
                    {list && <div className="mt-1">
                        <ul className="list-disc list-inside text-sm text-gray-600">
                            {list.map(renderListItem)}
                        </ul>
                    </div>}
                </div>
            </div>
        </Popup>
    );
});
