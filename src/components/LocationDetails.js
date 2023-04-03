import React from "react";

const LocationDetails = (props) => {
  const { city, country, errorMessage } = props;
  return errorMessage ? (
    <h1>{errorMessage}</h1>
  ) : (
    <h1 className="location-details">{`${city}, ${country}`}</h1>
  );
};

export default LocationDetails;
