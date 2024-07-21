import { memo } from 'react';
import { Link } from 'react-router-dom';
import { NotFoundPageParams, ROUTE_PATHS } from '../constants';

export default memo(() => (
    <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-4xl font-bold mb-4">{NotFoundPageParams.heading}</h1>
        <p className="text-lg mb-8">{NotFoundPageParams.message}</p>
        <Link to={ROUTE_PATHS.home} className="bg-black text-white py-2 px-6 rounded-md hover:bg-white hover:text-black hover:border-2 hover:border-black transition duration-300">Go Home </Link>
    </div>
));

