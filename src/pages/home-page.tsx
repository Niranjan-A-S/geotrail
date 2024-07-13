import { memo } from "react"
import { Link } from "react-router-dom"
import { MapIcon } from "../components/map/map-icon";

export const HomePage = memo(() => {
    return (
        <div className="flex flex-col m in-h-[100dvh]">
            <header className="bg-black text-white px-4 lg:px-6 h-14 flex items-center justify-between">
                <Link to="/" className="flex items-center justify-center text-primary-foreground" >
                    <MapIcon className="h-6 w-6" />
                    <span className="sr-only">Map of Districts in Kerala</span>
                </Link>
                <nav className="flex gap-4 sm:gap-6">
                    <Link
                        to="/map/kerala"
                        className="text-sm font-medium text-primary-foreground hover:underline underline-offset-4"
                    >
                        Map of Districts in Kerala
                    </Link>
                    <Link
                        to="/map/usa"
                        className="text-sm font-medium text-primary-foreground hover:underline underline-offset-4"
                    >
                        Population Density Map of USA
                    </Link>
                </nav>
            </header>
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
            <footer className="bg-muted p-6 md:py-12 w-full">
                <div className="container max-w-7xl text-xs text-muted-foreground">
                    &copy; 2024 Niranjan A S. All rights reserved.
                </div>
            </footer>
        </div>
    )
});

