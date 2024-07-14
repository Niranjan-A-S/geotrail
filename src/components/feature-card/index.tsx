/* eslint-disable @typescript-eslint/no-explicit-any */
import { memo, useCallback, useMemo } from 'react';
import { ICustomPopupProps as IFeatureProps } from '../../types';
import { FeatureListItem } from './feature-list-item';

export const FeatureCard: React.FC<{ result: IFeatureProps }> = memo(({ result }) => {

    const featureListItems = useMemo(() => (
        {
            County: result.county,
            Country: result.country,
            State: result.state,
            District: result.state_district,
            Postcode: result.postcode,
            Suburb: result.suburb,
            Latitude: result.lat,
            Longitude: result.lon,
            StateCode: result.state_code,
            Distance: result.distance?.toFixed(2) + ' km',
            Timezone: result.timezone?.name + ' (' + result.timezone?.abbreviation_STD + ')'
        }
    ), [result]);

    const renderFeatureListItem = useCallback((key: string) => <FeatureListItem key={key} featureName={key} value={(featureListItems as any)[key] || 'N/A'} />, [featureListItems]);

    return (

        result && <div className="max-w-md mx-auto bg-gradient-to-r from-blue-500 to-teal-400 text-white rounded-xl shadow-lg overflow-hidden md:max-w-2xl z-[1000] absolute right-[10px] top-[10px] hover:shadow-2xl transition-shadow duration-300">
            <div className="md:flex">
                <div className="p-8">
                    <h2 className="block mt-1 text-2xl leading-tight font-semibold">{result.suburb}</h2>
                    <p className="mt-2 text-gray-200">{result.formatted}</p>
                    <div className="mt-4 space-y-2">
                        {Object.keys(featureListItems).map(renderFeatureListItem)}
                    </div>
                </div>
            </div>
        </div>
    );
});
