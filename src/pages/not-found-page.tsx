import { memo } from 'react';
import { NotFoundPageParams } from '../constants';
import { HomeLinkButton } from '../components/ui/button/home-link';

export default memo(() => (
    <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-4xl font-bold mb-4">{NotFoundPageParams.heading}</h1>
        <p className="text-lg mb-8">{NotFoundPageParams.message}</p>
        <HomeLinkButton />
    </div>
));

