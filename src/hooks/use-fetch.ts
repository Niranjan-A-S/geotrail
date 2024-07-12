import { useEffect, useMemo, useState } from "react";

export const useFetch = <T>(endpoint: string, options?: RequestInit) => {
    const [data, setData] = useState<T | null>(null);

    useEffect(() => {
        (async () => {
            try {
                const response = await fetch(endpoint, options);
                const json = await response.json();
                setData(json);
            } catch (error) {
                console.error(error);
            }
        })();
    }, [endpoint, options]);

    return useMemo(() => data, [data]);
};