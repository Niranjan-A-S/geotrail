import { FC, memo } from 'react';

export const FeatureListItem: FC<{ featureName: string; value: string | number | undefined }> = memo(({ featureName, value }) => (
    <p><strong>{featureName}:</strong> {value ?? 'N/A'}</p>
));
