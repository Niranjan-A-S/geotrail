import { useEffect, useMemo, useState } from 'react';
import { fetchData } from '../utils';

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
                const data = await fetchData<T>(endpoint, options);
                setData(data);
            } catch (error) {
                setHasError(true);
            }
        })();
    }, [endpoint, options]);

    return useMemo(() => ({ data, hasError }), [data, hasError]);
};
