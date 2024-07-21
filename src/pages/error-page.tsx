import { FC, memo } from 'react';
import { Link } from 'react-router-dom';
import { ErrorPageParams, ROUTE_PATHS } from '../constants';

export const ErrorPage: FC = memo(() => (
    <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-4xl font-bold mb-4">{ErrorPageParams.heading}</h1>
        <p className="text-lg mb-8">{ErrorPageParams.message}</p>
        <Link
            to={ROUTE_PATHS.home}
            className="bg-black text-white py-2 px-6 rounded-md border-black border-2 hover:bg-white hover:text-black transition duration-300"
        >
            Go Home
        </Link>
    </div>
));
