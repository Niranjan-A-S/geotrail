import { FC, memo } from "react";
import { Link } from "react-router-dom";
import { MapIcon } from "../map/map-icon";

export const Header: FC = memo(() => (
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
))