import {useEffect} from "react";
import {getAll} from "../requests/requests";

export const useGetWeather = (location, setIsLoading, dispatch) => {
    useEffect(() => {
        const savedLocation = localStorage.getItem("location")
        if (savedLocation) {
            getAll(dispatch, savedLocation)
        } else {
            getAll(dispatch, location);
        }
        if (location) {
            setIsLoading(false);
        }
    }, [location]);
}