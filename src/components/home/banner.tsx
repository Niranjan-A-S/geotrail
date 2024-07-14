import { FC, memo } from 'react';
import { IBannerProps } from '../../types';
import { Link } from 'react-router-dom';

export const Banner: FC<IBannerProps> = memo(({ imageSrc, path, title, subtitle }) => (
    <Link to={path}>
        <img
            src={imageSrc}
            width="550"
            height="310"
            alt={title}
            className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
        />
        <h2 className="mt-4 text-2xl font-bold">{title}</h2>
        <p className="mt-2 text-muted-foreground">{subtitle}</p>
    </Link >
));
