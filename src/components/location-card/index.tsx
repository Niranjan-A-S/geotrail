import { memo, useCallback, useMemo } from 'react';
import { IPlaceDetails } from '../../types';
import { CardListItem } from './list-item';

export const LocationCard: React.FC<{ data: IPlaceDetails }> = memo(({ data }) => {

    const { country, county, distance, formatted, lat, lon, postcode, state, state_code, state_district, suburb, timezone } = useMemo(() => data, [data]);

    const listItems = useMemo<Record<string, string | number>>(() => (
        {
            County: county,
            Country: country,
            State: state,
            District: state_district,
            Postcode: postcode,
            Suburb: suburb,
            Latitude: lat,
            Longitude: lon,
            StateCode: state_code,
            Distance: distance?.toFixed(2) + ' km',
            Timezone: timezone?.name + ' (' + timezone?.abbreviation_STD + ')'
        }
    ), [country, county, distance, lat, lon, postcode, state, state_code, state_district, suburb, timezone?.abbreviation_STD, timezone?.name]);

    const renderFeatureListItem = useCallback((key: string) => (
        <CardListItem
            key={key}
            name={key}
            value={listItems[key]}
        />
    ), [listItems]);

    return (
        <div className="max-w-md mx-auto bg-gradient-to-r from-blue-500 to-teal-400 text-white rounded-xl shadow-lg overflow-hidden md:max-w-2xl z-[1000] absolute right-[10px] top-[10px] hover:shadow-2xl transition-shadow duration-300">
            <div className="md:flex">
                <div className="p-8">
                    <h2 className="block mt-1 text-2xl leading-tight font-semibold">{suburb}</h2>
                    <p className="mt-2 text-gray-200">{formatted}</p>
                    <div className="mt-4 space-y-2">
                        {Object.keys(listItems).map(renderFeatureListItem)}
                    </div>
                </div>
            </div>
        </div>
    );
});
