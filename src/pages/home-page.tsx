import { memo } from "react";
import { Banner } from "../components/home/banner";
import { Footer } from "../components/home/footer";
import { Header } from "../components/home/header";
import { BANNER_DATA } from "../constants";

export default memo(function HomePage() {
    return (
        <div className="flex flex-col h-screen">
            <Header />
            <main className="flex-1">
                <div className="container px-4 md:px-6 py-12 md:py-24 lg:py-32">
                    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
                        <Banner {...BANNER_DATA.kerala} />
                        <Banner {...BANNER_DATA.usa} />
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    )
});

