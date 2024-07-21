import { FC, memo } from 'react';
import { HomeLinkButton } from '../components/ui/button/home-link';
import { ErrorPageParams } from '../constants';

export const ErrorPage: FC = memo(() => (
    <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-4xl font-bold mb-4">{ErrorPageParams.heading}</h1>
        <p className="text-lg mb-8">{ErrorPageParams.message}</p>
        <HomeLinkButton />  
    </div>
));
