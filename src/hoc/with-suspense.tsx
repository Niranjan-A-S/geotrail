import React, { Suspense } from 'react';

export const withSuspense = <P extends Record<string, unknown>>(Component: React.ComponentType<P>, fallback: React.ReactNode) => {
    return (props: P) => (
        <Suspense fallback={fallback}>
            <Component {...props} />
        </Suspense>
    );
};

