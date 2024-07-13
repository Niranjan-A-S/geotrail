import { FC, memo } from "react";
import { Link } from "react-router-dom";
import { MapIcon } from "../map/map-icon";
import { BANNER_DATA } from "../../constants";

export const Header: FC = memo(() => (
    <header className="bg-black text-white px-4 lg:px-6 h-14 flex items-center justify-between">
        <Link to="/" className="flex items-center justify-center" >
            <MapIcon className="h-6 w-6" />
        </Link>
        <nav className="flex gap-4 sm:gap-6">
            <Link
                to="/map/kerala"
                className="text-sm font-medium hover:underline underline-offset-4"
            >
                {BANNER_DATA.kerala.title}
            </Link>
            <Link
                to="/map/usa"
                className="text-sm font-medium hover:underline underline-offset-4"
            >
                {BANNER_DATA.usa.title}
            </Link>
        </nav>
    </header>
))