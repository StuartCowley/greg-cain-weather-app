import React from "react";
import LocationDetails from "../components/LocationDetails";
import "../styles/App.css";

function App({ location }) {
  const { city, country } = location;
  return (
    <div className="App">
      <h1>Weather App</h1>
      <LocationDetails city={city} country={country} />
    </div>
  );
}

export default App;
