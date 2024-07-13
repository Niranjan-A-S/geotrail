import { FC } from "react";

export const Loader: FC = () => (
    <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div className="border-4 border-black border-t-transparent rounded-full w-12 h-12 animate-spin"></div>
    </div>
);