import { FC, memo } from "react";
import { Link } from "react-router-dom";
import { ILinkButtonProps } from "../../../types";

export const LinkButton: FC<ILinkButtonProps> = memo(({ label, url }) => (
    <Link
        to={url}
        className="bg-black text-white py-2 px-6 rounded-md border-black border-2 hover:bg-white hover:text-black transition duration-300"
    >
        {label}
    </Link>
));