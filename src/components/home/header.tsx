import { FC, memo } from 'react';
import { Link } from 'react-router-dom';
import { ROUTE_PATHS } from '../../constants';
import { MapIcon } from '../map/map-icon';

export const Header: FC<{ appName: string }> = memo(({ appName }) => (
    <header className="bg-black text-white px-4 lg:px-6 py-2 flex items-center justify-between fixed left-0 right-0">
        <Link to={ROUTE_PATHS.home} className="flex items-center justify-center" >
            <MapIcon className="h-6 w-6" />
            <span className="ml-2 text-xl font-bold">{appName}</span>
        </Link>
    </header>
));
