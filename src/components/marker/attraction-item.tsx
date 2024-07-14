import { FC, memo } from 'react';

export const AttractionItem: FC<{ name: string }> = memo(({ name }) => <li >{name}</li>);
