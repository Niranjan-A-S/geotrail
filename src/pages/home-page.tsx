import { memo } from "react";
import { Link } from "react-router-dom";
import { Footer } from "../components/home/footer";
import { Header } from "../components/home/header";

export const HomePage = memo(() => {
    return (
        <div className="flex flex-col m in-h-[100dvh]">
            <Header />
            <main className="flex-1 bg-background">
                <div className="container px-4 md:px-6 py-12 md:py-24 lg:py-32">
                    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
                        <Link to="/map/kerala">
                            <img
                                src="https://images.unsplash.com/photo-1593693397690-362cb9666fc2?fm=jpg&w=3000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8a2VyYWxhfGVufDB8fDB8fHww"
                                width="550"
                                height="310"
                                alt="Map of Districts in Kerala"
                                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
                            />
                            <h2 className="mt-4 text-2xl font-bold">Map of Districts in Kerala</h2>
                            <p className="mt-2 text-muted-foreground">Explore the districts of Kerala with our interactive map.</p>
                        </Link >
                        <Link to="/map/usa">
                            <img
                                src="https://m.economictimes.com/thumb/msid-75284091,width-1200,height-900,resizemode-4,imgsize-687340/us-immigration.jpg"
                                width="550"
                                height="310"
                                alt="Population Density Map of USA"
                                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
                            />
                            <h2 className="mt-4 text-2xl font-bold">Population Density Map of USA</h2>
                            <p className="mt-2 text-muted-foreground">Visualize the population density across the United States.</p>
                        </Link>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    )
});

