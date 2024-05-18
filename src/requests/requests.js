import axios from "axios";
import {
  setCurrent,
  setFetchedLocation,
  setForecast,
  setFuture,
} from "../store/slice";
import { FORECAST_URL, FUTURE_URL, KEY } from "./config";

export const getAll = async (dispatch, location) => {
  if (!location) return;
  try {
    const { data } = await axios.get(
      `${FORECAST_URL}?key=${KEY}&q=${location}&days=7`
    );
    dispatch(setFetchedLocation(data.location));
    dispatch(setCurrent(data.current));
    dispatch(setForecast(data.forecast.forecastday));
  } catch (e) {
    alert("error");
    console.log(e);
  }
};

export const getFuture = async (dispatch, location, date) => {
  if (!location) return;
  try {
    const { data } = await axios.get(
      `${FUTURE_URL}?key=${KEY}&q=${location}&dt=${date}`
    );
    dispatch(setFuture(data.forecast.forecastday[0]));
  } catch (e) {
    alert("error");
    console.log(e);
  }
};
