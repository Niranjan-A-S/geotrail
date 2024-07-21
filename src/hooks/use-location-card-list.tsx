import { useMemo } from "react";
import { IPlaceDetails } from "../types";
import { getFormattedDistance, getFormattedTimezone } from "../utils";

export const useLocationCardList = (data: IPlaceDetails) => {
    const { country, county, distance, lat, lon, postcode, state, state_code, state_district, suburb, timezone } = useMemo(() => data, [data]);

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
            Distance: getFormattedDistance(distance),
            Timezone: getFormattedTimezone(timezone)
        }
    ), [country, county, distance, lat, lon, postcode, state, state_code, state_district, suburb, timezone]);

    return useMemo(() => listItems, [listItems]);

}