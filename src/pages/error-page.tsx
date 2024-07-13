import { memo } from "react";
import { Link } from "react-router-dom";

export const ErrorPage: React.FC = memo(() => (
    <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-4xl font-bold mb-4">Oops! Something went wrong.</h1>
        <p className="text-lg mb-8">Please refresh the page or try again later.</p>
        <Link to="/" className="bg-black text-white py-2 px-6 rounded-md hover:bg-white hover:text-black hover:border-2 hover:border-black transition duration-300">Go Home </Link>
    </div>
));