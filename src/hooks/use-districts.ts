import { IDistrict } from "../types";
import { useFetch } from "./use-fetch";

export const useDistricts = () => {
    return useFetch<Array<IDistrict>>('./districts.json');
}