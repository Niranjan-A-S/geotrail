import { FC, memo } from 'react';
import { IFeatureListItem } from '../../types';

export const FeatureListItem: FC<IFeatureListItem> = memo(({ featureName, value }) => (
    <p><strong>{featureName}:</strong> {value ?? 'N/A'}</p>
));
