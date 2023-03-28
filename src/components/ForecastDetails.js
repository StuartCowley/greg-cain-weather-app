import React from "react";
import PropTypes from "prop-types";

function ForecastDetails({ forecast }) {
  const { date, temperature, wind, humidity } = forecast;
  const formattedDate = new Date(date).toDateString();

  return (
    <div className="forecast-details" data-testid="forecast-details">
      <div className="forecast-details__date">{formattedDate}</div>
      <div className="forecast-details__temp-max">
        Max temperature:{temperature.max}&deg;C
      </div>
      <div className="forecast-details__temp-min">
        Min temperature:{temperature.min}&deg;C
      </div>
      <div className="forecast-details__wind-speed-direction">
        {wind.speed}MPH, {wind.direction.toUpperCase()}
      </div>
      <div className="forecast-details__humidity">{humidity}%</div>
    </div>
  );
}

export default ForecastDetails;

ForecastDetails.propTypes = {
  forecast: PropTypes.shape({
    date: PropTypes.number,
    temperature: PropTypes.shape({
      max: PropTypes.number,
      min: PropTypes.number,
    }),
    wind: PropTypes.shape({
      speed: PropTypes.number,
      direction: PropTypes.string,
    }),
    humidity: PropTypes.number,
  }).isRequired,
};
