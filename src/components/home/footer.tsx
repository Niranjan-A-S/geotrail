import { FC, memo } from "react";
import { COPYRIGHT } from "../../constants";

export const Footer: FC = memo(() => (
    <footer className="p-6 md:py-12 w-full">
        <div className="container max-w-7xl text-xs text-gray-500">
            {COPYRIGHT}
        </div>
    </footer>
))