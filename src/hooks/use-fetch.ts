import { useEffect, useMemo, useState } from 'react';

export interface IResponse<T> {
    data?: T | null;
    hasError?: boolean;
}

export const useFetch = <T>(endpoint: string, options?: RequestInit): IResponse<T> => {
    const [data, setData] = useState<T | null>(null);
    const [hasError, setHasError] = useState<boolean>(false);

    useEffect(() => {
        (async () => {
            try {
                const response = await fetch(endpoint, options);
                const json = await response.json();
                setData(json);
            } catch (error) {
                setHasError(true);
            }
        })();
    }, [endpoint, options]);

    return useMemo(() => ({ data, hasError }), [data, hasError]);
};
