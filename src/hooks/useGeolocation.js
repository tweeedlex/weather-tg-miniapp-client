import { setLocation } from "../store/slice.js";
import { useEffect } from "react";

function getGeolocationByIP(ipAddress, dispatch, setIsLoading) {
  fetch(`http://ip-api.com/json/${ipAddress}`)
    .then((response) => response.json())
    .then((data) => {
      const latitude = data.lat;
      const longitude = data.lon;
      dispatch(setLocation(`${latitude},${longitude}`));
    })
    .catch((error) => {
      console.error("Error retrieving geolocation data:", error);
      setIsLoading(false);
    });
}

export const useGeolocation = (dispatch, setIsLoading) => {
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const lat = position.coords.latitude;
          const lon = position.coords.longitude;
          dispatch(setLocation(`${lat},${lon}`));
        },
        (error) => {
          fetch("https://ipapi.co/json/")
            .then((response) => response.json())
            .then((data) => {
              const ipAddress = data.ip;
              getGeolocationByIP(ipAddress, dispatch, setIsLoading);
            })
            .catch((error) => {
              console.error("Error retrieving IP address:", error);
              setIsLoading(false);
            });
        }
      );
    }
  }, []);
};
