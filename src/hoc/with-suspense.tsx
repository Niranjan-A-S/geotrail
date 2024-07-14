import React, { createElement, Suspense } from 'react';
import { Loader } from '../components/loader';

export const withSuspense = <P extends Record<string, unknown>>(Component: React.ComponentType<P>, fallback: React.ReactNode = createElement(Loader)) => (props: P) => (
        <Suspense fallback={fallback}>
            <Component {...props} />
        </Suspense>
);

