import React from "react";
import LocationDetails from "../components/LocationDetails";
import ForecastSummaries from "./ForecastSummaries";
import ForecastDetails from "./ForecastDetails";

import "../styles/App.css";

function App(props) {
  const { forecasts, location } = props;
  return (
    <div className="weather-app">
      <h1>Weather App</h1>
      <LocationDetails city={location.city} country={location.country} />
      <ForecastSummaries forecasts={forecasts} />
      <ForecastDetails forecast={forecasts[0]} />
    </div>
  );
}

export default App;
