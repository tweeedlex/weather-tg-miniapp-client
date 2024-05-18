import { Route, Routes } from "react-router";
import { Current } from "./pages/Current/Current.jsx";
import { Forecast } from "./pages/Forecast/Forecast.jsx";
import { useEffect, useState } from "react";
import { History } from "./pages/History/History.jsx";
import { Future } from "./pages/Future/Future.jsx";
import { Header } from "./components/Header/Header.jsx";
import { useSelector } from "react-redux";
import { getAll } from "./requests/requests.js";
import { useDispatch } from "react-redux";
import { useBackground } from "./hooks/useBackground.js";
import { useGeolocation } from "./hooks/useGeolocation.js";
import { getGreetingData } from "./helpers/getGreetingData.js";

function App() {
  const location = useSelector((state) => state.location);
  const fetchedLocation = useSelector((state) => state.fetchedLocation);
  const current = useSelector((state) => state.current);
  const dispatch = useDispatch();
  useEffect(() => {
    getAll(dispatch, location);
    if (location) {
      setIsLoading(false);
    }
  }, [location]);

  const [isLoading, setIsLoading] = useState(true);

  const [background, setBackground] = useState("");

  useBackground(current, setBackground);
  useGeolocation(dispatch, setIsLoading);

  const [dayTime, userName] = getGreetingData(window.Telegram.WebApp, current)

  return (
    <div
      className="App"
      style={{
        background: `url("${background}") 0 0/cover no-repeat`,
      }}
    >
      {isLoading ? (
        <div className="loader">Make sure to allow location access</div>
      ) : (
        <>
          <div className="filter">
            <div></div>
          </div>
          <Header />
          <main>
            <div className="main__container">
              <h2>
                Good {dayTime}, {userName}!
              </h2>
              <h1>
                {fetchedLocation?.name
                    ? `${fetchedLocation.name}, ${
                        fetchedLocation.region
                            ? fetchedLocation.region + ", "
                            : ""
                    } ${fetchedLocation.country}`
                    : "No location yet. Please allow location access in your browser or search for a location. Make sure to turn on GPS on your device."}
              </h1>
              <Routes>
                <Route path="/" element={<Current/>}/>
                <Route path="/forecast" element={<Forecast/>}/>
                <Route path="/history" element={<History/>}/>
                <Route path="/future" element={<Future/>}/>
              </Routes>
            </div>
          </main>
        </>
      )}
    </div>
  );
}

export default App;
