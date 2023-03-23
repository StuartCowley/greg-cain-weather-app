import React from "react";
import LocationDetails from "../components/LocationDetails";
import ForecastSummaries from "./ForecastSummaries";
import "../styles/App.css";

function App(props) {
  const { forecasts, location } = props;
  return (
    <div className="App">
      <h1>Weather App</h1>
      <LocationDetails city={location.city} country={location.country} />
      <ForecastSummaries forecasts={forecasts} />
    </div>
  );
}

export default App;
