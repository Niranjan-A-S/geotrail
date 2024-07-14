import { memo, useCallback } from 'react';
import { Banner } from '../components/home/banner';
import { Footer } from '../components/home/footer';
import { Header } from '../components/home/header';
import { BANNER_DATA } from '../constants';
import { IBannerProps } from '../types';

export default memo(() => {

    const renderBanners = useCallback((data: IBannerProps) => <Banner key={data.title} {...data} />, []);

    return (
        <div className="flex flex-col h-screen">
            <Header />
            <main className="flex-1">
                <div className="container px-4 md:px-6 py-12 md:py-24 lg:py-32">
                    <div className="grid gap-8 md:grid-cols-3 lg:grid-cols-3">
                        {Object.values(BANNER_DATA).map(renderBanners)}
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
});

