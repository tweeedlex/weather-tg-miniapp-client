import { createSlice } from "@reduxjs/toolkit";

export const weatherSlice = createSlice({
  name: "weather",
  initialState: {
    location: "",
    fetchedLocation: {},
    current: {},
    forecast: {},
    history: {},
    future: {},
  },
  reducers: {
    setLocation: (state, action) => {
      state.location = action.payload;
    },
    setFetchedLocation: (state, action) => {
      state.fetchedLocation = action.payload;
    },
    setCurrent: (state, action) => {
      state.current = action.payload;
    },
    setForecast: (state, action) => {
      state.forecast = action.payload;
    },
    setHistory: (state, action) => {
      state.history = action.payload;
    },
    setFuture: (state, action) => {
      state.future = action.payload;
    },
  },
});

export const {
  setLocation,
  setFetchedLocation,
  setCurrent,
  setForecast,
  setHistory,
  setFuture,
} = weatherSlice.actions;

export default weatherSlice.reducer;
