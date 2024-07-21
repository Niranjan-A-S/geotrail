import { FC, memo } from 'react';

export const Footer: FC<{ copyright: string }> = memo(({ copyright }) => (
    <footer className="p-6 md:py-12 w-full">
        <div className="container max-w-7xl text-xs text-gray-500">
            {copyright}
        </div>
    </footer>
));
