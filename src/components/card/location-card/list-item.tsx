import { FC, memo } from 'react';
import { ICardListItem } from '../../../types';

export const CardListItem: FC<ICardListItem> = memo(({ name, value }) => (
    <p><strong>{name}:</strong> {value}</p>
));
