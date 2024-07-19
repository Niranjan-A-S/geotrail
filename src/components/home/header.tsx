import { FC, memo } from 'react';
import { Link } from 'react-router-dom';
import { MapIcon } from '../map/map-icon';
import { APP_NAME, ROUTE_PATHS } from '../../constants';

export const Header: FC = memo(() => (
    <header className="bg-black text-white px-4 lg:px-6 py-2 flex items-center justify-between">
        <Link to={ROUTE_PATHS.home} className="flex items-center justify-center" >
            <MapIcon className="h-6 w-6" />
            <span className="ml-2 text-xl font-bold">{APP_NAME}</span>
        </Link>
    </header>
));
